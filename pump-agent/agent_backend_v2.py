"""
Agentic Pump Support Backend - Python/Flask
===========================================
Now with REAL document search via ChromaDB + semantic embeddings.

Setup:
    1. pip install anthropic flask pdfplumber chromadb sentence-transformers
    2. Add your PDFs to ./pdfs/
    3. python vectorize.py          ← run once to index PDFs
    4. ANTHROPIC_API_KEY=sk-... python agent_backend.py

Test:
    curl -X POST http://localhost:5000/api/chat \
         -H "Content-Type: application/json" \
         -d '{"messages":[{"role":"user","content":"My TS2021 has low pressure"}]}'
"""

import json
import anthropic
from flask import Flask, request, jsonify
from flask_cors import CORS

# ── Real search (from search.py) ──────────────────────────────────────────────
try:
    from search import search_documentation as _search_docs
    SEARCH_AVAILABLE = True
    print("✅ Vector search loaded")
except ImportError:
    SEARCH_AVAILABLE = False
    print("⚠️  search.py not found — using stub. Run vectorize.py first.")

app = Flask(__name__)
CORS(app)  # Allow requests from your frontend

client = anthropic.Anthropic()
MODEL = "claude-sonnet-4-6"

SYSTEM_PROMPT = """You are an expert technical support agent for General Pump pressure washer systems.
You have access to tools to search product documentation, look up parts, and diagnose issues.

When a user reports a problem:
1. ALWAYS call search_documentation first before answering
2. Use diagnose_issue for symptom-based questions, then search_documentation for the repair procedure
3. Call lookup_part whenever a part number or kit is mentioned
4. After resolving the main issue, proactively suggest 1-2 related maintenance items
5. Always cite the specific document and page number you found information in
6. If you cannot find an answer in the docs, say so clearly — do not guess

Be concise but thorough. Use technical language appropriate for service technicians."""

TOOLS = [
    {
        "name": "search_documentation",
        "description": "Search General Pump service manuals, troubleshooting guides, and product catalogs for technical information.",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Natural language search query"},
                "doc_type": {
                    "type": "string",
                    "enum": ["service_manual", "troubleshooting", "catalog", "all"],
                    "description": "Filter by document type. Use 'all' if unsure."
                }
            },
            "required": ["query"]
        }
    },
    {
        "name": "lookup_part",
        "description": "Look up a part by number or description. Returns details, compatibility, and availability.",
        "input_schema": {
            "type": "object",
            "properties": {
                "part_number": {"type": "string", "description": "Part number (e.g. '100075') or description"},
                "pump_model": {"type": "string", "description": "Optional pump model filter"}
            },
            "required": ["part_number"]
        }
    },
    {
        "name": "diagnose_issue",
        "description": "Run structured diagnostic from reported symptoms. Returns likely causes ranked by probability.",
        "input_schema": {
            "type": "object",
            "properties": {
                "symptoms": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "List of symptoms e.g. ['low pressure', 'pulsating flow', 'oil leak']"
                },
                "pump_model": {"type": "string"},
                "operating_hours": {"type": "number"}
            },
            "required": ["symptoms"]
        }
    },
    {
        "name": "create_service_ticket",
        "description": "Create a service ticket or parts order when the user needs a technician or replacement parts.",
        "input_schema": {
            "type": "object",
            "properties": {
                "issue_summary": {"type": "string"},
                "parts_needed": {"type": "array", "items": {"type": "string"}},
                "priority": {"type": "string", "enum": ["low", "medium", "high", "emergency"]},
                "customer_contact": {"type": "string"}
            },
            "required": ["issue_summary", "priority"]
        }
    }
]

# ── Tool Implementations ──────────────────────────────────────────────────────

def execute_tool(name: str, tool_input: dict) -> str:
    if name == "search_documentation":
        return do_search(**tool_input)
    elif name == "lookup_part":
        return do_lookup_part(**tool_input)
    elif name == "diagnose_issue":
        return do_diagnose(**tool_input)
    elif name == "create_service_ticket":
        return do_create_ticket(**tool_input)
    return json.dumps({"error": f"Unknown tool: {name}"})


def do_search(query: str, doc_type: str = "all") -> str:
    if SEARCH_AVAILABLE:
        return _search_docs(query, doc_type)
    # Fallback stub
    return json.dumps({"results": [
        {"content": f"[STUB] No vector DB found. Run vectorize.py to index PDFs. Query was: '{query}'",
         "source": "N/A", "page": 0, "score": 0}
    ]})


