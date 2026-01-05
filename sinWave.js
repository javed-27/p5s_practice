let inc = 0.01;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(210, 180, 140);
  noFill();
  let xOff = 0;
  beginShape();
  for (let x = 0; x < width; x++) {
    y = map(sin(xOff), -1, 1, 100, 500);
    vertex(x, y);
    xOff += inc;
  }
  endShape();
}
