"""
Document Search Module — No ChromaDB Required
=============================================
Loads vector_store.npz and does cosine similarity search in memory.
Works with Python 3.14+.

Usage in agent_backend_v2.py:
    from search import search_documentation
"""

import json
import numpy as np

VECTOR_STORE_PATH = "./vector_store.npz"
TOP_K = 5
MIN_SCORE = 0.25

# Loaded once at import time
_embeddings = None
_metadata = None
_embedder = None


def _load():
    global _embeddings, _metadata, _embedder
    if _embeddings is not None:
        return

    from sentence_transformers import SentenceTransformer
    print("[search] Loading vector store...")
    data = np.load(VECTOR_STORE_PATH, allow_pickle=True)
    _embeddings = data["embeddings"].astype(np.float32)

    # Normalize for cosine similarity
    norms = np.linalg.norm(_embeddings, axis=1, keepdims=True)
    _embeddings = _embeddings / np.maximum(norms, 1e-9)

    _metadata = [json.loads(m) for m in data["metadata"]]
    _embedder = SentenceTransformer("all-MiniLM-L6-v2")
    print(f"[search] Loaded {len(_metadata)} chunks.")


def search_documentation(query: str, doc_type: str = "all", top_k: int = TOP_K) -> str:
    try:
        _load()
    except Exception as e:
        return json.dumps({"error": f"Search unavailable: {e}. Run vectorize.py first."})

    # Embed query
    q_emb = _embedder.encode([query])[0].astype(np.float32)
    q_emb = q_emb / max(np.linalg.norm(q_emb), 1e-9)

    # Cosine similarity (dot product on normalized vectors)
    scores = _embeddings @ q_emb

    # Filter by doc_type if requested
    if doc_type and doc_type != "all":
        mask = np.array([m.get("doc_type") == doc_type for m in _metadata])
        scores = np.where(mask, scores, -1.0)

    # Top-k
    top_indices = np.argsort(scores)[::-1][:top_k]

    results = []
    for idx in top_indices:
        score = float(scores[idx])
        if score < MIN_SCORE:
            continue
        m = _metadata[idx]
        results.append({
            "content": m["text"],
            "source": m["source"],
            "page": m["page"],
            "doc_type": m.get("doc_type", "general"),
            "score": round(score, 3),
        })

    if not results:
        return json.dumps({
            "results": [],
            "message": f"No relevant results found for: '{query}'"
        })

    return json.dumps({"results": results})


# CLI test
if __name__ == "__main__":
    import sys
    query = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else "how to replace packings"
    print(f"\nQuery: {query!r}\n")
    result = json.loads(search_documentation(query))
    for i, r in enumerate(result.get("results", []), 1):
        print(f"[{i}] {r['source']} p.{r['page']} (score: {r['score']})")
        print(f"    {r['content'][:200]}")
        print()
