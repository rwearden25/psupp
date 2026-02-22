#!/usr/bin/env python3
"""
PDF → SQLite FTS5 Ingestion Pipeline
=====================================
Extracts text from PDFs, chunks intelligently, and loads into a 
SQLite database with full-text search (FTS5) for instant queries.

Usage:
    python ingest_pdfs.py /path/to/pdf/folder
    python ingest_pdfs.py /path/to/folder1 /path/to/folder2 ...
    python ingest_pdfs.py /path/to/folder --db my_knowledge.db
    python ingest_pdfs.py /path/to/folder --reset  (wipe and rebuild)

Designed for 800MB+ of pump manuals, service docs, and data sheets.
"""

import sqlite3
import os
import sys
import re
import hashlib
import time
import json
import argparse
from pathlib import Path
from datetime import datetime

# ─── PDF extraction ───
try:
    import pdfplumber
    HAS_PDFPLUMBER = True
except ImportError:
    HAS_PDFPLUMBER = False

try:
    from pypdf import PdfReader
    HAS_PYPDF = True
except ImportError:
    HAS_PYPDF = False


# ═══════════════════════════════════════════════════════════════
# DATABASE SETUP
# ═══════════════════════════════════════════════════════════════

DB_SCHEMA = """
-- Source documents table
CREATE TABLE IF NOT EXISTS documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    filename TEXT NOT NULL,
    filepath TEXT NOT NULL,
    file_hash TEXT UNIQUE NOT NULL,
    file_size INTEGER,
    page_count INTEGER,
    title TEXT,
    brand TEXT,
    doc_type TEXT,
    ingested_at TEXT NOT NULL,
    metadata TEXT
);

-- Chunks table (the actual searchable content)
CREATE TABLE IF NOT EXISTS chunks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    doc_id INTEGER NOT NULL,
    page_num INTEGER,
    section TEXT,
    content TEXT NOT NULL,
    chunk_type TEXT DEFAULT 'text',
    word_count INTEGER,
    FOREIGN KEY (doc_id) REFERENCES documents(id) ON DELETE CASCADE
);

-- FTS5 virtual table for blazing fast full-text search
CREATE VIRTUAL TABLE IF NOT EXISTS chunks_fts USING fts5(
    content,
    section,
    chunk_type,
    content='chunks',
    content_rowid='id',
    tokenize='porter unicode61'
);

-- Triggers to keep FTS in sync
CREATE TRIGGER IF NOT EXISTS chunks_ai AFTER INSERT ON chunks BEGIN
    INSERT INTO chunks_fts(rowid, content, section, chunk_type) 
    VALUES (new.id, new.content, new.section, new.chunk_type);
END;

CREATE TRIGGER IF NOT EXISTS chunks_ad AFTER DELETE ON chunks BEGIN
    INSERT INTO chunks_fts(chunks_fts, rowid, content, section, chunk_type) 
    VALUES('delete', old.id, old.content, old.section, old.chunk_type);
END;

CREATE TRIGGER IF NOT EXISTS chunks_au AFTER UPDATE ON chunks BEGIN
    INSERT INTO chunks_fts(chunks_fts, rowid, content, section, chunk_type) 
    VALUES('delete', old.id, old.content, old.section, old.chunk_type);
    INSERT INTO chunks_fts(rowid, content, section, chunk_type) 
    VALUES (new.id, new.content, new.section, new.chunk_type);
END;

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_chunks_doc ON chunks(doc_id);
CREATE INDEX IF NOT EXISTS idx_chunks_section ON chunks(section);
CREATE INDEX IF NOT EXISTS idx_chunks_type ON chunks(chunk_type);
CREATE INDEX IF NOT EXISTS idx_docs_brand ON documents(brand);
CREATE INDEX IF NOT EXISTS idx_docs_hash ON documents(file_hash);
"""


