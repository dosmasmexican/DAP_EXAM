let emitter;

let repeller;

let att;

let gui;

let params = {
  rotatespeed: 0.01,
  rotatespeedMin: -0.05,
  rotatespeedMax: 0.05,
  rotatespeedStep: 0.005,
  particlevalue: 3,
  particlevalueMin: 0,
  particlevalueMax: 7,
  particlevalueStep: 0.5,
  repellerpower: 400,
  repellerpowerMin: 0,
  repellerpowerMax: 800,
  repellerpowerStep: 20
};

function setup() {
  createCanvas(800, 600);
  emitter1 = new Emitter(width / 2, 100);
  emitter2 = new Emitter(width / 2, height-100);
  repeller = new Repeller(width / 2, height/2);
  att1 = new Attractor(235, height/2);
  att2 = new Attractor(565, height/2);

  gui = createGui("test slider");

  gui.addObject(params);
  gui.setPosition(510, 10);

}

function draw() {
background(255);
repeller.setPower(params.repellerpower);
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