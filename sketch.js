let emitter;

let repeller;

let att;

let osc, fft;

let params = {
  rotatespeed: 0.01,
  rotatespeedMin: -0.05,
  rotatespeedMax: 0.05,
  rotatespeedStep: 0.005,
  leftattractorpower: 20,
  leftattractorpowerrMin: 0,
  leftattractorpowerMax: 100,
  leftattractorpowerStep: 10,
  rightattractorpower: 50,
  rightattractorpowerrMin: 0,
  rightattractorpowerMax: 100,
  rightattractorpowerStep: 10,
  repellerpower: 10,
  repellerpowerMin: 0,
  repellerpowerMax: 100,
  repellerpowerStep: 10,
  particlevalue: 3,
  particlevalueMin: 0,
  particlevalueMax: 7,
  particlevalueStep: 1,
};

function setup() {
  createCanvas(800, 800);
  emitter = new Emitter(width / 2, 100);
  repeller = new Repeller(width / 2, height/2);
  att1 = new Attractor(width / 2-150, height/2);
  att2 = new Attractor(width / 2+150, height/2);
  
  osc = new p5.TriOsc();
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();
  
  gui = createGui("test slider");

  gui.addObject(params);
  gui.setPosition(1400, 10);
  
}

function draw() {
  background('#fcf6e3');
  repeller.move();
  att1.setPower(params.leftattractorpower);
  att2.setPower(params.rightattractorpower);
  repeller.setPower(params.repellerpower);
  repeller.setSpeed(params.rotatespeed);
  for (let i = 0; i < params.particlevalue; i++) {
    emitter.addParticle();
  }
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
  
    let freq = map(emitter.origin.x, 0, width, 40, 880);
  osc.freq(freq);

  let amp = map(emitter.origin.y, 0, height, 1, 0.005);
  osc.amp(amp);
}