def init_db(db_path, reset=False):
    """Initialize the SQLite database with FTS5 schema."""
    if reset and os.path.exists(db_path):
        os.remove(db_path)
        print(f"  🗑️  Removed existing database")

    conn = sqlite3.connect(db_path)
    conn.execute("PRAGMA journal_mode=WAL")       # Better concurrent reads
    conn.execute("PRAGMA synchronous=NORMAL")       # Faster writes
    conn.execute("PRAGMA cache_size=-64000")         # 64MB cache
    conn.execute("PRAGMA foreign_keys=ON")
    conn.executescript(DB_SCHEMA)
    conn.commit()
    return conn


# ═══════════════════════════════════════════════════════════════
# PDF TEXT EXTRACTION
# ═══════════════════════════════════════════════════════════════

def extract_text_pdfplumber(filepath):
    """Extract text page-by-page using pdfplumber (best quality)."""
    pages = []
    try:
        with pdfplumber.open(filepath) as pdf:
            for i, page in enumerate(pdf.pages):
                text = page.extract_text() or ''
                # Also try extracting tables
                tables = page.extract_tables() or []
                table_text = ''
                for table in tables:
                    for row in table:
                        if row:
                            cleaned = [str(cell).strip() if cell else '' for cell in row]
                            table_text += ' | '.join(cleaned) + '\n'
                
                combined = text
                if table_text and table_text not in text:
                    combined += '\n\n[TABLE DATA]\n' + table_text
                
                pages.append({
                    'page_num': i + 1,
                    'text': combined.strip(),
                    'has_tables': len(tables) > 0
                })
    except Exception as e:
        print(f"    ⚠️  pdfplumber error: {e}")
        return None
    return pages


def extract_text_pypdf(filepath):
    """Fallback extraction using pypdf."""
    pages = []
    try:
        reader = PdfReader(filepath)
        for i, page in enumerate(reader.pages):
            text = page.extract_text() or ''
            pages.append({
                'page_num': i + 1,
                'text': text.strip(),
                'has_tables': False
            })
    except Exception as e:
        print(f"    ⚠️  pypdf error: {e}")
        return None
    return pages


def extract_pdf(filepath):
    """Extract text from PDF using best available method."""
    if HAS_PDFPLUMBER:
        result = extract_text_pdfplumber(filepath)
        if result:
            return result
    
    if HAS_PYPDF:
        result = extract_text_pypdf(filepath)
        if result:
            return result
    
    print(f"    ❌ No PDF extraction library available!")
    return None


# ═══════════════════════════════════════════════════════════════
# INTELLIGENT CHUNKING
# ═══════════════════════════════════════════════════════════════

# Section header patterns common in pump/equipment manuals
SECTION_PATTERNS = [
    # Numbered sections: "1. MAINTENANCE", "SECTION 3:", "3.2 Oil Change"
    re.compile(r'^(?:SECTION\s+)?\d+[\.\)]\s*\d*\.?\s*([A-Z][A-Z\s/&\-]{2,})', re.MULTILINE),
    # ALL CAPS headers: "TROUBLESHOOTING", "SPECIFICATIONS"  
    re.compile(r'^([A-Z][A-Z\s/&\-]{4,})$', re.MULTILINE),
    # Bold-style headers: "Servicing the Valves", "Preventive Maintenance"
    re.compile(r'^((?:Servicing|Installing|Replacing|Checking|Adjusting|Operating|Maintenance|Troubleshooting|Specifications|Assembly|Disassembly|Reassembly|Diagnosis)\b[^\n]{3,60})$', re.MULTILINE),
]

