from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
import hashlib

EMAIL = "<ROLL>@ds.study.iitm.ac.in"

app = FastAPI()

# Enable CORS for external probes and API accessibility
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registered email for the exam, normalized (trimmed and lowercased)
normalized_email = EMAIL.strip().lower()

@app.post("/mcp")
async def mcp_endpoint(request: Request):
    # Parse the incoming JSON-RPC payload
    try:
        body = await request.json()
    except Exception:
        return Response(status_code=400, content="Invalid JSON")

    method = body.get("method")
    msg_id = body.get("id")

    # 1. Handle Initialization
    if method == "initialize":
        return {
            "jsonrpc": "2.0",
            "id": msg_id,
            "result": {
                "protocolVersion": "2024-11-05",
                "capabilities": {
                    "tools": {}
                },
                "serverInfo": {
                    "name": "exam-mcp-server",
                    "version": "1.0.0"
                }
            }
        }

    # 2. Handle Initialized Notification
    elif method == "notifications/initialized":
        # Notifications do not require a JSON-RPC response
        return Response(status_code=200)

    # 3. Handle Tools List
    elif method == "tools/list":
        return {
            "jsonrpc": "2.0",
            "id": msg_id,
            "result": {
                "tools": [
                    {
                        "name": "solve_challenge",
                        "description": "Solves the authentication challenge.",
                        "inputSchema": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                ]
            }
        }

    # 4. Handle Tool Calls
    elif method == "tools/call":
        tool_name = body.get("params", {}).get("name")
        
        if tool_name == "solve_challenge":
            # Extract the challenge from the HTTP headers (FastAPI headers are case-insensitive)
            challenge = request.headers.get("x-exam-challenge")
            
            if not challenge:
                return {
                    "jsonrpc": "2.0", 
                    "id": msg_id, 
                    "error": {
                        "code": -32602, 
                        "message": "Missing X-Exam-Challenge header"
                    }
                }
            
            # Compute SHA-256 of "{challenge}:{normalized_email}"
            payload = f"{challenge}:{normalized_email}"
            hash_hex = hashlib.sha256(payload.encode("utf-8")).hexdigest()
            
            # Extract the first 16 characters
            result_text = hash_hex[:16]

            return {
                "jsonrpc": "2.0",
                "id": msg_id,
                "result": {
                    "content": [
                        {
                            "type": "text",
                            "text": result_text
                        }
                    ]
                }
            }
            
        else:
            return {
                "jsonrpc": "2.0", 
                "id": msg_id, 
                "error": {
                    "code": -32601, 
                    "message": "Tool not found"
                }
            }

    # 5. Fallback for unknown methods
    if msg_id is not None:
        return {
            "jsonrpc": "2.0", 
            "id": msg_id, 
            "error": {
                "code": -32601, 
                "message": "Method not found"
            }
        }
        
    return Response(status_code=200)

# Health check endpoint to prevent probe errors at the root URL
@app.get("/")
def health_check():
    return {"status": "Server is running properly"}