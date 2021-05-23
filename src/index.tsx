import { render } from "react-dom";
import { QuizProvider } from "./contexts/quiz-context";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");
render(
  <Router>
    <QuizProvider>
      <App />
    </QuizProvider>
  </Router>,
  rootElement
);