# Patterns for identifying document type and brand
BRAND_PATTERNS = {
    'General Pump': [r'general\s*pump', r'\bGP\b.*pump', r'TS\d{4}', r'TSS\d{4}', r'TSF\d{4}'],
    'Cat Pumps': [r'cat\s*pump', r'the pumps with nine lives', r'\bCAT\b.*pump', r'catpumps', r'cat pumps'],
    'Alkota': [r'alkota', r'cleaning\s*systems'],
    'Honda': [r'honda\s*(motor|engine|power)', r'\bGX\d{3}\b'],
    'Briggs & Stratton': [r'briggs\s*&?\s*stratton', r'vanguard'],
    'AR Pumps': [r'\bAR\b.*pump', r'annovi\s*reverberi'],
    'Comet': [r'comet\s*pump'],
    'Udor': [r'udor\s*pump'],
    'Giant': [r'giant\s*pump'],
    'Karcher': [r'karcher', r'kärcher'],
    # Generators
    'Generac': [r'generac', r'evolution.*controller', r'guardian.*generator'],
    'Cummins/Onan': [r'cummins.*onan', r'\bonan\b', r'hgjaa', r'hgjbb', r'\bQG\b.*onan', r'\bKY\b.*generator'],
    'Kohler Power': [r'kohler.*generator', r'kohler.*power', r'kohler.*standby', r'\bRDC2\b'],
    'Champion Power': [r'champion.*power.*equipment', r'champion.*generator'],
    'DuroMax': [r'duromax', r'durostar', r'\bXP\d{4,5}\b'],
    'Westinghouse': [r'westinghouse.*outdoor', r'westinghouse.*generator', r'\bWGen\b', r'\biGen\b'],
    'Winco': [r'\bwinco\b', r'wincogen'],
    'Gillette': [r'gillette.*generator'],
    'Deep Sea Electronics': [r'deep\s*sea\s*electronics', r'\bDSE\s*\d{3,4}\b', r'deepseaplc'],
    'Stamford': [r'stamford.*avk', r'\bStamford\b.*alternator', r'\bHC\d+\b.*alternator'],
    # Air Compressors
    'Ingersoll Rand': [r'ingersoll[\s\-]*rand', r'\b2475\b', r'\b2340\b', r'\b2545\b', r'\b7100\b', r'\bSS3\b.*compressor', r'\bT30\b.*compressor'],
    'Quincy': [r'quincy.*compressor', r'\bQT[\s\-]\d+\b', r'\bQP[\s\-]\d+\b', r'\bQGS\b', r'quincy.*QT'],
    'Campbell Hausfeld': [r'campbell\s*hausfeld', r'\bVT\d{4}\b', r'\bXC\d{6}\b'],
    'Rolair': [r'\brolair\b', r'rolair.*compressor'],
    'California Air Tools': [r'california\s*air\s*tools', r'\bCAT[\s\-]\d{4,5}\b.*compressor'],
}

DOC_TYPE_PATTERNS = {
    'service_manual': [r'service\s*manual', r'repair\s*manual', r'shop\s*manual'],
    'owner_manual': [r"owner'?s?\s*manual", r'operator\s*manual', r'user\s*manual'],
    'parts_list': [r'parts?\s*list', r'parts?\s*catalog', r'parts?\s*breakdown', r'exploded\s*view'],
    'data_sheet': [r'data\s*sheet', r'spec\s*sheet', r'specification'],
    'troubleshooting': [r'troubleshoot', r'diagnosis', r'fault\s*finding'],
    'catalog': [r'catalog', r'product\s*guide', r'product\s*line'],
    'installation': [r'install', r'setup\s*guide', r'quick\s*start'],
    'safety': [r'safety\s*manual', r'msds', r'sds'],
    'controller_manual': [r'controller.*manual', r'AMF.*module', r'ATS.*controller', r'e[\s\-]?code', r'fault.*code', r'blink.*code'],
    'alternator_manual': [r'alternator.*manual', r'AVR', r'automatic\s*voltage\s*regulator', r'stamford.*series'],
    'generator_manual': [r'generator.*manual', r'standby.*generator', r'portable.*generator', r'transfer\s*switch'],
    'compressor_manual': [r'compressor.*manual', r'air\s*compressor', r'reciprocating.*compressor', r'rotary\s*screw'],
}


def detect_brand(text):
    """Detect equipment brand from text content."""
    text_lower = text.lower()  # Check ALL text, not just first 5000 chars
    for brand, patterns in BRAND_PATTERNS.items():
        for pat in patterns:
            if re.search(pat, text_lower, re.IGNORECASE):
                return brand
    return 'Unknown'


