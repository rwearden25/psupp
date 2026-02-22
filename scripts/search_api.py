#!/usr/bin/env python3
"""
Knowledge Base Search API + AI Agent
=====================================
Flask API that combines SQLite FTS5 local search with Claude AI
and web search fallback for comprehensive answers.

Usage:
    python search_api.py                              # Default settings
    python search_api.py --db knowledge.db --port 5001
    
    Set your API key:
    set ANTHROPIC_API_KEY=sk-ant-...   (Windows)
    export ANTHROPIC_API_KEY=sk-ant-... (Mac/Linux)

Endpoints:
    POST /api/ask          - AI-powered Q&A (local KB + web search fallback)
    GET  /api/search       - Direct FTS5 search (no AI)
    GET  /api/model/<num>  - Model number lookup
    GET  /api/stats        - Database statistics
    GET  /api/brands       - List brands
    GET  /api/documents    - List ingested documents
    GET  /api/health       - Health check
"""

import sqlite3
import os
import sys
import re
import json
import argparse
import time
from pathlib import Path

# ── Install dependencies if needed ──
def ensure_packages():
    required = {'flask': 'flask', 'flask_cors': 'flask-cors', 'anthropic': 'anthropic'}
    missing = []
    for module, package in required.items():
        try:
            __import__(module)
        except ImportError:
            missing.append(package)
    if missing:
        import subprocess
        print(f"Installing: {', '.join(missing)}")
        subprocess.check_call([sys.executable, '-m', 'pip', 'install'] + missing + 
                            ['--break-system-packages', '-q'])

ensure_packages()

from flask import Flask, request, jsonify, Response, stream_with_context
from flask_cors import CORS
import anthropic

app = Flask(__name__)
CORS(app)

# ── Configuration ──
DB_PATH = 'knowledge.db'
ANTHROPIC_API_KEY = os.environ.get('ANTHROPIC_API_KEY', '')
CLAUDE_MODEL = 'claude-sonnet-4-5-20250514'
MAX_CONTEXT_CHUNKS = 8        # Max chunks to send to Claude
WEB_SEARCH_THRESHOLD = 3      # If fewer than this many chunks found, also use web search


# ═══════════════════════════════════════════════════════════════
# DATABASE LAYER
# ═══════════════════════════════════════════════════════════════

def get_db():
    """Get a database connection."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA cache_size=-32000")
    return conn


def fts_search(query, limit=20, brand=None, chunk_type=None):
    """Full-text search with optional filters."""
    conn = get_db()
    clean_query = re.sub(r'[^\w\s\-]', '', query)
    terms = clean_query.split()
    if not terms:
        conn.close()
        return []
    
    fts_query = ' '.join(terms)
    
    sql = """
        SELECT 
            c.id, c.content, c.section, c.chunk_type, c.page_num, c.word_count,
            d.id as doc_id, d.filename, d.title, d.brand, d.doc_type,
            rank
        FROM chunks_fts 
        JOIN chunks c ON c.id = chunks_fts.rowid
        JOIN documents d ON d.id = c.doc_id
        WHERE chunks_fts MATCH ?
    """
    params = [fts_query]
    
    if brand:
        sql += " AND d.brand = ?"
        params.append(brand)
    if chunk_type:
        sql += " AND c.chunk_type = ?"
        params.append(chunk_type)
    
    sql += " ORDER BY rank LIMIT ?"
    params.append(limit)
    
    try:
        results = conn.execute(sql, params).fetchall()
        output = []
        for r in results:
            output.append({
                'chunk_id': r['id'],
                'content': r['content'],
                'section': r['section'],
                'chunk_type': r['chunk_type'],
                'page_num': r['page_num'],
                'word_count': r['word_count'],
                'doc_id': r['doc_id'],
                'filename': r['filename'],
                'title': r['title'],
                'brand': r['brand'],
                'doc_type': r['doc_type'],
                'relevance_score': abs(r['rank']),
            })
        conn.close()
        return output
    except Exception as e:
        conn.close()
        # Fallback: try prefix matching
        try:
            conn2 = get_db()
            fts_query2 = ' OR '.join(f'{t}*' for t in terms)
            results = conn2.execute(sql, [fts_query2] + params[1:]).fetchall()
            conn2.close()
            return [dict(r) for r in results]
        except:
            return []


def format_context_for_claude(chunks):
    """Format search results into context string for Claude."""
    if not chunks:
        return "No relevant information found in the local knowledge base."
    
    context_parts = []
    for i, chunk in enumerate(chunks[:MAX_CONTEXT_CHUNKS], 1):
        context_parts.append(
            f"[Source {i}: {chunk['brand']} - {chunk['title']} | "
            f"{chunk['section']} | Page {chunk['page_num']} | "
            f"File: {chunk['filename']}]\n"
            f"{chunk['content']}"
        )
    
    return '\n\n---\n\n'.join(context_parts)


# ═══════════════════════════════════════════════════════════════
# CLAUDE AI AGENT
# ═══════════════════════════════════════════════════════════════

SYSTEM_PROMPT = """You are a pressure washer and pump equipment support specialist. 
You help technicians and customers diagnose issues, find specifications, perform maintenance, 
and locate parts for pressure washers, pumps, engines, burners, and related equipment.

