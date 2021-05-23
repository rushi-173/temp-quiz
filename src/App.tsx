import { useQuiz } from "./contexts/quiz-context";
import "./styles.css";
import { Quiz, Home, Navbar } from "./components";
import { QuizType } from "./types/Quiz.types";
import { Routes, Route } from "react-router-dom";
export default function App() {
  const value = useQuiz();
  let quizData: QuizType[] = [];
  if (value !== null) {
    quizData = value.quizData;
  }
  console.log(quizData);
  return (
    <div className="App">
      <Navbar />
      <h1>Quiz App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </div>
  );
}
