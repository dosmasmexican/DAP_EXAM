let rotateSlider;

let emitter;
let repeller;

function setup() {
  createCanvas(500, 500);
  textSize(15);
  noStroke();
  rotateSlider = createSlider(0, 200, 100);
  rotateSlider.position(20, 20);

  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, height / 2);
}

function draw() {
  background(255);
  const r = rotateSlider.value();
  text("rotate speed", rotateSlider.x * 2 + rotateSlider.width, 35);
  repeller.setSpeed(r);
  repeller.move();
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.run();

  repeller.show();
}