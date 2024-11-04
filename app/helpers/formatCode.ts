export default function formatCode(code: string) {
  const lines = code.split("\n");
  let indentLevel = 0;
  const indentSize = 2;
  const isPython = lines.some((line) => line.trim().endsWith(":"));

  return lines
    .map((line) => {
      const trimmedLine = line.trim();

      if (!isPython) {
        if (trimmedLine.endsWith("}")) {
          indentLevel = Math.max(indentLevel - 1, 0);
        }

        const formattedLine =
          " ".repeat(indentLevel * indentSize) + trimmedLine;

        if (trimmedLine.endsWith("{")) {
          indentLevel++;
        }

        return formattedLine;
      }

      const formattedLine = " ".repeat(indentLevel * indentSize) + trimmedLine;

      if (
        trimmedLine.endsWith(":") &&
        (trimmedLine.startsWith("def ") ||
          trimmedLine.startsWith("if ") ||
          trimmedLine.startsWith("for ") ||
          trimmedLine.startsWith("while ") ||
          trimmedLine.startsWith("else") ||
          trimmedLine.startsWith("elif") ||
          trimmedLine.startsWith("try") ||
          trimmedLine.startsWith("except") ||
          trimmedLine.startsWith("finally"))
      ) {
        indentLevel++;
      }

      if (
        trimmedLine === "" ||
        trimmedLine.startsWith("return") ||
        trimmedLine.startsWith("pass") ||
        trimmedLine.startsWith("break") ||
        trimmedLine.startsWith("continue")
      ) {
        indentLevel = Math.max(indentLevel - 1, 0);
      }

      return formattedLine;
    })
    .join("\n");
}
