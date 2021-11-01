import React from "react";

interface IQuestionCardProps {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionId: number;
  totalQuestions: number;
}

export const QuestionCard = ({
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
        <div>
          <button disabled={userAnswer}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);
