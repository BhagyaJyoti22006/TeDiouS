from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import jwt

app = FastAPI()

ISSUER = "<ISS>"
AUDIENCE = "<AUD>"

PUBLIC_KEY = """
<RS256_PUBLIC_KEY>
"""

class TokenRequest(BaseModel):
    token: str

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(status_code=401, content={"valid": False})

@app.post("/verify")
@app.post("/{full_path:path}")
async def verify_token(req: TokenRequest, full_path: str = ""):
    try:
        payload = jwt.decode(
            req.token,
            PUBLIC_KEY,
            algorithms=["RS256"],
            audience=AUDIENCE,
            issuer=ISSUER,
            options={"verify_exp": True}
        )
        
        return {
            "valid": True,
            "email": payload.get("email", ""),
            "sub": payload.get("sub", ""),
            "aud": payload.get("aud", "")
        }
        
    except jwt.PyJWTError:
        return JSONResponse(status_code=401, content={"valid": False})