import { Difficulty, Languages } from "~/helpers/enumerations";
import CodeBlock from "~/model/codeblock";
import Question from "~/model/question";

const code = new CodeBlock("# Analyze this function")
  .add("def countTriplets(n):")
  .add("count = 0", "1", "1 for the assignment")
  .add(
    "for i in range(n):",
    "1 + n",
    "1 for the range function call, n for the increment"
  )
  .add(
    "for j in range(i, n):",
    "n + n^2",
    "n for the range function call, n^2 for the increment"
  )
  .add(
    "for k in range(j, n):",
    "n^2 + n^3",
    "n^2 for the range function call, n^3 for the increment"
  )
  .add(
    "if (i + j + k) % 2 == 0:",
    "4n^3",
    "2n^3 for the addition, n^3 for the modulo operator, n^3 for the comparison"
  )
  .add(
    "count += 1",
    "n^3",
    "n^3 for the increment, in this case,  redundant to even consider since it's conditional"
  )
  .add("return count", "1", "1 for the return statement");

const questionFour = new Question(
  code,
  Languages.Python,
  Difficulty.Medium,
  "O(n^3)",
  `This function has a cubic runtime complexity of O(n^3) because the function iterates through the array three times, each time for each element in the array.
  Adding everything we have counted, we get: 1 + 1 + n + 1 + n + n^2 + n^2 + n^3 + 4n^3 + n^3 + 1 = 6n^3 + 2n^2 + 2n + 3 = O(n^3). because we drop the constants.`
);

export default questionFour;
