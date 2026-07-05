1. Ensure Ollama has some models downloaded. Use `ollama list` to see the list of offline models.

2. Ensure ngrok is setup with authorization token. If not done, send the following command in Command Prompt:  
`ngrok config add-authtoken <ngrok_token>`

3. Open Powershell and run the following commands one after another:  
`$env:OLLAMA_ORIGINS="*"`  
`$env:OLLAMA_HOST="0.0.0.0:11434"`  
`ollama serve`

4. Open another Powershell and run the following command (replace <roll> with correct roll first):  
```
ngrok http 11434
```

5. Note the `Forwarding` URL as `<FORWARDING_URL>`. Also, note down one of the model `NAME` which is available in Ollama as `<NAME>`.

6. Form the JSON which would look like the following:  
```
{
  "url": "<FORWARDING_URL>/v1/chat/completions",
  "model": "<NAME>"
}
```

