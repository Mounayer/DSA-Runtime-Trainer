import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "@remix-run/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import easyQuestions from "~/data/easy";
import mediumQuestions from "~/data/medium";
import hardQuestions from "~/data/hard";
import formatCode from "~/helpers/formatCode";
import type { MetaFunction } from "@remix-run/node";
import type { default as IQuestion } from "~/model/question";

export const meta: MetaFunction = () => {
  return [
    { title: "DSA Runtime Practice" },
    { name: "description", content: "Practice your Runtime Knowledge!" },
  ];
};

export default function Question() {
  const { questionNumber } = useParams();
  const [selectedComplexity, setSelectedComplexity] = useState("");
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const difficulty = searchParams.get("difficulty");

  let questions: IQuestion[] = [];

  switch (difficulty) {
    case "easy":
      questions = easyQuestions;
      break;
    case "medium":
      questions = mediumQuestions;
      break;
    case "hard":
      questions = hardQuestions;
      break;
    default:
      questions = easyQuestions;
      break;
  }

  const questionIndex = Number(questionNumber) - 1;

  useEffect(() => {
    setSelectedComplexity("");
    setSubmit(false);
  }, [questionNumber, difficulty]);

  if (questionIndex >= questions.length || questionIndex < 0) {
    return <div>Question not found</div>;
  }

  const question = questions[questionIndex];
  const code = question.code.line.join("\n");
  const formattedCode = formatCode(code);

  const highlightedCode = formattedCode
    .split("\n")
    .map((line, index) => {
      const result =
        submit && question.code.result[index]
          ? ` // ${question.code.result[index]}`
          : "";
      const explanation =
        submit && question.code.explanation[index]
          ? `, explanation: ${question.code.explanation[index]}`
          : "";
      return `${line}${result}${explanation}`;
    })
    .join("\n");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedComplexity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedComplexity.trim().length === 0) {
      alert("Please select an answer");
      return;
    }
    setSubmit(true);
  };

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    if (Number(questionNumber) >= questions.length) {
      console.log("No more questions");
      return;
    }
    navigate(`/question/${Number(questionNumber) + 1}`);
  };

  return (
    <div className="mx-auto p-4">
      <h1 className="mb-4 text-xl font-bold">
        Question {question.id} - Difficulty: {question.difficulty}
      </h1>
      <div className="p-4 rounded-lg border-2 border-black code-container">
        <SyntaxHighlighter
          language={question.language}
          customStyle={{
            backgroundColor: "white",
            overflowX: "hidden", // Ensures no horizontal scroll
          }}
          wrapLongLines
        >
          {highlightedCode}
        </SyntaxHighlighter>
      </div>

      {submit && selectedComplexity.trim() === question.result && (
        <div className="mt-4 mb-4 text-green-600 font-bold">Correct!</div>
      )}

      {submit && selectedComplexity.trim() !== question.result && (
        <>
          <div className="mt-4 mb-4 text-red-600 font-bold">Incorrect!</div>
          <div className="mt-4 mb-4">
            <span className="font-bold">Correct Answer: </span>{" "}
            <span>{question.result}</span>
          </div>
        </>
      )}

      <div className="mt-4 mb-4">
        {submit && (
          <>
            <span className="font-bold">Explanation: </span>{" "}
            <span>{question.explanation}</span>
          </>
        )}
      </div>

      <form className="flex flex-col items-start">
        <div className="mb-4">
          <span className="font-bold">Answer:</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "O(1)",
            "O(n)",
            "O(n^2)",
            "O(n^3)",
            "O(log n)",
            "O(n log n)",
            "O(2^n)",
          ].map((complexity, index) => (
            <label
              key={index}
              className="flex items-center cursor-pointer space-x-2 border p-2 rounded"
            >
              <input
                disabled={submit}
                type="radio"
                checked={selectedComplexity === complexity}
                value={complexity}
                name="complexity"
                className="accent-blue-500 cursor-pointer"
                onChange={handleRadioChange}
              />
              <span className="text-gray-700 select-none">{complexity}</span>
            </label>
          ))}
        </div>
        <div className="flex flex-row">
          {!submit && (
            <button
              onClick={handleSubmit}
              className="bg-blue-500 mr-4 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
            >
              Submit
            </button>
          )}
          {Number(questionNumber) < questions.length && (
            <button
              onClick={handleNext}
              className="bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-start"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}