"""
PDF Vectorization Pipeline — No ChromaDB Required
==================================================
Works with any Python version including 3.14+.
Stores embeddings as a plain .npz file — no external DB needed.

Install:
    pip install pdfplumber sentence-transformers numpy

Run:
    python vectorize.py

Output: vector_store.npz (used by search.py at runtime)
"""

import os
import re
import json
import numpy as np
import pdfplumber
from pathlib import Path
from sentence_transformers import SentenceTransformer

# ── Config ────────────────────────────────────────────────────────────────────

PDF_DIR = "./pdfs"
OUTPUT_FILE = "./vector_store.npz"
EMBED_MODEL = "all-MiniLM-L6-v2"

CHUNK_SIZE = 600
CHUNK_OVERLAP = 100

DOC_TYPE_MAP = {
    "ServiceManual":   "service_manual",
    "Troubleshooting": "troubleshooting",
    "Catalog":         "catalog",
    "47_Series":       "service_manual",
    "TS2021":          "service_manual",
    "KFMZ":            "service_manual",
    "MKRepairMan":     "service_manual",
    "OilRecommend":    "service_manual",
}

# ── Helpers ───────────────────────────────────────────────────────────────────

def infer_doc_type(filename):
    for key, dtype in DOC_TYPE_MAP.items():
        if key.lower() in filename.lower():
            return dtype
    return "general"


def clean_text(text):
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = re.sub(r' {2,}', ' ', text)
    text = re.sub(r'Page \d+\s*\n', '', text)
    return text.strip()


def extract_pages(pdf_path):
    pages = []
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page_num, page in enumerate(pdf.pages, start=1):
                text = page.extract_text() or ""
                tables = page.extract_tables()
                for table in tables:
                    if table:
                        rows = [" | ".join(str(c) for c in row if c) for row in table if any(row)]
                        text += "\n\n[TABLE]\n" + "\n".join(rows) + "\n[/TABLE]"
                if text.strip():
                    pages.append({"page": page_num, "text": text.strip()})
    except Exception as e:
        print(f"  WARNING: Could not read {pdf_path}: {e}")
    return pages


def chunk_page(text, source, page, doc_type):
    text = clean_text(text)
    chunks = []
    paragraphs = re.split(r'\n\n+', text)
    current = ""
    idx = 0

    for para in paragraphs:
        para = para.strip()
        if not para:
            continue
        if len(current) + len(para) > CHUNK_SIZE and current:
            chunks.append({
                "text": current.strip(),
                "source": source,
                "doc_type": doc_type,
                "page": page,
                "chunk_index": idx,
            })
            current = current[-CHUNK_OVERLAP:] + "\n\n" + para
            idx += 1
        else:
            current = (current + "\n\n" + para).strip()

    if current.strip():
        chunks.append({
            "text": current.strip(),
            "source": source,
            "doc_type": doc_type,
            "page": page,
            "chunk_index": idx,
        })
    return chunks


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    pdf_dir = Path(PDF_DIR)
    pdf_files = sorted(pdf_dir.glob("*.pdf"))

    if not pdf_files:
        print(f"No PDFs found in {PDF_DIR}/")
        return

    print(f"Found {len(pdf_files)} PDFs\n")
    print(f"Loading embedding model: {EMBED_MODEL}")
    print("(Downloads ~80MB on first run — please wait...)\n")
    embedder = SentenceTransformer(EMBED_MODEL)
    print("Model ready.\n")

    all_chunks = []

    for pdf_path in pdf_files:
        print(f"Processing: {pdf_path.name} ...")
        pages = extract_pages(str(pdf_path))
        doc_type = infer_doc_type(pdf_path.name)
        file_chunks = []

        for page_data in pages:
            file_chunks.extend(chunk_page(
                text=page_data["text"],
                source=pdf_path.name,
                page=page_data["page"],
                doc_type=doc_type,
            ))

        if not file_chunks:
            print(f"  WARNING: No text extracted\n")
            continue

        texts = [c["text"] for c in file_chunks]
        embeddings = embedder.encode(texts, batch_size=32, show_progress_bar=False)

        for chunk, emb in zip(file_chunks, embeddings):
            chunk["embedding"] = emb

        all_chunks.extend(file_chunks)
        print(f"  OK: {len(pages)} pages, {len(file_chunks)} chunks\n")

    if not all_chunks:
        print("No chunks produced. Check your PDFs.")
        return

    print(f"Saving {len(all_chunks)} chunks to {OUTPUT_FILE} ...")

    embeddings_matrix = np.array([c["embedding"] for c in all_chunks], dtype=np.float32)
    metadata = [{k: v for k, v in c.items() if k != "embedding"} for c in all_chunks]

    np.savez_compressed(
        OUTPUT_FILE,
        embeddings=embeddings_matrix,
        metadata=np.array([json.dumps(m) for m in metadata]),
    )

    print(f"\n{'='*50}")
    print(f"Done! {len(all_chunks)} chunks from {len(pdf_files)} PDFs")
    print(f"Saved to: {OUTPUT_FILE}")
    print(f"\nNext step: python agent_backend_v2.py")
    print(f"{'='*50}\n")


if __name__ == "__main__":
    main()
