import json
import numpy as np

# Load JSON
with open("q-cosine-similarity-server.json", "r") as f:
    data = json.load(f)

# Extract document IDs and embeddings
doc_ids = [doc["doc_id"] for doc in data["documents"]]
doc_emb = np.array([doc["embedding"] for doc in data["documents"]])

results = {}

for query in data["queries"]:
    qid = query["query_id"]
    q_emb = np.array(query["embedding"])

    # Cosine similarity (embeddings are already unit-normalized)
    sims = doc_emb @ q_emb

    # Sort:
    # 1. similarity descending
    # 2. doc_id ascending (tie-break)
    order = sorted(
        range(len(doc_ids)),
        key=lambda i: (-sims[i], doc_ids[i])
    )

    results[qid] = [doc_ids[i] for i in order[:5]]

# Print JSON
print(json.dumps(results, indent=2))