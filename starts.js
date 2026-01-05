class Star {
  constructor(x, y, { radius, dx }, velocity, maxWidith) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx + velocity;
    this.maxWidith = maxWidith;
  }
  printStar() {
    circle(this.x % this.maxWidith, this.y, this.radius);
    this.x += this.dx;
  }
}

const stars = [];
const starInfo = [
  { radius: 1, dx: 0.5 },
  { radius: 1, dx: 0.5 },
  { radius: 2, dx: 1.0 },
  { radius: 3, dx: 1.5 },
  { radius: 4, dx: 2.0 },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 300; i++) {
    stars.push(
      new Star(
        random(0, width),
        random(0, height),
        random(starInfo),
        random(0.1, 2.0),
        width,
      ),
    );
  }
}

function draw() {
  background(0);
  noStroke();
  fill(180, 255, 255);
  stars.forEach((ele) => ele.printStar());
}
