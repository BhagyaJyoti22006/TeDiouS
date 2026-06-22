JavaScript function:-  
```
function convertToMarkdown(text) {
  const gen = (start, len) => Array.from({ length: len }, (_, i) => String.fromCodePoint(start + i));
  
  const normal = [...gen(65, 26), ...gen(97, 26), ...gen(48, 10)];
  const normalAlpha = [...gen(65, 26), ...gen(97, 26)];
  
  const bold = [...gen(0x1D5D4, 26), ...gen(0x1D5EE, 26), ...gen(0x1D7EC, 10)];
  const italic = [...gen(0x1D608, 26), ...gen(0x1D622, 26)];
  const mono = [...gen(0x1D670, 26), ...gen(0x1D68A, 26), ...gen(0x1D7F6, 10)];

  const monoSet = new Set(mono);
  const styledSet = new Set([...bold, ...italic]);
  const bullets = new Set(["•", "◦", "▪", "▸", "‣"]);

  const translate = (match, src, tgt) => 
    Array.from(match).map(c => {
      const i = src.indexOf(c);
      return i !== -1 ? tgt[i] : c;
    }).join('');

  const lines = text.split('\n');
  
  const lineTypes = lines.map(line => {
    if (!line.trim()) return 'empty';
    
    let hasMono = false, hasNormal = false;
    for (const char of line) {
      if (monoSet.has(char)) hasMono = true;
      else if (styledSet.has(char) || /[A-Za-z0-9]/.test(char)) hasNormal = true;
    }
    
    if (hasMono && !hasNormal) return 'mono';
    if (!hasMono && !hasNormal) return 'punctuation';
    return 'mixed';
  });

  const result = [];
  let i = 0;

  while (i < lines.length) {
    if (lineTypes[i] !== 'mixed') {
      let j = i, monoCount = 0;
      
      while (j < lines.length && lineTypes[j] !== 'mixed') {
        if (lineTypes[j] === 'mono') monoCount++;
        j++;
      }
      
      if (monoCount > 0) {
        let start = i, end = j - 1;
        while (start <= end && lineTypes[start] === 'empty') start++;
        while (end >= start && lineTypes[end] === 'empty') end--;
        
        if (end - start + 1 >= 2) {
          for (let k = i; k < start; k++) result.push(lines[k]);
          
          result.push("```");
          for (let k = start; k <= end; k++) {
            result.push(translate(lines[k], mono, normal));
          }
          result.push("```");
          
          i = end + 1;
          continue;
        }
      }
    }

    let line = lines[i];
    const chars = Array.from(line);
    const startIdx = chars.findIndex(c => c !== ' ' && c !== '\t');
    
    if (startIdx !== -1 && bullets.has(chars[startIdx])) {
      chars[startIdx] = '-';
      line = chars.join('');
    }

    line = line
      .replace(/[\u{1D5D4}-\u{1D607}\u{1D7EC}-\u{1D7F5}]+/gu, m => `**${translate(m, bold, normal)}**`)
      .replace(/[\u{1D608}-\u{1D63B}]+/gu, m => `*${translate(m, italic, normalAlpha)}*`)
      .replace(/[\u{1D670}-\u{1D6A3}\u{1D7F6}-\u{1D7FF}]+/gu, m => `\`${translate(m, mono, normal)}\``);

    let prev = "";
    while (line !== prev) {
      prev = line;
      line = line
        .replace(/\*\*([^\p{L}\p{N}*]+)\*\*/gu, "$1")
        .replace(/\*([^\p{L}\p{N}*]+)\*/gu, "$1")
        .replace(/`([^\p{L}\p{N}`]+)`/gu, "$1");
    }

    line = line
      .replace(/`([^`]+)`([.,;:!?()\[\]{}]+)/g, "`$1$2`")
      .replace(/([.,;:!?()\[\]{}]+)`([^`]+)`/g, "`$1$2`");

    result.push(line);
    i++;
  }

  return result.join('\n');
}
```

