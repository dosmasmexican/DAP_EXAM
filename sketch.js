let gui;

let params = {
  rotatespeed: 0.01,
  rotatespeedMin: -0.05,
  rotatespeedMax: 0.05,
  rotatespeedStep: 0.005,
  leftattractorpower: 100,
  leftattractorpowerrMin: 0,
  leftattractorpowerMax: 1000,
  leftattractorpowerStep: 20,
  rightattractorpower: 300,
  rightattractorpowerrMin: 0,
  rightattractorpowerMax: 1000,
  rightattractorpowerStep: 20,
  repellerpower: 100,
  repellerpowerMin: 0,
  repellerpowerMax: 800,
  repellerpowerStep: 20,
};

let osc, fft;

function setup() {
  createCanvas(800, 800);
  particle = new Particle(width / 2, 100);
  repeller = new Repeller(width / 2, height/2);
  att1 = new Attractor(235, height/2);
  att2 = new Attractor(565, height/2);
  
  osc = new p5.TriOsc();
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();
  
  gui = createGui("test slider");

  gui.addObject(params);
  gui.setPosition(510, 10);
}

function draw() {
  background(255);
  att1.setPower(params.leftattractorpower);
  att2.setPower(params.rightattractorpower);
  repeller.setPower(params.repellerpower);
  repeller.setSpeed(params.rotatespeed);
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
  
  let freq = map(particle.position.x, 0, width, 40, 880);
  osc.freq(freq);

  let amp = map(particle.position.y, 0, height, 1, 0.005);
  osc.amp(amp);
}
  
