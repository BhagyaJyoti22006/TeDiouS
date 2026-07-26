1. Open `config.py` and replace `<roll>` with the correct roll number and `<AIPIPE_TOKEN>` with the Aipipe token.

2. Open terminal in current directory.

3. Run following command:  
`uvicorn main:app --host 127.0.0.1 --port 8000`

4. Expose the endpoint to the internet. One solution is using ngrok by running following command in another terminal:  
`ngrok http 8000`

5. Copy the `Forwarding` URL as `<URL>`. For the questions, the solution is as follows:  

| Question | URL |
| :--- | :--- |
| **Q2** | `<URL>` |
| **Q3** | `<URL>` |
| **Q4** | `<URL>` |
| **Q6** | `<URL>/answer-audio` |
| **Q7** | `<URL>/extract` |
| **Q8** | `<URL>/rank` |
| **Q9** | `<URL>/solve` |

