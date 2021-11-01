import React from "react";
import { QuestionCard } from "./components";
import { Difficulty } from "./models";
import { observer } from "mobx-react";
import { QuestionStore } from "./stores/Question.store";
import { Loader } from "./components/Loader";

const TOTAL_QUESTION = 10;

export const App = observer(() => {
  const store = React.useMemo(() => new QuestionStore(), []);

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  if (store.loading) {
    return <Loader />;
  }
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
});
