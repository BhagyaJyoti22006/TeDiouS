1. Open terminal in current directory.

2. Run following command which was given by the portal after replacing `<roll>` with the correct roll number:  
`uv run --with httpie -- http --json POST https://httpbin.org/post email=<roll>@ds.study.iitm.ac.in request_id=15f46c24`

3. Copy the entire JSON response between the `{` and `}` which looks like:  
```
{
    "args": {},
    "data": "{\"email\": \"<roll>@ds.study.iitm.ac.in\", \"request_id\": \"15f46c24\"}",
    "files": {},
    "form": {},
    "headers": {
        "Accept": "application/json, */*;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Content-Length": "69",
        "Content-Type": "application/json",
        "Host": "httpbin.org",
        "User-Agent": "HTTPie/3.2.4",
        "X-Amzn-Trace-Id": "Root=1-6a38ec36-74468edb63bb44ea65958e04"
    },
    "json": {
        "email": "<roll>@ds.study.iitm.ac.in",
        "request_id": "15f46c24"
    },
    "origin": "223.235.100.110",
    "url": "https://httpbin.org/post"
}
```

