let gui;

let params = {
  rotatespeed: 0.01,
  rotatespeedMin: -0.05,
  rotatespeedMax: 0.05,
  rotatespeedStep: 0.005,
  Aattractorpower: 500,
  AattractorpowerrMin: 0,
  AattractorpowerMax: 1000,
  AattractorpowerStep: 20,
  Battractorpower: 500,
  BattractorpowerrMin: 0,
  BattractorpowerMax: 1000,
  BattractorpowerStep: 20,
  repellerpower: 400,
  repellerpowerMin: 0,
  repellerpowerMax: 800,
  repellerpowerStep: 20,
  rotatesize: 300,
  rotatesizeMin: 0,
  rotatesizeMax: 400,
  rotatesizeStep: 2,
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
att1.setDis((params.distance)/2);
att2.setDis(-(params.distance)/2);
att2.setSize(params.rotatesize);
att1.move();
att2.move();
att1.setPower(params.Aattractorpower);
att2.setPower(params.Battractorpower);
repeller.setPower(params.repellerpower);
repeller.setSpeed(params.rotatespeed);
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
att1.show();
att2.show();
}