import { Difficulty, Languages } from "~/helpers/enumerations";
import CodeBlock from "~/model/codeblock";
import Question from "~/model/question";

const code = new CodeBlock("// Analyze this function")
  .add("int countTriplets(int n)")
  .add("{")
  .add("int count = 0;", "1", "1 for initialization")
  .add(
    "for (int i = 0; i < n; ++i)",
    "2n + 1",
    "1 for initialization, n for comparison, n for increment"
  )
  .add("{")
  .add(
    "for (int j = i; j < n; ++j)",
    "2n^2 + n",
    "n for initialization, n^2 for comparison, n^2 for increment"
  )
  .add("{")
  .add(
    "for (int k = j; k < n; ++k)",
    "2n^3 + n^2",
    "n^2 for initialization, n^3 for comparison, n^3 for increment"
  )
  .add("{")
  .add(
    "if ( (i + j + k) % 2 == 0)",
    "4n^3",
    "3n^3 for addition, n^3 for modulo"
  )
  .add("{")
  .add("++count;", "n^3", "n^3 for increment")
  .add("}")
  .add("}")
  .add("}")
  .add("}")
  .add("return count;", "1", "1 for return")
  .add("}");

const questionTwo = new Question(
  code,
  Languages.CPlusPlus,
  Difficulty.Medium,
  "O(n^3)",
  `This function has a cubic time complexity of O(n^3). 
  The outermost loop runs n times, the middle loop runs n^2 times, 
  and the innermost loop runs n^3 times. 
  If we add everything together we get: 1 + 2n + 1 + 2n^2 + n + 2n^3 + n^2 + 4n^3 + n^3 + 1 = 7n^3 + 3n^2 + 4n + 2 = O(n^3). since we drop the constants.
  Therefore, the overall time complexity is O(n^3).`
);

export default questionTwo;
