import { Difficulty, Languages } from "~/helpers/enumerations";
import CodeBlock from "~/model/codeblock";
import Question from "~/model/question";

const code = new CodeBlock("// Analyze this function")
  .add("function isSumThere(arr, total)")
  .add("{")
  .add(
    "const size = arr.length;",
    "2",
    "1 for equal operator, 1 for accessing the length property"
  )
  .add(
    "for(let i = 0; i < size; ++i)",
    "2n + 1",
    "1 for initialization of i, n for the comparison, n for incrementing i"
  )
  .add("{")
  .add(
    "for(let j = 0; j < size; ++j)",
    "2n^2 + n",
    "n for initialization of j, n^2 for the comparison, n^2 for incrementing j"
  )
  .add("{")
  .add(
    "if(i != j && arr[i] + arr[j] === total)",
    "5n^2",
    "n^2 for the != comparison, n^2 for the addition, n^2 for the === comparison, 2n^2 for the subscript operator []"
  )
  .add("{")
  .add("return true;", "1", "1 for the return statement")
  .add("}")
  .add("}")
  .add("}")
  .add("return false;", "1", "1 for the return statement")
  .add("}");

const questionTwo = new Question(
  code,
  Languages.JavaScript,
  Difficulty.Easy,
  "O(n^2)",
  `This function has a quadratic runtime complexity of O(n^2) because the function iterates through the array once for each element in the array. 
    Adding everything we have counted, we get: 2 + 2n + 1 + 2n^2 + n + 5n^2 + 1 + 1 = 7n^2 + 2n + 4 = O(n^2). because we drop the constants.`
);

export default questionTwo;
