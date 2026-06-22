Bash command:-  
```
for f in *.js; do echo "--- BEGIN FILE: $f ---"; cat "$f"; echo "--- END FILE: $f ---"; done | llm "Read these clearly separated JavaScript files. Output a strict list where each line is formatted exactly as 'filename: one-line summary of purpose'."
```

