import { Difficulty, Languages } from "~/helpers/enumerations";
import CodeBlock from "~/model/codeblock";
import Question from "~/model/question";

const code = new CodeBlock("// Analyze this function")
  .add("function isNumberThere(arr, number)")
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
    "if(arr[i] === number)",
    "2n",
    "n for accessing the ith element of arr, n for the comparison"
  )
  .add("{")
  .add("return true;", "1", "1 for the return statement")
  .add("}")
  .add("}")
  .add("return false;", "1", "1 for the return statement")
  .add("}");

const questionOne = new Question(
  code,
  Languages.JavaScript,
  Difficulty.Easy,
  "O(n)",
  `This function has a linear runtime complexity of O(n) because the function iterates through the array once.
    Adding everything we have counted, we get: 2 + 1 + 2n + 2n + 1 + 1 = 4 + 4n = O(n). because we drop the constants.`
);

export default questionOne;
