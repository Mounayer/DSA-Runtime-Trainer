import type Question from "~/model/question";
import questionOne from "./questions/questionOne";
import questionTwo from "./questions/questionTwo";

const questionsMap = new Map<number, Question>();

function addQuestion(question: Question) {
  const id = questionsMap.size + 1;

  if (!questionsMap.has(id)) {
    question.setId(id);
    questionsMap.set(id, question);
  }
}

addQuestion(questionOne);
addQuestion(questionTwo);

const easyQuestions = Array.from(questionsMap.values());

export default easyQuestions;
