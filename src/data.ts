import { QuizType } from "./Quiz.types";

const quizOne: QuizType = {
  _id: "123",
  quizName: "Marvel Cinematic Universe",
  playTime: 10000,
  questions: [
    {
      question:
        "How many avengers were there in first Avengers movie released in 2012?",
      points: 5,
      negativePoints: 2,
      options: [
        {
          text: "22",
          isRight: false
        },
        {
          text: "6",
          isRight: true
        }
      ]
    },
    {
      question:
        "What was Dr. Strange doing during the fight of New York in 2012?",
      points: 15,
      negativePoints: 22,
      options: [
        {
          text: "getting trained as master of the mystic arts",
          isRight: false
        },
        {
          text: "performing surgery as a real doctor",
          isRight: true
        }
      ]
    },
    {
      question: "who's the love interest for Wanda in MCU?",
      points: 5,
      options: [
        {
          text: "Clint",
          isRight: false
        },
        {
          text: "Vision",
          isRight: true
        }
      ]
    }
  ]
};

const quizTwo: QuizType = {
  _id: "1234",
  quizName: "MB Quiz",
  playTime: 10000,
  questions: [
    {
      question:
        "How many avengers were there in first Avengers movie released in 2012?",
      points: 5,
      negativePoints: 2,
      options: [
        {
          text: "22",
          isRight: false
        },
        {
          text: "6",
          isRight: true
        }
      ]
    },
    {
      question:
        "What was Dr. Strange doing during the fight of New York in 2012?",
      points: 15,
      negativePoints: 10,
      options: [
        {
          text: "getting trained as master of the mystic arts",
          isRight: false
        },
        {
          text: "performing surgery as a real doctor",
          isRight: true
        }
      ]
    },
    {
      question: "who's the love interest for Wanda in MCU?",
      points: 5,
      options: [
        {
          text: "Clint",
          isRight: false
        },
        {
          text: "Vision",
          isRight: true
        }
      ]
    }
  ]
};

export { quizOne, quizTwo };
