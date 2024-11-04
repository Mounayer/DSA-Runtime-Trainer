export default function formatCode(code: string) {
    const lines = code.split("\n");
    let indentLevel = 0;
    const indentSize = 2;
  
    return lines
      .map((line) => {
        const trimmedLine = line.trim();
  
        if (trimmedLine.endsWith("}")) --indentLevel;
        
        const formattedLine = " ".repeat(indentLevel * indentSize) + trimmedLine;
  
        if (trimmedLine.endsWith("{")) ++indentLevel;
  
        return formattedLine;
      })
      .join("\n");
  }
