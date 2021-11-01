import React from "react";
import { QuestionCard } from "./components";

const TOTAL_QUESTION = 10;

const App = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [questions, setQuestions] = React.useState<string[]>([]);
  const [number, setNumber] = React.useState<number>(0);
  const [userAnswers, setUserAnswers] = React.useState<string[]>([]);
  const [score, setScore] = React.useState<number>(0);
  const [gameOver, setGameOver] = React.useState<boolean>(true);

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score"> Score: </p>
      <p>Loading Questions</p>
      {/* <QuestionCard
        questionId={number + 1}
        totalQuestions={TOTAL_QUESTION}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}

      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
