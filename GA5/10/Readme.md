1. Open terminal in current directory.

2. Run following command:  
`uvicorn main:app --host 127.0.0.1 --port 8010`

3. Expose the endpoint to the internet. One solution is using ngrok by running following command in another terminal:  
`ngrok http 8010`

4. Note the `Forwarding` URL as `<FORWARDING_URL>`.

5. The public URL `<FORWARDING_URL>/a2a` is the required solution.

