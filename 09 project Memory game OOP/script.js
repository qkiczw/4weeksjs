const images = [
  'images/img01.jpg',
  'images/img02.jpg',
  'images/img03.jpg',
  'images/img04.jpg',
  'images/img05.jpg',
  'images/img06.jpg',
  'images/img07.jpg',
  'images/img08.jpg',
  'images/img09.jpg',
];

class Card {
  constructor(image) {
    this.image = image;
    this.mathed = false;
    this.element = document.createElement('div');
    this.element.classList.add('card');
    this.element.style.backgroundImage = `url(${this.image})`;
    this.element.addEventListener('click', this.reveal.bind(this));
  }
  reveal() {
    if (!this.mathed && Game.revealedCards.length < 2) {
      this.element.style.backgroundImage = `url(${this.image})`;
      this.element.classList.add('revealed');
      Game.revealedCards.push(this);
      if (Game.revealedCards.length === 2) {
        setTimeout(() => {
          Game.checkMatch();
        }, 500);
      }
    }
  }

  hide() {
    this.element.style.backgroundImage = '';
    this.element.classList.remove('revealed');
  }

  matchFound() {
    this.mathed = true;
    this.element.classList.add('matched');
  }
}

class Game {
  static revealedCards = [];
  static matchedPairs = 0;
  static startTime = null;
  static interval = null;

  static start(images) {
    this.startTime = Date.now();
    this.interval = setInterval(() => {
      document.getElementById('time').textContent = (
        (Date.now() - this.startTime) /
        1000
      ).toFixed(2);
    }, 100);

    const board = document.querySelector('.game-board');
    board.innerHTML = '';
    const cards = images.concat(images).map((img) => new Card(img));
    this.shuffle(cards).forEach((card) => board.appendChild(card.element));

    // Hiding cards after a setted time
    setTimeout(() => {
      cards.forEach((card) => card.hide());
    }, 3000);
  }

  static shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  static checkMatch() {
    if (this.revealedCards[0].image === this.revealedCards[1].image) {
      this.revealedCards[0].matchFound();
      this.revealedCards[1].matchFound();
      this.matchedPairs++;

      if (this.matchedPairs === 9) {
        clearInterval(this.interval);
        alert(
          `Gratulacje!!! Twój czas to ${
            document.getElementById('time').textContent
          } sekund.`
        );
      }
    } else {
      this.revealedCards[0].hide();
      this.revealedCards[1].hide();
    }
    this.revealedCards = [];
  }
}

Game.start(images);
