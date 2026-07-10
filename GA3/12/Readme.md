1. Open `spinup_logs.jsonl` and replace `<JSONL>` with the assigned dataset.

2. Open the current directory in WSL environment.

3. Run the following command to install `asciinema:  
`uvx asciinema --version`

4. Run the following command to start recording:  
`uvx asciinema rec session.cast`

5. Type the following commands one by one in the exact order specified after replacing `<TOKEN>` with the assigned value:  
`echo '<TOKEN>'`  
`uvx --from llm llm --version`  
`cat spinup_logs.jsonl | jq -c '{id: .id, label: ({"auth-gateway":"auth_failure","billing-api":"payment_error","warehouse-loader":"data_quality","release-bot":"deploy_event","helpdesk-sync":"support_noise"}[.service])}' | sort > classified.jsonl`  
`sha256sum classified.jsonl`

6. Open the newly created file `session.cast`. Remove any personally identfiable information but ensure the keystrokes remain intact.

7. Copy the contents of `session.cast`. This is the required content.

