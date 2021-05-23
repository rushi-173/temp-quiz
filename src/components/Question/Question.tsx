import { useQuiz } from "../../contexts/quiz-context";
import { QuestionType, OptionType } from "../../types/Quiz.types";
import { useState } from "react";
export type QuestionComponentProps = {
  question: QuestionType;
  nextQuestion: () => void;
};
export function Question({ question, nextQuestion }: QuestionComponentProps) {
  const [userAnswer, setUserAnswer] = useState<OptionType | null>(null);
  console.log(userAnswer);
  const { currentScore, setCurrentScore } = useQuiz();

  function submitAnswer() {
    if (userAnswer && userAnswer?.isRight === true) {
      setCurrentScore(currentScore + question.points);
    } else if (question.negativePoints) {
      setCurrentScore(currentScore - question.negativePoints);
    }
    nextQuestion();
  }

  return (
    <div className="App">
      <p>{question.question}</p>
      <span> -- {question.points} marks</span>
      {question.negativePoints && (
        <span> -- {question.negativePoints} minus points</span>
      )}
      {question.options.map((option: OptionType) => {
        return (
          <div style={{ display: "flex" }} key={option.text}>
            <input
              type="radio"
              name="option"
              onChange={() => {
                setUserAnswer(option);
              }}
            />
            <p>{option.text}</p>
          </div>
        );
      })}
      <button onClick={submitAnswer}>Submit</button>{" "}
      {/* <button type="reset">Clear</button> */}
      <button
        onClick={() => {
          nextQuestion();
        }}
      >
        Skip
      </button>
    </div>
  );
}
