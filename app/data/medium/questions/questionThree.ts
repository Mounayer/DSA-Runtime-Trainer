import { Difficulty, Languages } from "~/helpers/enumerations";
import CodeBlock from "~/model/codeblock";
import Question from "~/model/question";

const code = new CodeBlock("# Analyze this function")
  .add("def mysteryFunction(arr):")
  .add("n = len(arr)", "2", "1 for the assignment, 1 for the len function call")
  .add(
    "for i in range(n):",
    "1 + n",
    "1 for the range function call, n for the increment"
  )
  .add(
    "for j in range(i, n - i - 1):",
    "3n + n^2",
    "n for the range function call, 2n for the subtraction operators, n^2 for the increment"
  )
  .add(
    "if arr[j] > arr[j + 1]:",
    "4n^2",
    "2n^2 for the subscript operators, n^2 for the comparison, n^2 for the + operator"
  )
  .add(
    "arr[j], arr[j + 1] = arr[j + 1], arr[j]",
    "7n^2",
    "4n^2 for the subscript operators, n^2 for the assignment, 2n^2 for the + operator"
  )
  .add("return arr", "1", "1 for the return statement");

const questionThree = new Question(
  code,
  Languages.Python,
  Difficulty.Medium,
  "O(n^2)",
  `This function has a quadratic runtime complexity of O(n^2) because the function iterates through the array twice, each time for each element in the array.
  Adding everything we have counted, we get: 2 + 1 + n + 1 + n + 3n + n^2 + 4n^2 + 7n^2 + 1 = 12n^2 + 4n + 4 = O(n^2). because we drop the constants.`
);

export default questionThree;
