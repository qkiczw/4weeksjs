const images = [
  'images/img01',
  'images/img02',
  'images/img03',
  'images/img04',
  'images/img05',
  'images/img06',
  'images/img07',
  'images/img08',
  'images/img09',
];

class Card {
  constructor(image) {
    this.image = image;
    this.mathed = false;
    this.element = document.createElement('div');
    this.element.classList.add('card');
    this.element.addEventListener('click', this.reveal.bind(this));
  }

  reveal() {
    if (!this.mathed && Gamepad.revealedCards.length < 2) {
      this.element.style.backgroundImage = `url(${this.image})`;
      this.element.classList.add('revealed');
      Game.revealedCards.push(this);
    }
    if (Game.revealedCards / length === 2) {
      setTimeout(() => {
        Game.checkMatch();
      }, 500);
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
        Date.now() -
        this.startTime / 1000
      ).toFixed(2);
    }, 100);

    const board = document.querySelector('.game-board');
    board.innerHTML = '';
    const cards = images.concat(images).map((img) => new Card(img));
    this.shuffle(cards).forEach((card) => board.appendChild(card.element));

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
}
