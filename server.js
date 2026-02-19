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
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml'
};

// ─── FAST IN-MEMORY SEARCH ENGINE ───
// Pre-loads everything at startup — zero disk I/O at query time

const searchEngine = {
  chunks: [],        // array of { text, lower, words }
  invertedIndex: {}, // word → Set of chunk indices
  lines: [],         // raw lines for model lookup
  linesUpper: [],    // uppercased lines for fast model match
  ready: false
};

function buildSearchEngine() {
  const t0 = Date.now();
  try {
    const kbText = fs.readFileSync(path.join(__dirname, 'knowledge-base.js'), 'utf8');
    
    // Store lines for model lookup
    searchEngine.lines = kbText.split('\n');
    searchEngine.linesUpper = searchEngine.lines.map(l => l.toUpperCase());
    
    // Build overlapping chunks (15 lines, 3 line overlap)
    const lines = searchEngine.lines;
    let currentChunk = [];
    for (let i = 0; i < lines.length; i++) {
      currentChunk.push(lines[i]);
      if (currentChunk.length >= 15) {
        const text = currentChunk.join('\n');
        const lower = text.toLowerCase();
        const words = new Set(lower.match(/[a-z0-9]+/g) || []);
        const idx = searchEngine.chunks.length;
        searchEngine.chunks.push({ text, lower, words });
        
        // Build inverted index
        for (const w of words) {
          if (w.length < 3) continue;
          if (!searchEngine.invertedIndex[w]) searchEngine.invertedIndex[w] = new Set();
          searchEngine.invertedIndex[w].add(idx);
        }
        
        currentChunk = currentChunk.slice(-3);
      }
    }
    // Final chunk
    if (currentChunk.length > 0) {
      const text = currentChunk.join('\n');
      const lower = text.toLowerCase();
      const words = new Set(lower.match(/[a-z0-9]+/g) || []);
      const idx = searchEngine.chunks.length;
      searchEngine.chunks.push({ text, lower, words });
      for (const w of words) {
        if (w.length < 3) continue;
        if (!searchEngine.invertedIndex[w]) searchEngine.invertedIndex[w] = new Set();
        searchEngine.invertedIndex[w].add(idx);
      }
    }
    
    searchEngine.ready = true;
    const dt = Date.now() - t0;
    const indexSize = Object.keys(searchEngine.invertedIndex).length;
    console.log(`Search engine ready: ${searchEngine.chunks.length} chunks, ${indexSize} terms indexed in ${dt}ms`);
  } catch (e) {
    console.error('Search engine build error:', e.message);
  }
}

// Build index on startup
buildSearchEngine();

// ─── SEARCH FUNCTIONS (all in-memory, no disk I/O) ───

