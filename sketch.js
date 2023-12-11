// let gui;

// let params = {
//   rotatespeed: 0.01,
//   rotatespeedMin: -0.05,
//   rotatespeedMax: 0.05,
//   rotatespeedStep: 0.005,
//   particlevalue: 3,
//   particlevalueMin: 0,
//   particlevalueMax: 7,
//   particlevalueStep: 0.5,
//   repellerpower: 400,
//   repellerpowerMin: 0,
//   repellerpowerMax: 1000,
//   repellerpowerStep: 10
// };

function setup() {
  createCanvas(800, 800);
  getAudioContext().suspend();

  particle = new Particle(width / 2, 100);
  repeller = new Repeller(width / 2, height / 2);
  att1 = new Attractor(235, height/2);
  att2 = new Attractor(565, height/2);
  // gui = createGui("test slider");

  // gui.addObject(params);
  // gui.setPosition(510, 10);
}

function draw() {
  background(255);
  repeller.move();
  let gravity1 = createVector(0, 0.005);
  particle.applyForce(gravity1);
  particle.applyRepeller(repeller);
  particle.applyAttractor(att1);
  particle.applyAttractor(att2);
  particle.run();
  repeller.show();
  att1.show();
  att2.show();
  // repeller.setPower(params.repellerpower);
  // repeller.setSpeed(params.rotatespeed);
  // repeller.move();

  // for (let i = 0; i < params.particlevalue; i++) {
  //   emitter.addParticle();
  // }

  // let gravity = createVector(0, 0.1);
  // emitter.applyForce(gravity);
  // emitter.applyRepeller(repeller);
  // emitter.run();

  // repeller.show();
}

function mousePressed() {
  userStartAudio();
}