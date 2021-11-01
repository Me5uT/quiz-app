import { makeAutoObservable } from "mobx";
import { Difficulty } from "../models";
import { url } from "../services/API";

export class QuestionStore {
  constructor() {
    makeAutoObservable(this);
  }
  loading: boolean = false;
  questions: string[] = [];
  number: number = 0;
  userAnswers: string[] = [];
  score: number = 0;
  gameOver: boolean = true;

  onShowLoading = () => {
    this.loading = true;
  };

  onHideLoading = () => {
    this.loading = false;
  };

  setQuestions = (question: string) => {
    this.questions.push(question);
  };

  setNumber = (num: number) => {
    this.number = num;
  };

  setUserAnswers = (answer: string) => {
    this.userAnswers.push(answer);
  };

  setScore = (scr: number) => {
    this.score = scr;
  };

  setGameOver = (status: boolean) => {
    this.gameOver = status;
  };

  fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    this.onShowLoading();
    try {
      const endpoint = `${url}amount=${amount}&difficulty=${difficulty}&type=multiple`;
      const data = await (await fetch(endpoint)).json();

      console.log("data", data.results);
      this.onHideLoading();
    } catch (error) {
      console.log("error message:", error);
      this.onHideLoading();
    }
  };
}
