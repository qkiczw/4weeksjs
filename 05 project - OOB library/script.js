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
    return `
    <h3>Książka której szukasz to:</h3>
    <p>Tytuł: ${this.#title} </p>
    <p>Autor: ${this.#author}</p>
    <p>Data wydania: ${this.#year}</p>
    `;
  }
}

class Library {
  #bookCollection;

  constructor() {
    this.#bookCollection = new Map();
  }

  init() {
    document.querySelector('.add-book-btn').addEventListener('click', () => {
      this.addBook();
    });

    document.querySelector('.search-book-btn').addEventListener('click', () => {
      this.searchBook();
    });
  }

  addBook() {
    const title = document.querySelector('.add-book-title-input').value;
    const author = document.querySelector('.add-book-author-input').value;
    const year = document.querySelector('.add-book-year-input').value;

    const book = new Book(title, author, year);
    this.#bookCollection.set(title, book);

    console.log(this.#bookCollection);
  }

  searchBook() {
    const searchedTitle = document.querySelector('.searched-book-input').value;
    const book = this.#bookCollection.get(searchedTitle);
    const resultsDiv = document.querySelector('.results');

    if (this.#bookCollection.has(searchedTitle)) {
      resultsDiv.innerHTML = book.showDetails();
    } else {
      resultsDiv.innerHTML = `<h3>Nie mamy takiej książki w zbiorze!</h3>
      <p>Poszukaj innej ksiązki!</p>
      `;
    }
  }
}

const biblioteka = new Library();

biblioteka.init();

// const book = new Book('książka', 'me', '2022');
// document.querySelector('.results').innerHTML = book.showDetails();
// console.log(book);
