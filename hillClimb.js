let inc = 0.01;
let start = 0;
function setup() {
  createCanvas(885, 830);
}

function draw() {
  background(0);
  let xOff = start;
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
  y = noise(start + inc * 100) * height - 10;
  x = 100;
  circle(100, x, 10);
  start += inc;
}
