import EmberRouter from '@ember/routing/router';
import config from 'quiz-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('html-quiz');
  this.route('css-quiz');
  this.route('js-quiz');
});
