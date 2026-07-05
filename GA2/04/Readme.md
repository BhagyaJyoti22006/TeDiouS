1. Ensure Docker is setup.

2. Ensure ngrok is setup with authorization token. If not done, send the following command in Command Prompt:  
`ngrok config add-authtoken <ngrok_token>`

3. Open terminal in the directory `q-compose-redis-tunnel-server`.

4. Run following command to setup docker server:  
`docker compose up --build -d`

5. Run the following command to forward local docker server:  
`ngrok http 8000`

6. Copy the `Forwarding` URL. This is the required ngrok forwarding URL.

