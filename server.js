const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.ANTHROPIC_API_KEY;

// ─── MIME TYPES ───
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

// ─── LOAD KNOWLEDGE BASE ───
let KB = {};
try {
  const kbCode = fs.readFileSync(path.join(__dirname, 'knowledge-base.js'), 'utf8');
  // Extract KB object from the JS file
  const sandbox = {};
  const fn = new Function('KB', kbCode.replace(/^const KB\s*=\s*/, 'Object.assign(KB, ') + ')');
  // Simpler approach: eval in controlled scope
  eval(kbCode);
  console.log('Knowledge base loaded');
} catch (e) {
  console.log('KB load note:', e.message, '- will use file directly');
}

// ─── KNOWLEDGE BASE SEARCH TOOL ───
function searchKnowledgeBase(query) {
  // Read the raw KB file and search through it
  try {
    const kbText = fs.readFileSync(path.join(__dirname, 'knowledge-base.js'), 'utf8');
    const q = query.toLowerCase();
    const terms = q.split(/\s+/).filter(t => t.length > 2);
    
    // Split into chunks and score them
    const lines = kbText.split('\n');
    const chunks = [];
    let currentChunk = [];
    
    for (const line of lines) {
      currentChunk.push(line);
      if (currentChunk.length >= 15) {
        chunks.push(currentChunk.join('\n'));
        // Keep some overlap
        currentChunk = currentChunk.slice(-3);
      }
    }
    if (currentChunk.length > 0) chunks.push(currentChunk.join('\n'));
    
    // Score chunks by term matches
    const scored = chunks.map(chunk => {
      const lower = chunk.toLowerCase();
      let score = 0;
      for (const term of terms) {
        const matches = (lower.match(new RegExp(term, 'g')) || []).length;
        score += matches;
      }
      return { chunk, score };
    }).filter(c => c.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
    
    if (scored.length === 0) {
      return 'No relevant information found in the knowledge base for: ' + query;
    }
    
    return scored.map(s => s.chunk).join('\n\n---\n\n');
  } catch (e) {
    return 'Error searching knowledge base: ' + e.message;
  }
}

function lookupPumpModel(model) {
  try {
    const kbText = fs.readFileSync(path.join(__dirname, 'knowledge-base.js'), 'utf8');
    const modelUpper = model.toUpperCase();
    const lines = kbText.split('\n');
    const relevant = [];
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toUpperCase().includes(modelUpper)) {
        // Grab surrounding context
        const start = Math.max(0, i - 3);
        const end = Math.min(lines.length, i + 5);
        relevant.push(lines.slice(start, end).join('\n'));
      }
    }
    
    if (relevant.length === 0) {
      return 'No information found for pump model: ' + model;
    }
    
    return relevant.slice(0, 10).join('\n\n---\n\n');
  } catch (e) {
    return 'Error looking up model: ' + e.message;
  }
}

function getTroubleshootingInfo(problem) {
  try {
    const kbText = fs.readFileSync(path.join(__dirname, 'knowledge-base.js'), 'utf8');
    const q = problem.toLowerCase();
    
    // Search specifically in troubleshooting sections
    const tsTerms = ['cause', 'remedy', 'troubleshoot', 'problem', 'symptom', 'solution', 'check', 'replace', 'inspect'];
    const allTerms = [...q.split(/\s+/).filter(t => t.length > 2), ...tsTerms];
    
    const lines = kbText.split('\n');
    const chunks = [];
    let currentChunk = [];
    
    for (const line of lines) {
      currentChunk.push(line);
      if (currentChunk.length >= 20) {
        chunks.push(currentChunk.join('\n'));
        currentChunk = currentChunk.slice(-5);
      }
    }
    if (currentChunk.length > 0) chunks.push(currentChunk.join('\n'));
    
    // Score with emphasis on troubleshooting content
    const scored = chunks.map(chunk => {
      const lower = chunk.toLowerCase();
      let score = 0;
      
      // Must contain at least one query term
      let hasQueryTerm = false;
      for (const term of q.split(/\s+/).filter(t => t.length > 2)) {
        if (lower.includes(term)) {
          score += 3;
          hasQueryTerm = true;
        }
      }
      if (!hasQueryTerm) return { chunk, score: 0 };
      
      // Bonus for troubleshooting-specific terms
      for (const term of tsTerms) {
        if (lower.includes(term)) score += 1;
      }
      
      return { chunk, score };
    }).filter(c => c.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
    
    if (scored.length === 0) {
      return 'No troubleshooting information found for: ' + problem;
    }
    
    return scored.map(s => s.chunk).join('\n\n---\n\n');
  } catch (e) {
    return 'Error searching troubleshooting data: ' + e.message;
  }
}

// ─── ANTHROPIC API TOOL DEFINITIONS ───
const tools = [
  {
    name: "search_knowledge_base",
    description: "Search the complete equipment knowledge base including pump specifications, accessories, maintenance procedures, installation guides, oil recommendations, system design info, and warranty details for General Pump and Alkota equipment. Use this for general questions about equipment, parts, procedures, or specs.",
    input_schema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The search query - use specific keywords related to the question"
        }
      },
      required: ["query"]
    }
  },
  {
    name: "lookup_pump_model",
    description: "Look up specific information about a pump model by its model number (e.g., TS2021, EZ4040G, T991). Returns specs, GPM, PSI, RPM, and related data.",
    input_schema: {
      type: "object",
      properties: {
        model: {
          type: "string",
          description: "The pump model number to look up"
        }
      },
      required: ["model"]
    }
  },
  {
    name: "get_troubleshooting_info",
    description: "Search for troubleshooting information about equipment problems. Use this when a user describes a problem like low pressure, pulsation, leaks, overheating, noise, rough running, packing failure, burner issues, or other equipment malfunctions.",
    input_schema: {
      type: "object",
      properties: {
        problem: {
          type: "string",
          description: "Description of the problem or symptom to troubleshoot"
        }
      },
      required: ["problem"]
    }
  }
];

