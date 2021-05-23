export type OptionType = {
  /**
   * Text to show the player
   */
  text: string;

  /**
   * For the right answer make this true
   */
  isRight: boolean;
};

export type QuestionType = {
  question: string;
  points: number;
  options: OptionType[];
  negativePoints?: number;
};

export type QuizType = {
  _id: string;
  quizName: string;
  playTime: number;
  questions: QuestionType[];
};