RULES:
1. Always prioritize information from the local knowledge base context provided.
2. If the local context has the answer, use it and cite the source document and page.
3. If the local context is insufficient or empty, use web search to find the answer.
4. When using web search results, clearly indicate the information came from an external source.
5. Be specific with part numbers, torque specs, and procedures — technicians need precision.
6. If you genuinely don't know and can't find the answer, say so honestly.
7. NEVER share manufacturer contact information (phone, fax, email, physical address, website URLs) 
   from the knowledge base documents.
8. Keep responses practical and action-oriented.
9. For troubleshooting, use a systematic approach: symptom → probable cause → solution.
10. When referencing service procedures, include the relevant safety warnings."""


def ask_claude(user_question, local_results, use_web_search=False, conversation_history=None):
    """
    Send question to Claude with local KB context and optional web search.
    Returns the full response.
    """
    if not ANTHROPIC_API_KEY:
        return {
            'answer': 'Anthropic API key not configured. Set ANTHROPIC_API_KEY environment variable.',
            'sources': 'none',
            'used_web_search': False,
            'error': True
        }
    
    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)
    
    # Format local context
    context = format_context_for_claude(local_results)
    
    # Build the user message
    user_message = f"""Answer the following question using the provided knowledge base context.
If the context doesn't contain enough information to fully answer the question, use web search to supplement.

KNOWLEDGE BASE CONTEXT:
{context}