function searchKnowledgeBase(query) {
  if (!searchEngine.ready) return 'Search engine not ready';
  const terms = query.toLowerCase().match(/[a-z0-9]+/g)?.filter(t => t.length > 2) || [];
  if (terms.length === 0) return 'No search terms provided';
  
  // Find candidate chunks via inverted index
  const candidates = new Map(); // chunkIdx → score
  for (const term of terms) {
    const exact = searchEngine.invertedIndex[term];
    if (exact) {
      for (const idx of exact) {
        candidates.set(idx, (candidates.get(idx) || 0) + 3);
      }
    }
    // Prefix match for partial terms (e.g. "puls" matches "pulsation")
    if (term.length >= 4) {
      for (const [word, idxSet] of Object.entries(searchEngine.invertedIndex)) {
        if (word !== term && word.startsWith(term)) {
          for (const idx of idxSet) {
            candidates.set(idx, (candidates.get(idx) || 0) + 1);
          }
        }
      }
    }
  }
  
  if (candidates.size === 0) return 'No relevant information found for: ' + query;
  
  // Sort by score and return top results
  const sorted = [...candidates.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
  
  return sorted.map(([idx]) => searchEngine.chunks[idx].text).join('\n\n---\n\n');
}

function lookupPumpModel(model) {
  if (!searchEngine.ready) return 'Search engine not ready';
  const modelUpper = model.toUpperCase().trim();
  const relevant = [];
  
  for (let i = 0; i < searchEngine.linesUpper.length; i++) {
    if (searchEngine.linesUpper[i].includes(modelUpper)) {
      const start = Math.max(0, i - 3);
      const end = Math.min(searchEngine.lines.length, i + 5);
      relevant.push(searchEngine.lines.slice(start, end).join('\n'));
    }
  }
  
  if (relevant.length === 0) return 'No information found for pump model: ' + model;
  return relevant.slice(0, 10).join('\n\n---\n\n');
}

function getTroubleshootingInfo(problem) {
  if (!searchEngine.ready) return 'Search engine not ready';
  const q = problem.toLowerCase();
  const queryTerms = q.match(/[a-z0-9]+/g)?.filter(t => t.length > 2) || [];
  const tsTerms = ['cause', 'remedy', 'troubleshoot', 'problem', 'symptom', 'solution', 'check', 'replace', 'inspect'];
  
  // Find candidates via inverted index using query terms
  const candidates = new Map();
  for (const term of queryTerms) {
    const exact = searchEngine.invertedIndex[term];
    if (exact) {
      for (const idx of exact) {
        candidates.set(idx, (candidates.get(idx) || 0) + 3);
      }
    }
  }
  
  if (candidates.size === 0) return 'No troubleshooting information found for: ' + problem;
  
  // Boost chunks that also contain troubleshooting-specific terms
  for (const [idx, score] of candidates) {
    const chunk = searchEngine.chunks[idx];
    let boost = 0;
    for (const t of tsTerms) {
      if (chunk.words.has(t)) boost += 1;
    }
    candidates.set(idx, score + boost);
  }
  
  const sorted = [...candidates.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  
  return sorted.map(([idx]) => searchEngine.chunks[idx].text).join('\n\n---\n\n');
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
async function callAnthropic(messages, stream = false) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2048,
      stream: stream,
      system: `You are P-Supp, an expert equipment service assistant for General Pump and Alkota pressure washer equipment. You help technicians and service personnel troubleshoot problems, look up pump specifications, find maintenance procedures, and answer technical questions.

IMPORTANT RULES:
- Always use your tools to search the knowledge base before answering technical questions
- Be specific and actionable in your responses
- Include part numbers, specifications, and step-by-step procedures when available
- If you can't find information in the knowledge base, say so clearly
- Keep responses concise but thorough
- Format responses with clear sections when listing multiple causes/remedies

IMAGE ANALYSIS:
When a user uploads a photo of equipment, analyze it carefully:
- Identify the brand (General Pump, Alkota, CAT, AR, Comet, etc.) from logos, nameplates, or design
- Read any model numbers, serial numbers, or data plates visible
- Identify components: pump type, unloader, chemical injector, hoses, fittings, spray gun, nozzles
- Note any visible damage: leaks, corrosion, worn parts, broken fittings, discoloration
- After identifying the equipment, search the knowledge base for relevant specs and troubleshooting info
- Provide specific maintenance or repair recommendations based on what you see`,
      messages: messages,
      tools: tools
    })
  });
  
  if (stream) return response; // Return raw response for streaming
  return await response.json();
}

