console.log('Hello World!');

const questionsPack01 = [
  ['Ile to 2x2?', ['4', '22'], 0], //explanation [question, answers, correct answer is a index of an answers array]
  ['Czy Polska jest krajem Uni Europejskiej?', ['Nie', 'Tak'], 1], //explanation [question, answers, correct answer is a index of an answers array]
  ['Delfin to?', ['Ryba', 'płaz', 'Ssak'], 2], //explanation [question, answers, correct answer is a index of an answers array]
];

class Question {
  #questionTitle;
  #answers;
  #correctAnswer;

  constructor(question, anwers, correctAnswer) {
    this.#questionTitle = question;
    this.#answers = anwers;
    this.#correctAnswer = correctAnswer;
  }

  get questionTitle() {
    return this.#questionTitle;
  }

  get queestionAnswers() {
    return this.#answers;
  }
}

class Quiz {
  #questionsPack;
  #currentQuestionIndes;
  #score;

  constructor(questionsPack) {
    this.#questionsPack = questionsPack.map(
      (question) => new Question(question[0], question[1], question[2])
    );

    console.log(this.#questionsPack); //this is only to test
    this.#currentQuestionIndes = 0;
    this.#score = 0;

    document
      .querySelector('.next-question-btn')
      .addEventListener('click', function () {
        console.log(this.#currentQuestionIndes);
      });
  }
  displayCurrentQuestion() {
    const questionElement = document.querySelector('.question');
    questionElement.textContent =
      this.#questionsPack[this.#currentQuestionIndes].questionTitle;
  }
  displayCurrentAnswers() {
    this.#questionsPack[this.#currentQuestionIndes].queestionAnswers.forEach(
      (answer, index) => {
        const answersContainer = document.querySelector('.answers__container');
        const answerElement = document.createElement('li');
        answerElement.innerHTML = `<input type="radio" value=${index}>${answer}</input>`;
        answersContainer.appendChild(answerElement);
      }
    );
  }

  init() {
    this.displayCurrentQuestion();
    this.displayCurrentAnswers();
  }
}

const FirstQuiz = new Quiz(questionsPack01);
FirstQuiz.init();
