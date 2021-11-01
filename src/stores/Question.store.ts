import { IAnswerModel } from "./../models/AnswerModel";
import { shuffleArray } from "./../utils/utils";
import { IQuestion, QuestionState } from "./../models/QuestionModel";
import { makeAutoObservable } from "mobx";
import { Difficulty } from "../models";
import { url } from "../services/API";

export class QuestionStore {
  constructor() {
    makeAutoObservable(this);
  }

  loading: boolean = false;
  questions: QuestionState[] = [];
  number: number = 0;
  userAnswers: IAnswerModel[] = [];
  score: number = 0;
  gameOver: boolean = true;

  initializeQuestion = () => {
    this.userAnswers = [];
    this.score = 0;
    this.number = 0;
  };

  onShowLoading = () => {
    this.loading = true;
  };

  onHideLoading = () => {
    this.loading = false;
  };

  setQuestions = (question: QuestionState[]) => {
    this.questions = [...question];
  };

  setNumber = (num: number) => {
    this.number = num;
  };

  setUserAnswers = (answer: IAnswerModel) => {
    this.userAnswers.push(answer);
  };

  setScore = (scr: number) => {
    this.score += scr;
  };

  setGameOver = (status: boolean) => {
    this.gameOver = status;
  };

  fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    this.onShowLoading();
    try {
      const endpoint = `${url}amount=${amount}&difficulty=${difficulty}&type=multiple`;
      const data = await (await fetch(endpoint)).json();

      console.log(data);
      this.onHideLoading();
      const mappedData = data.results.map((question: IQuestion) => ({
        ...question,
        answers: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      }));
      console.log(mappedData);
      return mappedData;
    } catch (error) {
      console.log("error message:", error);
      this.onHideLoading();
    }
  };
}
