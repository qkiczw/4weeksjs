console.log('Hello World!');

const questionsPack01 = [
  ['Ile to 2x2?', ['4', '22'], 0], //explanation [question, answers, correct answer is a index of an answers array]
  ['Czy Polska jest krajem Uni Europejskiej?', ['Nie', 'Tak'], 1], //explanation [question, answers, correct answer is a index of an answers array]
  ['Delfin to?', ['Ryba', 'plaz', 'Ssak'], 2], //explanation [question, answers, correct answer is a index of an answers array]
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
}

class Quiz {
  #questionsPack;
  #currentQuestionIndes;
  #score = 0;

  constructor(questionsPack) {
    this.#questionsPack = questionsPack.map(
      (question) => new Question(question[0], question[1], question[2])
    );

    console.log(this.#questionsPack); //this is only to test
  }
}

new Quiz(questionsPack01);
