import { Difficulty, Languages } from "~/helpers/enumerations";
import CodeBlock from "~/model/codeblock";
import Question from "~/model/question";

const code = new CodeBlock("// Analyze this function")
  .add("function mysteryFunction(arr: number[]): number[]")
  .add("{")
  .add(
    "const n = arr.length;",
    "2",
    "1 for initialization, 1 for accessing the length of the array"
  )
  .add(
    "for (let i = 0; i < n; ++i)",
    "2n + 1",
    "1 for initialization, n for comparison, n for increment"
  )
  .add("{")
  .add(
    "for (let j = i; j < n - i - 1; ++j)",
    "4n^2 + n",
    "n for initialization, 2n^2 for subtraction, n^2 for comparison, n^2 for increment"
  )
  .add("{")
  .add(
    "if (arr[j] > arr[j + 1])",
    "4n^2",
    "2n^2 for accessing the array, n^2 for comparison, n^2 for addition"
  )
  .add("{")
  .add(
    "const temp = arr[j];",
    "2n^2",
    "n^2 for accessing the array, n^2 for assignment"
  )
  .add(
    "arr[j] = arr[j + 1];",
    "4n^2",
    "2n^2 for accessing the array, n^2 for assignment, n^2 for addition"
  )
  .add(
    "arr[j + 1] = temp;",
    "3n^2",
    "n^2 for accessing the array, n^2 for assignment, n^2 for addition"
  )
  .add("}")
  .add("}")
  .add("}")
  .add("return arr;", "1", "1 for return")
  .add("}");

const questionThree = new Question(
  code,
  Languages.TypeScript,
  Difficulty.Medium,
  "O(n^2)",
  `This function has a quadratic time complexity of O(n^2). 
  Since it loops through the array once for each element, 
  the outer loop runs n times, and the inner loop runs n - i - 1 times. 
  If we add everything together we get: 2 + 2n + 1 + 4n^2 + n + 4n^2 + 4n^2 + 3n^2 + 1 = 15n^2 + 3n + 3 = O(n^2). 
  Therefore, the overall time complexity is O(n^2).`
);

export default questionThree;
