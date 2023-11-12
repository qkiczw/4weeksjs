class DrawingApp {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.painting = false;
    this.#init();
    this.#initEvents();
  }
  // #methods are launched from inside the class
  #init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    this.strokeStyle = 'white'; // colour of a pen
  }
  #initEvents() {
    // TODO:mouse methods => mouse up, down and move
    this.canvas.addEventListener('mousedown', () => this.#starPosition());
    this.canvas.addEventListener('mouseup', () => this.#endPosition());

    // TODO: touch methods (mobile phones) => touch start, end, move
    this.canvas.addEventListener('touchstart', () => this.#starPosition());
    this.canvas.addEventListener('touchend', () => this.#endPosition());
  }

  // cursor position
  #starPosition() {
    this.painting = true;
    this.#draw();
  }
  #endPosition() {
    this.painting = false;
  }

  #draw() {
    // TODO: draw method
    if (!this.painting) return;
    console.log('im drawing!');
  }

  changeColor(color) {
    console.log(color);
    this.ctx.strokeStyle(color);
  }
}

const app = new DrawingApp();
app;
