let rotateSlider;
let particleSlider;

let emitter;
let repeller;

function setup() {
  createCanvas(500, 500);
  textSize(15);
  noStroke();
  rotateSlider = createSlider(0, 200, 100);
  rotateSlider.position(20, 20);
  particleSlider = createSlider(0, 7, 3);
  particleSlider.position(20, 40);

  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, height / 2);
}

function draw() {
  background(255);
  const r = rotateSlider.value();
  text("rotate speed", rotateSlider.x * 2 + rotateSlider.width, 35);
  text("particle", rotateSlider.x * 2 + rotateSlider.width, 55);
  repeller.setSpeed(r);
  repeller.move();
  for (let i = 0; i < particleSlider.value(); i++) {
    emitter.addParticle();
  }

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.run();

  repeller.show();
}