QUESTION: {user_question}"""
    
    # Build messages (support conversation history for multi-turn)
    messages = []
    if conversation_history:
        messages.extend(conversation_history)
    messages.append({"role": "user", "content": user_message})
    
    # Configure tools
    tools = []
    if use_web_search:
        tools.append({
            "type": "web_search_20250305",
            "name": "web_search"
        })
    
    try:
        api_kwargs = {
            "model": CLAUDE_MODEL,
            "max_tokens": 2048,
            "system": SYSTEM_PROMPT,
            "messages": messages,
        }
        if tools:
            api_kwargs["tools"] = tools
        
        response = client.messages.create(**api_kwargs)
        
        # Extract text from response
        answer_parts = []
        citations = []
        used_web = False
        
        for block in response.content:
            if block.type == "text":
                answer_parts.append(block.text)
            elif block.type == "web_search_tool_result":
                used_web = True
                if hasattr(block, 'content'):
                    for item in block.content:
                        if hasattr(item, 'url') and hasattr(item, 'title'):
                            citations.append({
                                'title': item.title,
                                'url': item.url
                            })
        
        answer = '\n'.join(answer_parts)
        
        # Build source info
        local_sources = []
        for chunk in local_results[:MAX_CONTEXT_CHUNKS]:
            source = f"{chunk['brand']} - {chunk['title']} (p.{chunk['page_num']})"
            if source not in local_sources:
                local_sources.append(source)
        
        return {
            'answer': answer,
            'local_sources': local_sources,
            'web_citations': citations,
            'used_web_search': used_web,
            'local_chunks_found': len(local_results),
            'model': CLAUDE_MODEL,
            'error': False
        }
        
    except anthropic.APIError as e:
        return {
            'answer': f'API error: {str(e)}',
            'sources': 'none',
            'used_web_search': False,
            'error': True
        }
    except Exception as e:
        return {
            'answer': f'Error: {str(e)}',
            'sources': 'none', 
            'used_web_search': False,
            'error': True
        }


def ask_claude_stream(user_question, local_results, use_web_search=False, conversation_history=None):
    """
    Stream response from Claude for real-time display in chat UI.
    Yields Server-Sent Events (SSE).
    """
    if not ANTHROPIC_API_KEY:
        yield f"data: {json.dumps({'type': 'error', 'content': 'API key not configured'})}\n\n"
        return
    
    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)
    
    context = format_context_for_claude(local_results)
    
    user_message = f"""Answer the following question using the provided knowledge base context.
If the context doesn't contain enough information to fully answer the question, use web search to supplement.

KNOWLEDGE BASE CONTEXT:
{context}

