# Pump Support Agent — Setup Guide

## What's in this package

| File | Purpose |
|------|---------|
| `vectorize.py` | **Run once** — indexes all PDFs into a local vector DB |
| `search.py` | Search module — plugs into the backend |
| `agent_backend_v2.py` | Flask API server with real vector search |
| `PumpSupportAgent.jsx` | React chat UI (point at your backend) |

---

## Step 1 — Install Dependencies

```bash
pip install anthropic flask flask-cors pdfplumber chromadb sentence-transformers
```

> **sentence-transformers** downloads a ~80MB model on first run. It's local — no API key needed for embeddings.

---

## Step 2 — Add Your PDFs

Create a `pdfs/` folder and put your General Pump PDFs in it:

```
pdfs/
  ServiceManual.pdf
  Troubleshooting.pdf
  2018-Catalog-Online.pdf
  47_Series_Service_Instructions.pdf
  General_Pump_TS2021_Data_Sheet_2022.pdf
  KFMZOwnerManual.pdf
  MKRepairMan.pdf
  OilRecommend.pdf
```

---

## Step 3 — Index the PDFs (run once)

```bash
python vectorize.py
```

This will:
- Extract text from every page of every PDF
- Split into ~600-character overlapping chunks
- Embed each chunk using `all-MiniLM-L6-v2`
- Store everything in `./chroma_db/`

Expected output:
```
Found 8 PDFs ...
Loading embedding model: all-MiniLM-L6-v2 ...
Processing: ServiceManual.pdf ...
  Embedding 142 chunks ...
  ✓ 12 pages → 142 chunks indexed
...
✅ Done! 847 total chunks stored in ./chroma_db
```

**Only re-run when PDFs change.** The `chroma_db/` folder persists between server restarts.

---

## Step 4 — Test Search

```bash
# Make sure it works before starting the server
python search.py how to replace packings on 47 series
python search.py low pressure troubleshooting
python search.py GP Series 220 oil recommendation
```

---

## Step 5 — Start the Backend

```bash
export ANTHROPIC_API_KEY=sk-ant-...
python agent_backend_v2.py
```

Test it:
```bash
curl -X POST http://localhost:5000/api/chat \
     -H "Content-Type: application/json" \
     -d '{"messages":[{"role":"user","content":"My TS2021 has low pressure and pulsating flow"}]}'
```

---

## Step 6 — Connect the Frontend

In `PumpSupportAgent.jsx`, change:

```js
const DEMO_MODE = false;
const BACKEND_URL = "http://localhost:5000/api/chat";  // or your deployed URL
```

---

## TODOs to complete the agent

### Parts lookup (`do_lookup_part` in agent_backend_v2.py)
Connect to your real parts inventory:
```python
# Example with SQLite:
import sqlite3
conn = sqlite3.connect("parts.db")
row = conn.execute("SELECT * FROM parts WHERE part_number = ?", (part_number,)).fetchone()
```

### Diagnostic engine (`do_diagnose`)
Option A — Rules-based: build a lookup table from the troubleshooting guide
Option B — Use a second Claude call with a specialized diagnostic prompt
Option C — Train a classifier on historical service tickets

### Ticket creation (`do_create_ticket`)
Replace stub with your CRM/ticketing system API:
- Zendesk: `requests.post("https://your-domain.zendesk.com/api/v2/tickets", ...)`
- Salesforce: use `simple_salesforce` library
- ServiceNow: REST API

---

## Architecture Overview

```
User message
     │
     ▼
PumpSupportAgent.jsx  ──POST /api/chat──►  agent_backend_v2.py
                                                    │
                                            ┌───────▼────────┐
                                            │  Agent Loop     │
                                            │  (while True)   │
                                            └───────┬────────┘
                                                    │ tool_use
                                         ┌──────────▼──────────────┐
                                         │  search_documentation   │──► ChromaDB (chroma_db/)
                                         │  lookup_part            │──► [your parts DB]
                                         │  diagnose_issue         │──► [rules engine]
                                         │  create_service_ticket  │──► [your CRM]
                                         └─────────────────────────┘
                                                    │ end_turn
                                                    ▼
                                             Final response
```

---

## Upgrading the Embedding Model

`all-MiniLM-L6-v2` is fast and small (~80MB). For better accuracy, swap it in both `vectorize.py` and `search.py`:

| Model | Size | Speed | Quality |
|-------|------|-------|---------|
| `all-MiniLM-L6-v2` | 80MB | ⚡⚡⚡ | Good |
| `all-mpnet-base-v2` | 420MB | ⚡⚡ | Better |
| `BAAI/bge-large-en-v1.5` | 1.3GB | ⚡ | Best local |

Re-run `vectorize.py` after changing the model (embeddings must match).
