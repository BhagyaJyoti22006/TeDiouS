1. This solution uses Gemini API key which can be obtained at `https://aistudio.google.com/app/api-keys`.

2. Open terminal in current directory.

3. If `GEMINI_API_KEY` is not defined in the environment variables, define it for the current terminal session using the following command:  
`set GEMINI_API_KEY="<GEMINI_API_KEY>"`

4. Run following command:  
`uvicorn main:app --host 127.0.0.1 --port 8002`

5. Expose the endpoint to the internet. One solution is using ngrok by running following command in another terminal:  
`ngrok http 8002`

6. The public URL is the required solution.

