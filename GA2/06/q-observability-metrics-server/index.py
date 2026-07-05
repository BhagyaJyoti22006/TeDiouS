from fastapi import FastAPI, Request
from fastapi.responses import PlainTextResponse
import time
import uuid

app = FastAPI()

START_TIME = time.time()
REQUEST_COUNTER = 0
LOGS = []
USER_EMAIL = "<roll>@ds.study.iitm.ac.in"

@app.middleware("http")
async def observability_middleware(request: Request, call_next):
    global REQUEST_COUNTER
    REQUEST_COUNTER += 1

    request_id = str(uuid.uuid4())
    ts = time.time()
    path = request.url.path

    log_entry = {
        "level": "INFO",
        "ts": ts,
        "path": path,
        "request_id": request_id
    }
    
    LOGS.append(log_entry)
    
    # Keep memory usage bounded
    if len(LOGS) > 200:
        LOGS.pop(0)

    response = await call_next(request)
    response.headers["X-Request-ID"] = request_id
    
    return response

@app.get("/work")
async def do_work(n: int = 0):
    return {"email": USER_EMAIL, "done": n}

@app.get("/metrics")
async def get_metrics():
    metrics_text = (
        "# HELP http_requests_total Total number of HTTP requests\n"
        "# TYPE http_requests_total counter\n"
        f"http_requests_total {REQUEST_COUNTER}\n"
    )
    return PlainTextResponse(content=metrics_text)

@app.get("/healthz")
async def health_check():
    uptime = time.time() - START_TIME
    return {"status": "ok", "uptime_s": uptime}

@app.get("/logs/tail")
async def get_logs_tail(limit: int = 10):
    return LOGS[-limit:]

@app.get("/{full_path:path}")
async def catch_all(full_path: str):
    return {"message": "Use /work, /metrics, /healthz, or /logs/tail"}