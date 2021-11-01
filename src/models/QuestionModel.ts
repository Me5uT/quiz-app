import { Difficulty } from "./DifficultyModel";

export interface IQuestion {
  category: string;
  correctAnswer: string;
  difficulty: Difficulty;
  incorrectAnswer: string[];
  question: string;
  type: string;
}
