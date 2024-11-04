import { Difficulty, Languages } from "~/helpers/enumerations";
import CodeBlock from "~/model/codeblock";
import Question from "~/model/question";

const code = new CodeBlock("// Analyze this function")
  .add("def factorial(n):")
  .add("if n <= 1:", "1", "1 for the comparison")
  .add("return 1", "1", "1 for the return statement")
  .add(
    "return n * factorial(n - 1)",
    "2 + n",
    "1 for the multiplication operator, 1 for the subtraction operator, n for the function call"
  );

const questionThree = new Question(
  code,
  Languages.Python,
  Difficulty.Easy,
  "O(n)",
  `This function has a linear runtime complexity of O(n) because the function makes a recursive call to itself n times.`
);

export default questionThree;
