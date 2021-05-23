import { useQuiz } from "../../contexts/quiz-context";
import React from "react";
import { QuizType, QuestionType } from "../../types/Quiz.types";
import { useEffect, useState } from "react";
import { Question } from "../Question/Question";
import { useParams, useNavigate } from "react-router-dom";
type QuizComponentProps = {
  quiz: QuizType;
};
export const Quiz = () => {
  const value = useQuiz();

  let { id } = useParams();
  const navigate = useNavigate();
  let quiz = value ? value.getQuiz(id) : null;
  console.log(quiz);

  const [timer, setTimer] = useState<number>(quiz ? quiz.playTime : 0);
  // const [score, setScore] = useState<number>(0);

  const questions = quiz ? quiz.questions : [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const exitQuiz = () => {
    setCurrentQuestionIndex(0);
    setTimer(0);
    if (value !== null) {
      value.setQuizInProgress(null);
      value.setCurrentScore(0);
    }
    navigate("/");
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer === 0) {
        console.log("time over");
      }
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return quiz ? (
    <div className="App">
      <h3>{quiz.quizName}</h3>
      {currentQuestionIndex < questions.length && (
        <h4>{timer} sec remaining</h4>
      )}
      <h4>Current Score: {value?.currentScore}</h4>
      {currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex]}
          nextQuestion={nextQuestion}
        />
      ) : (
        <h2>You have successfully completed the test</h2>
      )}

      <button onClick={exitQuiz}>Exit Quiz</button>
    </div>
  ) : (
    <div>404 Quiz Not Found</div>
  );
};
