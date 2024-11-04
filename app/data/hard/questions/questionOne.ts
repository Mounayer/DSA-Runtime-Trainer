import CodeBlock from "~/model/codeblock";
import Question from "~/model/question";
import { Difficulty, Languages } from "~/helpers/enumerations";

const code = new CodeBlock(
  "int fib_helper(int n, std::unordered_map<int, int>& memo)"
)
  .add("{")
  .add("if (n <= 1)", "1", "1 for the comparison")
  .add("{")
  .add("return n;", "1", "1 for the return statement")
  .add("}")
  .add(
    "if (memo.find(n) != memo.end())",
    "3",
    "1 for the find function, 1 for the comparison, 1 for the function call"
  )
  .add("{")
  .add(
    "return memo[n];",
    "2",
    "1 for the return statement, 1 for the subscript operator []"
  )
  .add("}")
  .add(
    "memo[n] = fib_helper(n - 1, memo) + fib_helper(n - 2, memo);",
    "2n + 5",
    "1 for subscript operator [], 1 for the assignment operator, 1 for the addition operator, 2 for subtraction operators, 2n for the function calls"
  )
  .add(
    "return memo[n];",
    "2",
    "1 for the return statement, 1 for the subscript operator []"
  )
  .add("}")
  .add("")
  .add("// Analyze this function")
  .add("int fib(int n)")
  .add("{")
  .add("std::unordered_map<int, int> memo;", "1", "1 for the declaration")
  .add(
    "return fib_helper(n, memo);",
    "2",
    "1 for the function call, n for the return statement"
  )
  .add("}");

const questionOne = new Question(
  code,
  Languages.CPlusPlus,
  Difficulty.Hard,
  "O(n)",
  `This function has a linear runtime complexity of O(n) because the function uses memoization to store the results of subproblems and avoid redundant calculations.
  If memoization were not to be used, every recursive call of this function would calculate the Fibonacci number of n-1 and n-2, which would result in an exponential runtime complexity of O(2^n).
  Using memoization however, trims down the recursive call tree to a linear height of n, resulting in a linear runtime complexity of O(n).
  The idea here, is to not calculate the Fibonacci number of n-1 and n-2 more than once, but to store the results in a hash table and retrieve them when needed.`
);

export default questionOne;
