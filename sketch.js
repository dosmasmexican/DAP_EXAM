let emitter;

let repeller;

function setup() {
  createCanvas(500, 500);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, height/2);
}

function draw() {
  background(255);
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

