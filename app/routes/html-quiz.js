import Route from '@ember/routing/route';

export default class HtmlQuizRoute extends Route {
  async model() {
    try {
      const questions = await fetch('http://127.0.0.1:3000/htmlQuestions')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // Handle the data from the response
          return data;
        })
        .catch((error) => {
          // Handle errors during the fetch
          console.error('Fetch error:', error);
        });
      return questions;
    } catch (e) {
      console.log(e);
    }
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('questions', model);
    controller.restartQuiz();
  }
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('currentQuestionIndex', 0);
      controller.set('quizEnded', true);
    }
  }
}
