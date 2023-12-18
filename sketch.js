let emitter;

let repeller;

let att;

function setup() {
  createCanvas(800, 800);
  emitter = new Emitter(width / 2, 100);
  repeller = new Repeller(width / 2, height/2);
  att1 = new Attractor(235, height/2);
  att2 = new Attractor(565, height/2);
}

function draw() {
  background(255);
  repeller.move();
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  let gravity1 = createVector(0, 0.005);
  emitter.work();
  emitter.applyForce(gravity1);
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att1);
  emitter.applyAttractor(att2);
  emitter.run();
  repeller.show();
  att1.show();
  att2.show();
}