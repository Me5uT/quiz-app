import { observer } from "mobx-react";
import React from "react";
import { IAnswerModel } from "../models/AnswerModel";
interface IQuestionCardProps {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer?: IAnswerModel;
  questionId: number;
  totalQuestions: number;
}

export const QuestionCard = observer(
  ({
    question,
    answers,
    callback,
    userAnswer,
    questionId,
    totalQuestions,
  }: IQuestionCardProps) => {
    return (
      <div className="question-card-container">
        <p className="number">
          Question: {questionId} / {totalQuestions}
        </p>
        <p
          dangerouslySetInnerHTML={{ __html: question }}
          className="question-container"
        />
        <div className="answer-container">
          {answers.map((answer) => (
            <div key={answer} className="button-wrapper">
              <button
                disabled={!!userAnswer}
                value={answer}
                onClick={callback}
                className={
                  userAnswer?.correctAnswer === answer
                    ? "correct"
                    : userAnswer?.correctAnswer !== answer &&
                      userAnswer?.answer === answer
                    ? "no-correct-user-clicked"
                    : "no-correct-no-user-clicked"
                }
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
