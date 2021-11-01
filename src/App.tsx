import React from "react";
import { QuestionCard } from "./components";
import { Difficulty } from "./models";
import { observer } from "mobx-react";
import { QuestionStore } from "./stores/Question.store";
import { Loader } from "./components/Loader";
import { IAnswerModel } from "./models/AnswerModel";
// import { asd } from "./App.styles";

const TOTAL_QUESTION = 10;

export const App = observer(() => {
  const store = React.useMemo(() => new QuestionStore(), []);
  const {
    onShowLoading,
    onHideLoading,
    loading,
    questions,
    number,
    userAnswers,
    score,
    gameOver,
    initializeQuestion,
    setQuestions,
    setNumber,
    setUserAnswers,
    setScore,
    fetchQuizQuestions,
    setGameOver,
  } = store;

  const startTrivia = async () => {
    onShowLoading();
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.Easy
    );
    console.log("newQuestions", newQuestions);
    setQuestions(newQuestions);
    initializeQuestion();
    onHideLoading();
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(1);

      const answerObject: IAnswerModel = {
        question: questions[number].question,
        correctAnswer: questions[number].correct_answer,
        correct,
        answer,
      };
      setUserAnswers(answerObject);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      {/* <GlobalStyle /> */}
      <div className="App">
        {console.log(questions)}
        <h1>React Quiz App</h1>
        {(gameOver || userAnswers.length === TOTAL_QUESTION) && (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        )}
        {!gameOver && <p className="score"> Score: {score}</p>}
        {loading && <Loader />}
        {!loading && !gameOver && questions.length > 0 && (
          <QuestionCard
            questionId={number + 1}
            totalQuestions={TOTAL_QUESTION}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTION - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </div>
    </>
  );
});
