let inc = 0.01;
let x = 0;
let start = 0;

function setup() {
  createCanvas(885, 830);
}

function draw() {
  background(0);
  let xOff = 0;
  noFill();
  stroke(255);
  beginShape();
  for (let i = 0; i < width; i++) {
    y = noise(xOff) * height;
    vertex(i, y);
    xOff += inc;
  }
  endShape();
  noStroke();
  fill(255);
  y = noise(start) * height - 10;
  circle(x++, y, 10);
  start += inc;
  if (x > width) {
    x = 0;
    start = 0;
  }
}