def detect_doc_type(text, filename):
    """Detect document type from content and filename."""
    combined = (filename + ' ' + text[:3000]).lower()
    for doc_type, patterns in DOC_TYPE_PATTERNS.items():
        for pat in patterns:
            if re.search(pat, combined, re.IGNORECASE):
                return doc_type
    return 'general'


def detect_title(text, filename):
    """Try to extract a title from the first page."""
    lines = text[:1500].split('\n')
    # Look for a substantial line near the top that looks like a title
    for line in lines[:15]:
        line = line.strip()
        if len(line) > 5 and len(line) < 120:
            # Skip lines that are just numbers, symbols, or very short
            if re.match(r'^[A-Z][A-Za-z0-9\s\-/&®™\.,:]+$', line) and len(line) > 8:
                return line
    # Fallback to filename
    return Path(filename).stem.replace('_', ' ').replace('-', ' ').title()


def chunk_text(text, page_num, max_chunk=800, overlap=100):
    """
    Split text into chunks, trying to break at section boundaries.
    
    Strategy:
    1. Try to split on section headers first
    2. Then split on paragraph breaks
    3. Last resort: split on sentence boundaries
    
    Returns list of (section_name, chunk_text) tuples.
    """
    if not text or not text.strip():
        return []
    
    chunks = []
    
    # Try to find section headers
    sections = []
    current_section = f"Page {page_num}"
    last_end = 0
    
    for pattern in SECTION_PATTERNS:
        for match in pattern.finditer(text):
            if match.start() > last_end:
                content = text[last_end:match.start()].strip()
                if content and len(content.split()) >= 5:
                    sections.append((current_section, content))
            current_section = match.group(1).strip() if match.group(1) else match.group(0).strip()
            last_end = match.start()
    
    # Add remaining text
    remaining = text[last_end:].strip()
    if remaining and len(remaining.split()) >= 5:
        sections.append((current_section, remaining))
    
    # If no sections found, treat whole page as one section
    if not sections:
        sections = [(f"Page {page_num}", text.strip())]
    
    # Now split long sections into sized chunks
    for section_name, section_text in sections:
        words = section_text.split()
        if len(words) <= max_chunk:
            chunks.append((section_name, section_text, len(words)))
        else:
            # Split on paragraph breaks first
            paragraphs = re.split(r'\n\s*\n', section_text)
            current_chunk = []
            current_words = 0
            
            for para in paragraphs:
                para_words = len(para.split())
                if current_words + para_words > max_chunk and current_chunk:
                    chunk_text_str = '\n\n'.join(current_chunk)
                    chunks.append((section_name, chunk_text_str, current_words))
                    # Keep overlap
                    overlap_text = ' '.join(chunk_text_str.split()[-overlap:])
                    current_chunk = [overlap_text, para]
                    current_words = overlap + para_words
                else:
                    current_chunk.append(para)
                    current_words += para_words
            
            if current_chunk:
                chunks.append((section_name, '\n\n'.join(current_chunk), current_words))
    
    return chunks


# ═══════════════════════════════════════════════════════════════
# INGESTION PIPELINE
# ═══════════════════════════════════════════════════════════════

def file_hash(filepath):
    """Get SHA256 hash of file for dedup."""
    h = hashlib.sha256()
    with open(filepath, 'rb') as f:
        while True:
            data = f.read(65536)
            if not data:
                break
            h.update(data)
    return h.hexdigest()


def is_already_ingested(conn, fhash):
    """Check if file was already processed."""
    cur = conn.execute("SELECT id, filename FROM documents WHERE file_hash = ?", (fhash,))
    row = cur.fetchone()
    return row


