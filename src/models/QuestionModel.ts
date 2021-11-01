import { Difficulty } from "./DifficultyModel";

export interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: Difficulty;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = IQuestion & { answers: string[] };
