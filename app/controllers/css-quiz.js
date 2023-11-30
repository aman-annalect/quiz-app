import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CssQuizController extends Controller {
  @tracked questions;
  @tracked currentQuestionIndex = 0;
  @tracked currentQuestion;
  @tracked timer;
  @tracked score = 0;
  @tracked difficulty = 60;
  @tracked answerSubmitted = false;
  @tracked quizEnded = false;

  constructor() {
    super(...arguments);
  }
  @action setCurrentQuestion(index) {
    this.currentQuestion = this.questions[index];
  }
  @action restartQuiz() {
    this.quizEnded = false;
    this.runTimer(this.difficulty);
    this.currentQuestionIndex = 0;
    this.setCurrentQuestion(this.currentQuestionIndex);
  }
  @action submitAnswer(answer) {
    if (this.currentQuestion.correctAnswer === answer) {
      this.score = this.score + 1;
    }
    this.answerSubmitted = true;
  }
  @action runTimer(timer) {
    this.timer = timer;
    if (timer === 0 || this.answerSubmitted === true) {
      this.answerSubmitted = false;
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.quizEnded = true;
        return;
      }
      this.currentQuestionIndex = this.currentQuestionIndex + 1;
      this.setCurrentQuestion(this.currentQuestionIndex);
      this.runTimer(this.difficulty);
      return;
    }
    return setTimeout(() => {
      this.runTimer(timer - 1);
    }, 1000);
  }
}
