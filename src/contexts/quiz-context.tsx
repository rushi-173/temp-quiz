import React, { createContext, useContext, useEffect, useState } from "react";
import { QuizType } from "../types/Quiz.types";
import { quizOne, quizTwo } from "../data";
type contextValue = {
  quizData: QuizType[];
  setQuizData: (quizData: QuizType[]) => void;
  quizInProgress: QuizType | null;
  setQuizInProgress: (quizInProgress: QuizType) => void;
  currentScore: number;
  setCurrentScore: (currentScore: number) => void;
  getQuiz: (id: string) => QuizType | null;
};

const QuizContext = createContext<contextValue | null>(null);

export const QuizProvider: React.FC = ({ children }) => {
  const [quizData, setQuizData] = useState<QuizType[]>([]);
  const [quizInProgress, setQuizInProgress] = useState<QuizType | null>(null);
  const [currentScore, setCurrentScore] = useState<number>(0);

  useEffect(() => {
    setQuizData([...quizData, quizOne, quizTwo]);
  }, []);

  function getQuiz(id: string) {
    let result = quizData.find(({ _id }) => _id === id);
    return result ? result : null;
  }

  return (
    <QuizContext.Provider
      value={{
        quizData,
        setQuizData,
        quizInProgress,
        setQuizInProgress,
        currentScore,
        setCurrentScore,
        getQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
