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

  get answers() {
    return this.#answers;
  }
  get correctAnswer() {
    return this.#correctAnswer;
  }
}

class Quiz {
  #questionsPack;
  #currentQuestionIndex;
  #score;

  constructor(questionsPack) {
    this.#questionsPack = questionsPack.map(
      (question) => new Question(question[0], question[1], question[2])
    );
    this.#currentQuestionIndex = 0;
    this.#score = 0;
  }

  displayScore() {
    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = `${this.#score} / ${this.#questionsPack.length}`;
  }

  displayQuestionAndAnswers() {
    const questionElement = document.querySelector('.question__container');
    const answersContainer = document.querySelector('.answers__container');

    questionElement.innerHTML = '';
    answersContainer.innerHTML = '';

    questionElement.textContent =
      this.#questionsPack[this.#currentQuestionIndex].questionTitle;

    this.#questionsPack[this.#currentQuestionIndex].answers.forEach(
      (answer, index) => {
        const answerElement = document.createElement('li');
        answerElement.innerHTML = `<label><input type="radio" value=${index} name="answer"></input> ${answer}</label>`;
        answersContainer.appendChild(answerElement);
      }
    );
  }

  nextQuestion() {
    const selectedAnswer = document.querySelector(
      'input[name="answer"]:checked'
    );

    if (selectedAnswer) {
      if (
        +selectedAnswer.value ===
        this.#questionsPack[this.#currentQuestionIndex].correctAnswer
      ) {
        console.log('Dobra odpowiedź. Dostajesz jeden punkt');
        this.#score++;
      } else {
        console.log('Zła odpowiedź! Nie dostajesz punktu');
      }
      this.#currentQuestionIndex++;

      if (this.#currentQuestionIndex < this.#questionsPack.length) {
        this.displayQuestionAndAnswers();
        this.displayScore();
      } else {
        alert(`Koniec. Twoja ilość punktów to: ${this.#score}`);
      }
    } else {
      alert('Nie wybrałeś odpowiedzi!');
    }
    console.log(this.#score);
  }

  init() {
    this.displayQuestionAndAnswers();
  }
}

const quiz = new Quiz(questionsPack01);
quiz.init();