def do_lookup_part(part_number: str, pump_model: str = None) -> str:
    # TODO: Replace with real parts database query
    # Example: query your SQL DB or inventory API
    #   result = db.query("SELECT * FROM parts WHERE part_number = ?", part_number)
    return json.dumps({
        "part_number": part_number,
        "description": f"[TODO: wire up parts DB for {part_number}]",
        "compatible_models": [pump_model] if pump_model else [],
        "in_stock": True,
        "price": None,
        "note": "Connect this to your real parts inventory system."
    })


def do_diagnose(symptoms: list, pump_model: str = None, operating_hours: float = None) -> str:
    # This is a good candidate for a second Claude call with a specialized prompt,
    # or a rules-based engine built from the troubleshooting guide.
    # TODO: Replace with real diagnostic logic
    hours_note = f" (after {operating_hours} hours)" if operating_hours else ""
    model_note = f" on {pump_model}" if pump_model else ""
    return json.dumps({
        "diagnosis_for": f"{', '.join(symptoms)}{model_note}{hours_note}",
        "likely_causes": [
            {"cause": "Worn V-packings", "probability": "high",
             "fix": "Replace packing kit. See 47_Series_Service_Instructions.pdf p.11"},
            {"cause": "Damaged inlet/outlet valves", "probability": "medium",
             "fix": "Inspect valve seats and O-rings. Replace valve assembly if worn."},
            {"cause": "Air leak in inlet plumbing", "probability": "medium",
             "fix": "Check all inlet fittings, hose, and strainer for cracks or loose connections."},
        ],
        "urgency": "high" if any(s in ["oil leak", "knocking", "seized"] for s in symptoms) else "medium",
        "note": "[TODO: Replace with real rules-based or ML diagnostic engine]"
    })


def do_create_ticket(issue_summary: str, priority: str,
                     parts_needed: list = None, customer_contact: str = None) -> str:
    # TODO: Integrate with your ticketing system (Zendesk, Salesforce, ServiceNow, etc.)
    import random, string
    ticket_id = "TKT-" + "".join(random.choices(string.digits, k=5))
    return json.dumps({
        "ticket_id": ticket_id,
        "status": "created",
        "priority": priority,
        "parts_needed": parts_needed or [],
        "message": f"Ticket {ticket_id} created. Follow-up within {'2 hours' if priority == 'emergency' else '1 business day'}.",
        "note": "[TODO: Wire up to your real ticketing system]"
    })


# ── Agent Loop ────────────────────────────────────────────────────────────────

def run_agent(messages: list) -> dict:
    """
    Core agentic loop: call Claude → execute tools → repeat until done.
    Claude decides when it has enough information to respond.
    """
    while True:
        response = client.messages.create(
            model=MODEL,
            max_tokens=4096,
            system=SYSTEM_PROMPT,
            tools=TOOLS,
            messages=messages
        )

        if response.stop_reason == "end_turn":
            text = next((b.text for b in response.content if hasattr(b, "text")), "")
            return {"role": "assistant", "content": text}

        if response.stop_reason == "tool_use":
            messages.append({"role": "assistant", "content": response.content})

            tool_results = []
            for block in response.content:
                if block.type == "tool_use":
                    print(f"  → Tool: {block.name}({json.dumps(block.input)[:80]})")
                    result = execute_tool(block.name, block.input)
                    tool_results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": result
                    })
            
            messages.append({"role": "user", "content": tool_results})


# ── Routes ────────────────────────────────────────────────────────────────────

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json or {}
    messages = data.get("messages", [])
    
    if not messages:
        return jsonify({"error": "messages required"}), 400
    
    try:
        result = run_agent(list(messages))  # copy to avoid mutating caller's list
        return jsonify(result)
    except Exception as e:
        print(f"Agent error: {e}")
        return jsonify({"error": str(e)}), 500


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({
        "status": "ok",
        "search_available": SEARCH_AVAILABLE,
        "model": MODEL
    })


if __name__ == "__main__":
    print(f"\n{'='*50}")
    print("Pump Support Agent Backend")
    print(f"{'='*50}")
    print(f"Model:  {MODEL}")
    print(f"Search: {'✅ vector DB' if SEARCH_AVAILABLE else '⚠️  stub (run vectorize.py)'}")
    print(f"URL:    http://localhost:5000")
    print(f"{'='*50}\n")
    app.run(debug=True, port=5000)
