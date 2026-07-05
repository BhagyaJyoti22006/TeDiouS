from fastapi import FastAPI
import redis
import os

app = FastAPI()

REDIS_HOST = os.environ.get("REDIS_HOST", "localhost")
r = redis.Redis(host=REDIS_HOST, port=6379, db=0, decode_responses=True)

@app.post("/hit/{key}")
def hit_key(key: str):
    count = r.incr(key)
    return {"key": key, "count": count}

@app.get("/count/{key}")
def get_count(key: str):
    count = r.get(key)
    if count is None:
        return {"key": key, "count": 0}
    
    return {"key": key, "count": int(count)}

@app.get("/healthz")
def health_check():
    try:
        if r.ping():
            return {"status": "ok", "redis": "up"}
        else:
            return {"status": "error", "redis": "down"}
    except redis.ConnectionError:
        return {"status": "error", "redis": "down"}