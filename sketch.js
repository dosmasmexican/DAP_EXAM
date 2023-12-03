let emitter;

let repeller;

let att;

function setup() {
  createCanvas(800, 600);
  emitter1 = new Emitter(width / 2, 100);
  emitter2 = new Emitter(width / 2, height-100);
  repeller = new Repeller(width / 2, height/2);
  att1 = new Attractor(235, height/2);
  att2 = new Attractor(565, height/2);
}

function draw() {
background(255);
repeller.move();
emitter1.addParticle();
emitter1.addParticle();
emitter2.addParticle();
emitter2.addParticle();
let gravity1 = createVector(0, 0.005);
emitter1.applyForce(gravity1);
emitter1.applyRepeller(repeller);
emitter1.applyAttractor(att1);
emitter1.applyAttractor(att2);
emitter1.run();
let gravity2 = createVector(0, -0.005);
emitter2.applyForce(gravity2);
emitter2.applyRepeller(repeller);
emitter2.applyAttractor(att1);
emitter2.applyAttractor(att2);
emitter2.run();
repeller.show();
// att1.show();
// att2.show();
}