// ─── CALL ANTHROPIC API ───
async function callAnthropic(messages) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 2048,
      system: `You are P-Supp, an expert equipment service assistant for General Pump and Alkota pressure washer equipment. You help technicians and service personnel troubleshoot problems, look up pump specifications, find maintenance procedures, and answer technical questions.

IMPORTANT RULES:
- Always use your tools to search the knowledge base before answering technical questions
- Be specific and actionable in your responses
- Include part numbers, specifications, and step-by-step procedures when available
- If you can't find information in the knowledge base, say so clearly
- Keep responses concise but thorough
- Format responses with clear sections when listing multiple causes/remedies`,
      messages: messages,
      tools: tools
    })
  });
  
  return await response.json();
}

// ─── PROCESS TOOL CALLS (AGENT LOOP) ───
async function runAgent(userMessage) {
  if (!API_KEY) {
    return "⚠️ AI agent is not configured. Set the ANTHROPIC_API_KEY environment variable in Railway to enable AI-powered responses.";
  }
  
  let messages = [{ role: 'user', content: userMessage }];
  let maxTurns = 5;
  
  while (maxTurns > 0) {
    maxTurns--;
    
    const response = await callAnthropic(messages);
    
    if (response.error) {
      return "API Error: " + (response.error.message || JSON.stringify(response.error));
    }
    
    // Check if there are tool calls
    const toolUseBlocks = (response.content || []).filter(b => b.type === 'tool_use');
    
    if (toolUseBlocks.length === 0) {
      // No tool calls — return the text response
      const textBlocks = (response.content || []).filter(b => b.type === 'text');
      return textBlocks.map(b => b.text).join('\n');
    }
    
    // Process tool calls
    messages.push({ role: 'assistant', content: response.content });
    
    const toolResults = [];
    for (const toolCall of toolUseBlocks) {
      let result;
      
      switch (toolCall.name) {
        case 'search_knowledge_base':
          result = searchKnowledgeBase(toolCall.input.query);
          break;
        case 'lookup_pump_model':
          result = lookupPumpModel(toolCall.input.model);
          break;
        case 'get_troubleshooting_info':
          result = getTroubleshootingInfo(toolCall.input.problem);
          break;
        default:
          result = 'Unknown tool: ' + toolCall.name;
      }
      
      toolResults.push({
        type: 'tool_result',
        tool_use_id: toolCall.id,
        content: result.substring(0, 15000) // Limit size
      });
    }
    
    messages.push({ role: 'user', content: toolResults });
  }
  
  return "I searched multiple sources but couldn't compile a complete answer. Please try rephrasing your question.";
}

// ─── HTTP SERVER ───
const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // API endpoint
  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const { message } = JSON.parse(body);
        if (!message) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing message' }));
          return;
        }
        
        console.log(`[Chat] ${message.substring(0, 80)}...`);
        const reply = await runAgent(message);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ reply }));
      } catch (e) {
        console.error('Chat error:', e);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Server error: ' + e.message }));
      }
    });
    return;
  }
  
  // Health check
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      status: 'ok', 
      ai: API_KEY ? 'configured' : 'not configured',
      timestamp: new Date().toISOString()
    }));
    return;
  }
  
  // Static files
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, filePath);
  const ext = path.extname(filePath);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`P-Supp running on port ${PORT}`);
  console.log(`AI Agent: ${API_KEY ? '✓ Configured' : '✗ Set ANTHROPIC_API_KEY to enable'}`);
});
