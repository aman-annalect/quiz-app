import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class QuestionComponent extends Component {
  @tracked
  selectedAnswer = null;
  constructor() {
    super(...arguments);
  }
  get progress() {
    const progress =
      ((this.args.difficulty - this.args.timer) / this.args.difficulty) * 100;
    return parseInt(progress) + '%';
  }
  get currentQuestionNumber() {
    return this.args.currentIndex + 1;
  }
  @action selectAnswer(answer) {
    this.selectedAnswer = answer;
  }
}