// ─── PROCESS TOOL CALLS (AGENT LOOP) ───
async function runAgent(userMessage, imageData, imageType) {
  if (!API_KEY) {
    return "⚠️ AI agent is not configured. Set the ANTHROPIC_API_KEY environment variable in Railway to enable AI-powered responses.";
  }
  
  // Build user content - text only or text + image
  let userContent;
  if (imageData) {
    userContent = [
      { type: 'image', source: { type: 'base64', media_type: imageType || 'image/jpeg', data: imageData }},
      { type: 'text', text: userMessage }
    ];
  } else {
    userContent = userMessage;
  }
  
  let messages = [{ role: 'user', content: userContent }];
  let maxTurns = 3;
  
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
      const toolT0 = Date.now();
      
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
      
      console.log(`  [Tool] ${toolCall.name}(${JSON.stringify(toolCall.input).substring(0,60)}) → ${Date.now()-toolT0}ms`);
      
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
  
  // API endpoint - streaming
  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';
    let bodySize = 0;
    const MAX_BODY = 25 * 1024 * 1024; // 25MB
    req.on('data', chunk => {
      bodySize += chunk.length;
      if (bodySize > MAX_BODY) { req.destroy(); return; }
      body += chunk;
    });
    req.on('end', async () => {
      try {
        const { message, image, image_type } = JSON.parse(body);
        if (!message && !image) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing message' }));
          return;
        }
        
        const userMsg = message || 'Identify this equipment and any visible issues.';
        console.log(`[Chat] ${image ? '📷 Image + ' : ''}${userMsg.substring(0, 80)}...`);
        const t0 = Date.now();
        
        // Build user content
        let userContent;
        if (image) {
          userContent = [
            { type: 'image', source: { type: 'base64', media_type: image_type || 'image/jpeg', data: image }},
            { type: 'text', text: userMsg }
          ];
        } else {
          userContent = userMsg;
        }
        
        let messages = [{ role: 'user', content: userContent }];
        let maxTurns = 3;
        
        // Tool call phase (non-streamed, fast with Haiku)
        while (maxTurns > 0) {
          maxTurns--;
          const response = await callAnthropic(messages, false);
          
          if (response.error) {
            res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' });
            res.write(`data: ${JSON.stringify({error: response.error.message || 'API Error'})}\n\n`);
            res.write('data: [DONE]\n\n');
            res.end();
            return;
          }
          
          const toolUseBlocks = (response.content || []).filter(b => b.type === 'tool_use');
          
          if (toolUseBlocks.length === 0) {
            // No tool calls — return text as non-streamed (already have full response)
            const textBlocks = (response.content || []).filter(b => b.type === 'text');
            const reply = textBlocks.map(b => b.text).join('\n');
            console.log(`[Chat] Responded in ${Date.now() - t0}ms`);
            res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' });
            res.write(`data: ${JSON.stringify({text: reply})}\n\n`);
            res.write('data: [DONE]\n\n');
            res.end();
            return;
          }
          
          // Process tool calls
          messages.push({ role: 'assistant', content: response.content });
          const toolResults = [];
          for (const toolCall of toolUseBlocks) {
            let result;
            const toolT0 = Date.now();
            switch (toolCall.name) {
              case 'search_knowledge_base': result = searchKnowledgeBase(toolCall.input.query); break;
              case 'lookup_pump_model': result = lookupPumpModel(toolCall.input.model); break;
              case 'get_troubleshooting_info': result = getTroubleshootingInfo(toolCall.input.problem); break;
              default: result = 'Unknown tool: ' + toolCall.name;
            }
            console.log(`  [Tool] ${toolCall.name}(${JSON.stringify(toolCall.input).substring(0,60)}) → ${Date.now()-toolT0}ms`);
            toolResults.push({ type: 'tool_result', tool_use_id: toolCall.id, content: result.substring(0, 15000) });
          }
          messages.push({ role: 'user', content: toolResults });
          
          // If last turn, stream the final response
          if (maxTurns === 0 || toolUseBlocks.length > 0) {
            // Start SSE for the final response
            res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' });
            
            try {
              const streamResp = await callAnthropic(messages, true);
              const reader = streamResp.body;
              let buffer = '';
              
              // Read the stream
              for await (const chunk of reader) {
                buffer += chunk.toString();
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';
                
                for (const line of lines) {
                  if (line.startsWith('data: ')) {
                    const data = line.slice(6);
                    if (data === '[DONE]') continue;
                    try {
                      const parsed = JSON.parse(data);
                      if (parsed.type === 'content_block_delta' && parsed.delta?.type === 'text_delta') {
                        res.write(`data: ${JSON.stringify({text: parsed.delta.text})}\n\n`);
                      }
                      // If tool_use comes back, we can't handle more turns in stream mode
                    } catch(e) {}
                  }
                }
              }
            } catch(e) {
              console.error('Stream error:', e.message);
            }
            
            console.log(`[Chat] Streamed in ${Date.now() - t0}ms`);
            res.write('data: [DONE]\n\n');
            res.end();
            return;
          }
        }
        
        res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' });
        res.write(`data: ${JSON.stringify({text: "I searched multiple sources but couldn't compile a complete answer. Please try rephrasing."})}\n\n`);
        res.write('data: [DONE]\n\n');
        res.end();
        
      } catch (e) {
        console.error('Chat error:', e);
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Server error: ' + e.message }));
        } else {
          res.write(`data: ${JSON.stringify({error: e.message})}\n\n`);
          res.write('data: [DONE]\n\n');
          res.end();
        }
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
      search: searchEngine.ready ? `${searchEngine.chunks.length} chunks, ${Object.keys(searchEngine.invertedIndex).length} terms` : 'not ready',
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
