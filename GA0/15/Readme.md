Python code:-  
```
import httpx

response = httpx.post(
    "https://api.openai.com/v1/chat/completions",
    json={
        "model": "gpt-4o-mini",
        "messages": [
            {
                "role": "system",
                "content": "Analyze the sentiment of the text and classify it as exactly one of: GOOD, BAD, or NEUTRAL."
            },
            {
                "role": "user",
                "content": "ogD Gsm   9C EJxtolLSuNzX c8TXo mE4  YyA F pUlFx"
            }
        ]
    },
    headers={
        "Authorization": "Bearer dummy-api-key"
    }
)

response.raise_for_status()
print(response.json())
```

