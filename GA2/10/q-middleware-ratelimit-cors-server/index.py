from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
import time
import uuid

app = FastAPI()

# ---------------------------------------------------------------------
# CONFIGURATION VARIABLES
# ---------------------------------------------------------------------
USER_EMAIL = "<roll>@ds.study.iitm.ac.in"
ASSIGNED_ORIGIN = "<ASSIGNED_CORS_ORIGIN>"
EXAM_ORIGIN = "https://exam.sanand.workers.dev"

RATE_LIMIT_REQUESTS = <REQUESTS>
RATE_LIMIT_WINDOW_SECONDS = <BUCKETS>
# ---------------------------------------------------------------------

rate_store = {}

class CustomStackMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # 1. Request Context Propagator
        req_id = request.headers.get("X-Request-ID")
        if not req_id:
            req_id = str(uuid.uuid4())
        
        request.state.req_id = req_id

        # 2. Per-Client Rate Limiter
        if request.method != "OPTIONS":
            client_id = request.headers.get("X-Client-Id", "unknown_client")
            now = time.time()
            
            if client_id not in rate_store:
                rate_store[client_id] = []
                
            rate_store[client_id] = [
                t for t in rate_store[client_id] 
                if now - t < RATE_LIMIT_WINDOW_SECONDS
            ]
            
            if len(rate_store[client_id]) >= RATE_LIMIT_REQUESTS:
                return JSONResponse(
                    status_code=429,
                    content={"error": "Rate limit exceeded"},
                    headers={"X-Request-ID": req_id}
                )
                
            rate_store[client_id].append(now)

        response = await call_next(request)
        response.headers["X-Request-ID"] = req_id
        
        return response

app.add_middleware(CustomStackMiddleware)

# 3. CORS Policy (Registered last to wrap all responses, including 429)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[ASSIGNED_ORIGIN, EXAM_ORIGIN],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["X-Request-ID"]
)

@app.get("/ping")
@app.get("/{full_path:path}")
async def ping(request: Request, full_path: str = ""):
    return {
        "email": USER_EMAIL,
        "request_id": request.state.req_id
    }