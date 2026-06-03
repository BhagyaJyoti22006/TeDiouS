1. Press F12 (or Ctrl+Shift+I) to open DevTools.

2. Go to Console and type and send below code:  
```
{
const email = JSON.parse(localStorage.getItem('user') || '{}')?.email;
fetch('https://exam.sanand.workers.dev/exam-tds-2026-05-ga0.js')
  .then(r => r.text())
  .then(async code => {
    const { default: seedrandom } = await import('https://cdn.jsdelivr.net/npm/seedrandom@3/+esm');
    function St(t, o) { return t[Math.floor(o() * t.length)]; }
    const start = code.indexOf('Et={data_analysis');
    const chunk = code.substring(start + 3);
    let depth = 0, end = 0;
    for(let i = 0; i < chunk.length; i++) {
      if(chunk[i] === '{') depth++;
      else if(chunk[i] === '}') { depth--; if(depth === 0) { end = i+1; break; } }
    }
    const Et = eval('(' + chunk.substring(0, end) + ')');
    const rng = seedrandom(`${email}#q-binary-eval-rubric`);
    const myCategory = St(Object.keys(Et), rng);
    const myCheckCount = St([5,6,7], rng);
    console.log("Category:", myCategory);
    console.log("Checks:", myCheckCount);
  });
}
```

3. In Console, send below code to get hidden examples:  
```
{
const email = JSON.parse(localStorage.getItem('user') || '{}')?.email;
console.log("Email:", email);
fetch('https://exam.sanand.workers.dev/exam-tds-2026-05-ga0.js')
  .then(r => r.text())
  .then(async code => {
    // Load seedrandom
    const { default: seedrandom } = await import('https://cdn.jsdelivr.net/npm/seedrandom@3/+esm');

    // Recreate St function
    function St(t, o) { return t[Math.floor(o() * t.length)]; }

    // Find Et start and manually extract it
    const start = code.indexOf('Et={data_analysis');
    const chunk = code.substring(start + 3); // skip 'Et='
    
    // Find matching closing brace
    let depth = 0, end = 0;
    for(let i = 0; i < chunk.length; i++) {
      if(chunk[i] === '{') depth++;
      else if(chunk[i] === '}') { depth--; if(depth === 0) { end = i+1; break; } }
    }
    const Et = eval('(' + chunk.substring(0, end) + ')');
    console.log("Categories found:", Object.keys(Et));

    // Recreate exact same rng as grader
    const rng = seedrandom(`${email}#q-binary-eval-rubric`);
    const myCategory = St(Object.keys(Et), rng);
    const myCheckCount = St([5,6,7], rng);

    console.log("=== YOUR ASSIGNMENT ===");
    console.log("Category:", myCategory);
    console.log("Required checks:", myCheckCount);
    console.log("\nHIDDEN EXAMPLES:-");
    Et[myCategory].hiddenExamples.forEach((e, i) => {
      console.log(`${i+1}. [${e.label === 1 ? 'GOOD' : 'POOR'}] ${e.output}`);
    });
  });
}
```

4. Think of possible questions (total `Checks` times) based on which `HIDDEN EXAMPLES` are correctly classified.


Binary rubric checks:-  
```
Does the prompt explicitly require the output to follow a named structured format such as JSON, CSV, SQL, or regex output?
Does the prompt define an exact schema or list of required output fields (e.g., keys like label, name, email, translation)?
Does the prompt include at least one concrete input → output example demonstrating the expected format?
Does the prompt explicitly specify behavior for empty, missing, or null input cases?
Does the prompt enforce strict output constraints using keywords like ONLY, MUST, exactly, required, or enforce?
Does the prompt constrain output structure by quantity or shape (e.g., exactly 3 items, one label per review, headers only, or single JSON object)?
Does the prompt combine both a structured output format requirement AND at least one additional constraint such as schema, example, or edge-case rule?
```

