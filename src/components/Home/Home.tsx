import { useQuiz } from "../../contexts/quiz-context";
import React from "react";
import { QuizType } from "../../types/Quiz.types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// type HomeComponentProps = {
//   quiz: QuizType;
// };
export const Home = () => {
  const value = useQuiz();

  return (
    <div className="App">
      <h3>Home</h3>
      <div>
        {value &&
          value.quizData.map((quiz) => {
            return (
              <div>
                <h4>{quiz.quizName}</h4>
                <p>{quiz.playTime}</p>
                <Link to={`/quiz/${quiz._id}`}>Attlemp Quiz</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
