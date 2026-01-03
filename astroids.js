class Astroid {
  constructor(x1, y1, velocity) {
    this.initialValues = [x1, y1];
    this.velocity = velocity;
    this.makeVector();
  }

  makeVector() {
    this.positionVector = createVector(...this.initialValues);
    this.velocityVector = createVector(this.velocity, this.velocity);
  }

  paintAstroid() {
    if (this.positionVector.y >= height) {
      this.positionVector.set(random(0,width/1.5),0);
    }
    circle(this.positionVector.x, this.positionVector.y, random(4,9));
    this.positionVector.add(this.velocityVector);
  }
}

let astroid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    let x = random(0,width);      
    let y = random(0,height/1.2);      
    let velocity = random(1, 5); 
    astroid.push(new Astroid(x, y, velocity));
  }
}

function draw() {
  background(0,50);
  fill(120, 100, 90);
  astroid.forEach(astroid => astroid.paintAstroid());
}
