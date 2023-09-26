const AddBookBtn = document.querySelector('.add-book-btn');

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

class Library {
  #bookCollection;

  constructor() {
    this.#bookCollection = new Map();
  }

  init() {
    console.log('run with init()');
  }

  addBook() {
    const title = document.querySelector('.add-book-title-input');
    const author = document.querySelector('.add-book-author-input');
    const year = document.querySelector('.add-book-year-input');

    const book = new Book(title, author, year);
    this.#bookCollection.set([title, book]);

    document.querySelector('.results').innerHTML = `Ksiażka dodana`;
    console.log(this.#bookCollection);
  }
}

const biblioteka = new Library();

biblioteka.init();

AddBookBtn.addEventListener('click', function (e) {
  e.preventDefault();
  biblioteka.addBook();
});

// const book = new Book('książka', 'me', '2022');
// document.querySelector('.results').innerHTML = book.showDetails();
// console.log(book);
