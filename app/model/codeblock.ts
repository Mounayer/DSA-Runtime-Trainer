class CodeBlock {
    line: string[] = [];
    result: (string | null)[] = [];
    explanation: (string | null)[] = [];
  
    /**
     * Adds a new line, the runtime result, and an explanation to the CodeBlock
     * 
     * @param line - The line of code as a string
     * @param result - The runtime result as a string or null
     * @param explanation - The explanation as a string or null
     */
    constructor(line: string, result: string | null = null, explanation: string | null = null) {
      this.add(line, result, explanation);
    }
  
    /**
     * Adds a new line, the runtime result, and an explanation to the CodeBlock
     * 
     * @param line - The line of code as a string
     * @param result - The runtime result as a string or null
     * @param explanation - The explanation as a string or null
     * @returns The current CodeBlock instance
     */
    add(line: string, result: string | null = null, explanation: string | null = null): CodeBlock {
      this.line.push(line);
      this.result.push(result);
      this.explanation.push(explanation);
  
      return this;
    }
  }
  
export default CodeBlock;
  