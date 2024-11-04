import CodeBlock from "~/model/codeblock";
import Question from "~/model/question";
import { Difficulty, Languages } from "~/helpers/enumerations";

const code = new CodeBlock("// Analyze this function")
  .add("function isTargetThere(arr, target)")
  .add("{")
  .add("let left = 0;", "1", "1 for the assignment operator")
  .add(
    "let right = arr.length - 1;",
    "2",
    "1 for assignment operator, 1 for accessing the length property"
  )
  .add(
    "while (left <= right)",
    "log(n) + 1",
    "log(n) for loop iterations, 1 for final comparison"
  )
  .add("{")
  .add(
    "const mid = Math.floor((left + right) / 2);",
    "3log(n)",
    "log(n) operation per iteration for division, log(n) operation for addition, log(n) operation for Math.floor"
  )
  .add(
    "if (arr[mid] === target)",
    "2log(n)",
    "log(n) for accessing arr[mid] using the subscript operator [] and log(n) for comparison in each iteration"
  )
  .add("{")
  .add("return mid;", "1", "1 for the return statement if found")
  .add("}")
  .add(
    "else if (arr[mid] < target)",
    "2log(n)",
    "log(n) for accessing arr[mid] using the subscript operator [] and log(n) for comparison in each iteration"
  )
  .add("{")
  .add(
    "left = mid + 1;",
    "2log(n)",
    "log(n) for assignment operator and log(n) for addition"
  )
  .add("}")
  .add("else")
  .add("{")
  .add(
    "right = mid - 1;",
    "2log(n)",
    "log(n) for assignment operator and log(n) for subtraction"
  )
  .add("}")
  .add("}")
  .add("return -1;", "1", "1 for the return statement if not found")
  .add("}");

const questionOne = new Question(
  code,
  Languages.JavaScript,
  Difficulty.Medium,
  "O(log n)",
  `This function has a logarithmic runtime complexity of O(log n) because the binary search algorithm divides the search space in half each time.
  As in, after every iteration, the size of the data we're looking at is halved.
  Adding everything we have counted: 1 + 2 + log(n) + 1 + 3log(n) + 2log(n) + 1 + 2log(n) + 2log(n) + 2log(n) + 1 = 12log(n) + 5 = O(log n).
  We get approximately O(log n) because each iteration halves the remaining elements, so the time complexity is logarithmic in nature.`
);

export default questionOne;