QUESTION: {user_question}"""
    
    messages = []
    if conversation_history:
        messages.extend(conversation_history)
    messages.append({"role": "user", "content": user_message})
    
    tools = []
    if use_web_search:
        tools.append({
            "type": "web_search_20250305",
            "name": "web_search"
        })
    
    # Send local sources first
    local_sources = []
    for chunk in local_results[:MAX_CONTEXT_CHUNKS]:
        source = f"{chunk['brand']} - {chunk['title']} (p.{chunk['page_num']})"
        if source not in local_sources:
            local_sources.append(source)
    
    yield f"data: {json.dumps({'type': 'sources', 'local_sources': local_sources, 'local_chunks_found': len(local_results)})}\n\n"
    
    try:
        api_kwargs = {
            "model": CLAUDE_MODEL,
            "max_tokens": 2048,
            "system": SYSTEM_PROMPT,
            "messages": messages,
        }
        if tools:
            api_kwargs["tools"] = tools
        
        with client.messages.stream(**api_kwargs) as stream:
            for event in stream:
                if hasattr(event, 'type'):
                    if event.type == 'content_block_delta':
                        if hasattr(event.delta, 'text'):
                            yield f"data: {json.dumps({'type': 'text', 'content': event.delta.text})}\n\n"
                    elif event.type == 'message_stop':
                        yield f"data: {json.dumps({'type': 'done'})}\n\n"
    
    except Exception as e:
        yield f"data: {json.dumps({'type': 'error', 'content': str(e)})}\n\n"


# ═══════════════════════════════════════════════════════════════
# API ENDPOINTS
# ═══════════════════════════════════════════════════════════════

@app.route('/api/ask', methods=['GET', 'POST'])
def api_ask():
    """
    AI-powered Q&A endpoint.
    Searches local KB first, then uses Claude (with optional web search) to answer.
    
    GET:  /api/ask?q=Why+is+my+pump+losing+pressure&brand=Cat+Pumps
    POST body:
    {
        "question": "Why is my pump losing pressure?",
        "brand": "Cat Pumps",          // optional filter
        "stream": false,               // optional: stream response via SSE
        "history": []                  // optional: conversation history
    }
    """
    if request.method == 'GET':
        question = request.args.get('q', '').strip()
        brand = request.args.get('brand')
        stream = request.args.get('stream', 'false').lower() == 'true'
        history = []
    else:
        data = request.get_json() or {}
        question = data.get('question', '').strip()
        brand = data.get('brand')
        stream = data.get('stream', False)
        history = data.get('history', [])
    
    if not question:
        return jsonify({'error': 'Missing question'}), 400
    
    # Step 1: Search local knowledge base
    local_results = fts_search(question, limit=MAX_CONTEXT_CHUNKS, brand=brand)
    
    # Step 2: Decide whether to enable web search
    use_web = len(local_results) < WEB_SEARCH_THRESHOLD
    
    # Step 3: Ask Claude
    if stream:
        return Response(
            stream_with_context(
                ask_claude_stream(question, local_results, use_web_search=use_web, 
                                conversation_history=history)
            ),
            mimetype='text/event-stream',
            headers={
                'Cache-Control': 'no-cache',
                'X-Accel-Buffering': 'no',
            }
        )
    else:
        result = ask_claude(question, local_results, use_web_search=use_web,
                           conversation_history=history)
        result['question'] = question
        return jsonify(result)


@app.route('/api/search', methods=['GET', 'POST'])
def api_search():
    """
    Direct FTS5 search (no AI, just raw results).
    GET  /api/search?q=low+pressure&limit=10&brand=Cat+Pumps&type=troubleshooting
    POST /api/search  {"query": "low pressure", "limit": 10}
    """
    if request.method == 'POST':
        data = request.get_json() or {}
        query = data.get('query', '')
        limit = data.get('limit', 20)
        brand = data.get('brand')
        chunk_type = data.get('type')
    else:
        query = request.args.get('q', '')
        limit = request.args.get('limit', 20, type=int)
        brand = request.args.get('brand')
        chunk_type = request.args.get('type')
    
    if not query:
        return jsonify({'error': 'Missing query', 'results': []}), 400
    
    results = fts_search(query, limit=limit, brand=brand, chunk_type=chunk_type)
    return jsonify({'query': query, 'count': len(results), 'results': results})


@app.route('/api/model/<model_number>')
def api_model_lookup(model_number):
    """Look up a specific pump/equipment model number."""
    results = fts_search(f'"{model_number}"', limit=10)
    if not results:
        results = fts_search(model_number, limit=10)
    return jsonify({'model': model_number, 'count': len(results), 'results': results})


@app.route('/api/stats')
def api_stats():
    """Get database statistics."""
    conn = get_db()
    stats = {}
    stats['documents'] = conn.execute("SELECT COUNT(*) FROM documents").fetchone()[0]
    stats['chunks'] = conn.execute("SELECT COUNT(*) FROM chunks").fetchone()[0]
    stats['total_words'] = conn.execute("SELECT SUM(word_count) FROM chunks").fetchone()[0] or 0
    
    brands = conn.execute(
        "SELECT brand, COUNT(*) as cnt FROM documents GROUP BY brand ORDER BY cnt DESC"
    ).fetchall()
    stats['brands'] = {b['brand']: b['cnt'] for b in brands}
    
    types = conn.execute(
        "SELECT doc_type, COUNT(*) as cnt FROM documents GROUP BY doc_type ORDER BY cnt DESC"
    ).fetchall()
    stats['doc_types'] = {t['doc_type']: t['cnt'] for t in types}
    
    chunk_types = conn.execute(
        "SELECT chunk_type, COUNT(*) as cnt FROM chunks GROUP BY chunk_type ORDER BY cnt DESC"
    ).fetchall()
    stats['chunk_types'] = {c['chunk_type']: c['cnt'] for c in chunk_types}
    
    stats['ai_enabled'] = bool(ANTHROPIC_API_KEY)
    stats['web_search_enabled'] = bool(ANTHROPIC_API_KEY)
    
    conn.close()
    return jsonify(stats)


@app.route('/api/brands')
def api_brands():
    """List all brands."""
    conn = get_db()
    brands = conn.execute(
        "SELECT brand, COUNT(*) as doc_count FROM documents GROUP BY brand ORDER BY doc_count DESC"
    ).fetchall()
    conn.close()
    return jsonify([{'brand': b['brand'], 'doc_count': b['doc_count']} for b in brands])


@app.route('/api/documents')
def api_documents():
    """List all ingested documents."""
    conn = get_db()
    brand = request.args.get('brand')
    sql = "SELECT id, filename, title, brand, doc_type, page_count, ingested_at FROM documents"
    params = []
    if brand:
        sql += " WHERE brand = ?"
        params.append(brand)
    sql += " ORDER BY brand, title"
    docs = conn.execute(sql, params).fetchall()
    conn.close()
    return jsonify([dict(d) for d in docs])


@app.route('/api/document/<int:doc_id>/chunks')
def api_document_chunks(doc_id):
    """Get all chunks for a specific document."""
    conn = get_db()
    chunks = conn.execute(
        "SELECT id, page_num, section, content, chunk_type, word_count "
        "FROM chunks WHERE doc_id = ? ORDER BY page_num, id",
        (doc_id,)
    ).fetchall()
    conn.close()
    return jsonify([dict(c) for c in chunks])


@app.route('/api/health')
def api_health():
    """Health check."""
    try:
        conn = get_db()
        count = conn.execute("SELECT COUNT(*) FROM documents").fetchone()[0]
        conn.close()
        return jsonify({
            'status': 'ok', 
            'documents': count, 
            'database': DB_PATH,
            'ai_enabled': bool(ANTHROPIC_API_KEY),
            'web_search_enabled': bool(ANTHROPIC_API_KEY)
        })
    except Exception as e:
        return jsonify({'status': 'error', 'error': str(e)}), 500


# ═══════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Knowledge Base Search API + AI Agent')
    parser.add_argument('--db', default='knowledge.db', help='Database file path')
    parser.add_argument('--port', default=5001, type=int, help='Port (default: 5001)')
    parser.add_argument('--host', default='127.0.0.1', help='Host (default: 127.0.0.1)')
    parser.add_argument('--model', default='claude-sonnet-4-5-20250514', help='Claude model')
    args = parser.parse_args()
    
    DB_PATH = args.db
    CLAUDE_MODEL = args.model
    
    if not os.path.exists(DB_PATH):
        print(f"❌ Database not found: {DB_PATH}")
        print(f"   Run: python ingest_pdfs.py /path/to/pdfs --db {DB_PATH}")
        sys.exit(1)
    
    conn = get_db()
    doc_count = conn.execute("SELECT COUNT(*) FROM documents").fetchone()[0]
    chunk_count = conn.execute("SELECT COUNT(*) FROM chunks").fetchone()[0]
    conn.close()
    
    ai_status = "✅ Enabled" if ANTHROPIC_API_KEY else "❌ Not configured (set ANTHROPIC_API_KEY)"
    
    print(f"\n{'═' * 55}")
    print(f"  Knowledge Base Search API + AI Agent")
    print(f"{'─' * 55}")
    print(f"  Database:    {DB_PATH}")
    print(f"  Documents:   {doc_count} | Chunks: {chunk_count}")
    print(f"  AI:          {ai_status}")
    print(f"  Web Search:  {'✅ Enabled' if ANTHROPIC_API_KEY else '❌ Needs API key'}")
    print(f"  Model:       {CLAUDE_MODEL}")
    print(f"  Running at:  http://{args.host}:{args.port}")
    print(f"{'═' * 55}")
    print(f"\n  Endpoints:")
    print(f"    POST /api/ask              AI-powered Q&A")
    print(f"    GET  /api/search?q=...     Direct FTS5 search")
    print(f"    GET  /api/model/<number>   Model lookup")
    print(f"    GET  /api/stats            Database stats")
    print(f"    GET  /api/brands           List brands")
    print(f"    GET  /api/documents        List documents")
    print(f"    GET  /api/health           Health check")
    print()
    
    app.run(host=args.host, port=args.port, debug=True)