def ingest_pdf(conn, filepath):
    """Process a single PDF and insert into database."""
    filename = os.path.basename(filepath)
    fsize = os.path.getsize(filepath)
    fhash = file_hash(filepath)
    
    # Check dedup
    existing = is_already_ingested(conn, fhash)
    if existing:
        print(f"  ⏭️  Skipping (already ingested): {filename}")
        return 0
    
    print(f"  📄 Processing: {filename} ({fsize/1024:.0f} KB)")
    
    # Extract text
    pages = extract_pdf(filepath)
    if not pages:
        print(f"    ❌ Could not extract text from {filename}")
        return 0
    
    # Combine all text for metadata detection
    all_text = '\n'.join(p['text'] for p in pages if p['text'])
    if not all_text.strip():
        print(f"    ⚠️  No text content found in {filename} (may be scanned/image PDF)")
        return 0
    
    # Detect metadata
    brand = detect_brand(all_text)
    doc_type = detect_doc_type(all_text, filename)
    title = detect_title(all_text, filename)
    
    # Insert document record
    cur = conn.execute("""
        INSERT INTO documents (filename, filepath, file_hash, file_size, page_count, 
                              title, brand, doc_type, ingested_at, metadata)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        filename, str(filepath), fhash, fsize, len(pages),
        title, brand, doc_type, datetime.now().isoformat(),
        json.dumps({'has_tables': any(p['has_tables'] for p in pages)})
    ))
    doc_id = cur.lastrowid
    
    # Chunk and insert
    total_chunks = 0
    for page in pages:
        if not page['text'].strip():
            continue
        
        chunks = chunk_text(page['text'], page['page_num'])
        for section, content, word_count in chunks:
            # Determine chunk type
            chunk_type = 'text'
            content_lower = content.lower()
            if '[TABLE DATA]' in content:
                chunk_type = 'table'
            elif any(kw in content_lower for kw in ['troubleshoot', 'problem', 'cause', 'solution', 'remedy']):
                chunk_type = 'troubleshooting'
            elif any(kw in content_lower for kw in ['spec', 'dimension', 'weight', 'capacity', 'gpm', 'psi', 'rpm']):
                chunk_type = 'specs'
            elif any(kw in content_lower for kw in ['maintenance', 'service', 'interval', 'schedule']):
                chunk_type = 'maintenance'
            elif any(kw in content_lower for kw in ['install', 'assembly', 'disassembly', 'reassembly', 'torque']):
                chunk_type = 'procedure'
            elif any(kw in content_lower for kw in ['warning', 'danger', 'caution', 'safety']):
                chunk_type = 'safety'
            elif any(kw in content_lower for kw in ['part', 'kit', 'order', 'catalog']):
                chunk_type = 'parts'
            
            conn.execute("""
                INSERT INTO chunks (doc_id, page_num, section, content, chunk_type, word_count)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (doc_id, page['page_num'], section, content, chunk_type, word_count))
            total_chunks += 1
    
    conn.commit()
    print(f"    ✅ {len(pages)} pages → {total_chunks} chunks  [{brand} / {doc_type}]")
    return total_chunks


def scan_folder(folder_path):
    """Find all PDFs in a folder (recursive)."""
    pdfs = []
    for root, dirs, files in os.walk(folder_path):
        for f in sorted(files):
            if f.lower().endswith('.pdf') and not f.startswith('.'):
                pdfs.append(os.path.join(root, f))
    return pdfs


# ═══════════════════════════════════════════════════════════════
# SEARCH FUNCTIONS
# ═══════════════════════════════════════════════════════════════

