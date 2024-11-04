import { Difficulty } from "~/helpers/enumerations";
import CodeBlock from "./codeblock";

class Question {
  static number = 1;

  code: CodeBlock;
  difficulty: Difficulty;
  result: string;
  explanation: string;
  id: number;
  language: string;

  /**
   * Creates a new question
   *
   * @param code - The CodeBlock instance
   * @param difficulty - The difficulty level
   * @param result - The expected result as a string
   * @param explanation - The explanation as a string
   */
  constructor(
    code: CodeBlock,
    language: string,
    difficulty: Difficulty,
    result: string,
    explanation: string
  ) {
    this.code = code;
    this.language = language;
    this.difficulty = difficulty;
    this.result = result;
    this.explanation = explanation;
    this.id = 0;
  }

  /**
   * Sets the id of the question
   *
   * @param {number} id - The id of the question
   */
  setId(id: number) {
    this.id = id;
  }
}

export default Question;
