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

    this.ctx.strokeStyle = 'white'; // colour of a pen
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = 'round';
  }
  #initEvents() {
    this.canvas.addEventListener('mousedown', (e) => this.#starPosition(e));
    this.canvas.addEventListener('mouseup', (e) => this.#endPosition(e));
    this.canvas.addEventListener('mousemove', (e) => this.#draw(e));

    this.canvas.addEventListener('touchstart', (e) => this.#starPosition(e));
    this.canvas.addEventListener('touchend', (e) => this.#endPosition(e));
    this.canvas.addEventListener('touchmove', (e) => this.#draw(e));
  }

  // cursor position
  #starPosition(e) {
    console.log(`drawing start`);
    this.painting = true;
    this.#draw(e);
  }
  #endPosition() {
    console.log(`drawing stop`);
    this.painting = false;
    this.ctx.beginPath();
  }

  #draw(e) {
    // TODO: draw method
    if (!this.painting) return;

    // console.log(`im drawing!`);

    let x = e.clientX || e.touches[0].clientX;
    let y = e.clientY || e.touches[0].clientY;

    console.log(e);

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.moveTo(x, y);
  }

  changeColor(color) {
    console.log(color);
    this.ctx.strokeStyle = color;
  }
  changeBgColor(color) {
    console.log(`bg`, color);
    const background = document.querySelector('.app-container');
    background.style.backgroundColor = color;
    // document.querySelector('.app-container').style.backgroundColor = color;
  }
}

const app = new DrawingApp();
app;
