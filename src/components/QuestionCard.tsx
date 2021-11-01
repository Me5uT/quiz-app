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
  }: IQuestionCardProps) => (
    <div>
      <p className="number">
        Question: {questionId} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
);
