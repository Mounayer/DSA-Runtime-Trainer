import questions from "~/data";

interface QuestionProps {
  questionNumber: number;
}

export default function Question({ questionNumber }: QuestionProps) {
  return (
    <div>{questions[questionNumber-1].result}</div>
  );
}