def search(conn, query, limit=20, brand=None, chunk_type=None):
    """
    Full-text search across all chunks.
    Returns ranked results with document context.
    """
    # Build FTS5 query - handle special characters
    # FTS5 uses AND by default, supports OR, NOT, NEAR, prefix*
    clean_query = re.sub(r'[^\w\s\-*/]', '', query)
    terms = clean_query.split()
    fts_query = ' '.join(terms)
    
    sql = """
        SELECT 
            c.id, c.content, c.section, c.chunk_type, c.page_num, c.word_count,
            d.filename, d.title, d.brand, d.doc_type,
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
        return [{
            'chunk_id': r[0],
            'content': r[1],
            'section': r[2],
            'chunk_type': r[3],
            'page_num': r[4],
            'word_count': r[5],
            'filename': r[6],
            'title': r[7],
            'brand': r[8],
            'doc_type': r[9],
            'rank': r[10],
        } for r in results]
    except Exception as e:
        print(f"Search error: {e}")
        return []


def search_model(conn, model_number):
    """Search specifically for a pump/equipment model number."""
    # Try exact phrase first, then fuzzy
    results = search(conn, f'"{model_number}"', limit=10)
    if not results:
        results = search(conn, model_number, limit=10)
    return results


def get_stats(conn):
    """Get database statistics."""
    stats = {}
    stats['documents'] = conn.execute("SELECT COUNT(*) FROM documents").fetchone()[0]
    stats['chunks'] = conn.execute("SELECT COUNT(*) FROM chunks").fetchone()[0]
    stats['total_words'] = conn.execute("SELECT SUM(word_count) FROM chunks").fetchone()[0] or 0
    
    brands = conn.execute(
        "SELECT brand, COUNT(*) FROM documents GROUP BY brand ORDER BY COUNT(*) DESC"
    ).fetchall()
    stats['brands'] = {b[0]: b[1] for b in brands}
    
    types = conn.execute(
        "SELECT doc_type, COUNT(*) FROM documents GROUP BY doc_type ORDER BY COUNT(*) DESC"
    ).fetchall()
    stats['doc_types'] = {t[0]: t[1] for t in types}
    
    chunk_types = conn.execute(
        "SELECT chunk_type, COUNT(*) FROM chunks GROUP BY chunk_type ORDER BY COUNT(*) DESC"
    ).fetchall()
    stats['chunk_types'] = {c[0]: c[1] for c in chunk_types}
    
    db_size = os.path.getsize(conn.execute("PRAGMA database_list").fetchone()[2]) if os.path.exists(
        conn.execute("PRAGMA database_list").fetchone()[2]) else 0
    stats['db_size_mb'] = db_size / (1024 * 1024)
    
    return stats


# ═══════════════════════════════════════════════════════════════
# CLI INTERFACE
# ═══════════════════════════════════════════════════════════════

def main():
    parser = argparse.ArgumentParser(
        description='PDF → SQLite FTS5 Ingestion Pipeline',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python ingest_pdfs.py ./manuals
  python ingest_pdfs.py ./cat_pumps ./general_pump ./alkota
  python ingest_pdfs.py ./manuals --db pump_knowledge.db
  python ingest_pdfs.py ./manuals --reset
  python ingest_pdfs.py --search "low pressure troubleshooting"
  python ingest_pdfs.py --search "67DX" --brand "Cat Pumps"
  python ingest_pdfs.py --stats
        """
    )
    parser.add_argument('folders', nargs='*', help='Folder(s) containing PDFs')
    parser.add_argument('--db', default='knowledge.db', help='Database file path (default: knowledge.db)')
    parser.add_argument('--reset', action='store_true', help='Wipe database and rebuild from scratch')
    parser.add_argument('--search', type=str, help='Search the knowledge base')
    parser.add_argument('--model', type=str, help='Look up a specific model number')
    parser.add_argument('--brand', type=str, help='Filter by brand')
    parser.add_argument('--stats', action='store_true', help='Show database statistics')
    
    args = parser.parse_args()
    
    # ── Stats mode ──
    if args.stats:
        if not os.path.exists(args.db):
            print(f"Database not found: {args.db}")
            return
        conn = init_db(args.db)
        stats = get_stats(conn)
        print(f"\n📊 Knowledge Base Statistics ({args.db})")
        print(f"{'─' * 50}")
        print(f"  Documents:    {stats['documents']}")
        print(f"  Chunks:       {stats['chunks']}")
        print(f"  Total words:  {stats['total_words']:,}")
        print(f"  DB size:      {stats['db_size_mb']:.1f} MB")
        print(f"\n  Brands:")
        for brand, count in stats['brands'].items():
            print(f"    {brand}: {count} docs")
        print(f"\n  Document types:")
        for dtype, count in stats['doc_types'].items():
            print(f"    {dtype}: {count}")
        print(f"\n  Chunk types:")
        for ctype, count in stats['chunk_types'].items():
            print(f"    {ctype}: {count}")
        conn.close()
        return
    
    # ── Search mode ──
    if args.search:
        if not os.path.exists(args.db):
            print(f"Database not found: {args.db}")
            return
        conn = init_db(args.db)
        results = search(conn, args.search, brand=args.brand)
        if not results:
            print(f"No results for: {args.search}")
        else:
            print(f"\n🔍 Search: \"{args.search}\"  ({len(results)} results)\n")
            for i, r in enumerate(results, 1):
                print(f"{'─' * 60}")
                print(f"  #{i}  [{r['brand']}] {r['title']}")
                print(f"       Section: {r['section']} | Page {r['page_num']} | Type: {r['chunk_type']}")
                print(f"       File: {r['filename']}")
                # Show snippet (first 300 chars)
                snippet = r['content'][:300].replace('\n', ' ')
                print(f"       {snippet}...")
        conn.close()
        return
    
    # ── Model lookup mode ──
    if args.model:
        if not os.path.exists(args.db):
            print(f"Database not found: {args.db}")
            return
        conn = init_db(args.db)
        results = search_model(conn, args.model)
        if not results:
            print(f"No results for model: {args.model}")
        else:
            print(f"\n🔧 Model lookup: \"{args.model}\"  ({len(results)} results)\n")
            for i, r in enumerate(results, 1):
                print(f"{'─' * 60}")
                print(f"  #{i}  [{r['brand']}] {r['title']}")
                print(f"       Section: {r['section']} | Page {r['page_num']}")
                snippet = r['content'][:300].replace('\n', ' ')
                print(f"       {snippet}...")
        conn.close()
        return
    
    # ── Ingestion mode ──
    if not args.folders:
        parser.print_help()
        return
    
    print(f"\n{'═' * 60}")
    print(f"  PDF → SQLite FTS5 Ingestion Pipeline")
    print(f"  Database: {args.db}")
    print(f"{'═' * 60}\n")
    
    conn = init_db(args.db, reset=args.reset)
    
    # Collect all PDFs
    all_pdfs = []
    for folder in args.folders:
        if os.path.isfile(folder) and folder.lower().endswith('.pdf'):
            all_pdfs.append(folder)
        elif os.path.isdir(folder):
            pdfs = scan_folder(folder)
            print(f"📁 {folder}: {len(pdfs)} PDFs found")
            all_pdfs.extend(pdfs)
        else:
            print(f"⚠️  Not found: {folder}")
    
    if not all_pdfs:
        print("No PDFs found!")
        return
    
    total_size = sum(os.path.getsize(p) for p in all_pdfs)
    print(f"\n📚 Total: {len(all_pdfs)} PDFs ({total_size / (1024*1024):.1f} MB)\n")
    
    # Process each PDF
    start_time = time.time()
    total_chunks = 0
    success = 0
    skipped = 0
    failed = 0
    
    for i, pdf_path in enumerate(all_pdfs, 1):
        print(f"[{i}/{len(all_pdfs)}]", end='')
        try:
            chunks = ingest_pdf(conn, pdf_path)
            if chunks > 0:
                total_chunks += chunks
                success += 1
            elif chunks == 0:
                skipped += 1
        except Exception as e:
            print(f"  ❌ Error processing {os.path.basename(pdf_path)}: {e}")
            failed += 1
    
    elapsed = time.time() - start_time
    
    # Optimize the database
    print(f"\n⚡ Optimizing database...")
    conn.execute("INSERT INTO chunks_fts(chunks_fts) VALUES('optimize')")
    conn.execute("PRAGMA optimize")
    conn.commit()
    
    # Final stats
    stats = get_stats(conn)
    conn.close()
    
    print(f"\n{'═' * 60}")
    print(f"  ✅ Ingestion Complete!")
    print(f"{'─' * 60}")
    print(f"  Time:         {elapsed:.1f}s")
    print(f"  Processed:    {success} new")
    print(f"  Skipped:      {skipped} (already ingested or empty)")
    print(f"  Failed:       {failed}")
    print(f"  Total chunks: {stats['chunks']}")
    print(f"  Total words:  {stats['total_words']:,}")
    print(f"  DB size:      {stats['db_size_mb']:.1f} MB")
    print(f"{'═' * 60}\n")


if __name__ == '__main__':
    main()
