let gui;

let params = {
  rotatespeed: 0.01,
  rotatespeedMin: -0.05,
  rotatespeedMax: 0.05,
  rotatespeedStep: 0.005,
  leftattractorpower: 500,
  leftattractorpowerMin: 0,
  leftattractorpowerMax: 1000,
  leftattractorpowerStep: 20,
  rightattractorpower: 500,
  rightattractorpowerrMin: 0,
  rightattractorpowerMax: 1000,
  rightattractorpowerStep: 20,
  repellerpower: 400,
  repellerpowerMin: 0,
  repellerpowerMax: 800,
  repellerpowerStep: 20,
  distance: 330,
  distanceMin: 0,
  distanceMax: 400,
  distanceStep: 10,
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
att1.setPower(params.leftattractorpower);
att2.setPower(params.rightattractorpower);
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