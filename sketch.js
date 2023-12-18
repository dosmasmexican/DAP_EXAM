let emitter;
let repeller;

let gui;

let params = {
  rotatespeed: 0.01,
  rotatespeedMin: -0.05,
  rotatespeedMax: 0.05,
  rotatespeedStep: 0.005,
  particlevalue: 0,
  repellerpower: 0,
  repellerpowerMin: 0,
  repellerpowerMax: 1000,
  repellerpowerStep: 10
};

function setup() {
  getAudioContext().suspend();
  createCanvas(400, 800);

  emitter = new Emitter(width / 2, -200);
  repeller = new Repeller(width / 2, height / 2);

  gui = createGui("test slider");

  gui.addObject(params);
  gui.setPosition(510, 10);
}

function draw() {
  background(255);
  repeller.setPower(params.repellerpower);
  repeller.setSpeed(params.rotatespeed);
  repeller.move();

  emitter.addParticle();


  let gravity = createVector(0, 0.01);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.run();

  repeller.show();
}
function mousePressed() {
  userStartAudio();
}

