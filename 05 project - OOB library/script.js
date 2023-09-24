class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.#title = title;
    this.#author = author;
    this.#year = year;
  }

  showDetails() {
    return `${this.#title}, ${this.#author}, ${this.#year}`;
  }
}

class Library {}

// const book = new Book('książka', 'me', '2022');
// document.querySelector('.results').innerHTML = book.showDetails();
// console.log(book.showDetails());
