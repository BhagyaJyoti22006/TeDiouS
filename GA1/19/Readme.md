JSON response:-  
```
{
  "problems": [
    "Problem 1: The prompt doesn't specify an exact output format, leading to inconsistent responses like raw text, markdown blocks, or conversational filler.",
    "Problem 2: No database schema or contextual examples are provided, meaning the AI has to guess or hallucinate table and column names.",
    "Problem 3: Doesn't handle edge cases; there are no instructions on what the AI should do if the natural language query asks for missing information."
  ],
  "improvedPrompt": "You are an expert Data Engineer. Your task is to translate natural language into valid PostgreSQL. CONTEXT (Schema): [INSERT SCHEMA DDL HERE]. INSTRUCTIONS: 1. Generate an optimized SQL query based ONLY on the provided schema. 2. Handle edge cases: If the query cannot be answered using the schema, leave the sql_query field null and provide a reason in the error field. EXACT OUTPUT FORMAT: You must respond ONLY with a valid JSON object matching this exact structure: {\"sql_query\": \"string (the SQL query, or null)\", \"error\": \"string (error message, or null)\"}. Do not include markdown, backticks, or conversational text. EXAMPLES - Input: Find active users. Output: {\"sql_query\": \"SELECT id FROM users WHERE status = 'active';\", \"error\": null}. CURRENT TASK - Input: [query]",
  "improvements": [
    "Added a strict JSON output format specification with data types to guarantee consistent, programmatically parseable responses.",
    "Included schema context and a structured example showing exactly how the output should look.",
    "Added explicit error-handling inside the JSON structure to gracefully manage edge cases and missing information."
  ]
}
```

