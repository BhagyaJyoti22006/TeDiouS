1. Extract the directory `q-git-time-travel` from `q-git-time-travel.zip`.

2. Open the directory `q-git-time-travel` in WSL environment.

3. Run the following command which returns the commits which included `180`:  
`git log --all -S '"timeout": 180' --oneline -- config.json`

4. Note down the hash of the commits displayed and run the following command for each <hash>:  
`git show <hash> -- config.json | grep timeout`

5. Run the following command for the <hash> which appears like `+    "timeout": 180,` indicating this commit added `180`:  
`git log --oneline -1 <hash>^`

6. Note down the hash of the output. This is the required hash.


Seven-character short hash:-  
```
d6ef8d9
```

