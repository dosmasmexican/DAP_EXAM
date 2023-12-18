let emitter;

let repeller;

let att;

let osc, fft;

function setup() {
  createCanvas(800, 800);
  emitter = new Emitter(width / 2, 100);
  repeller = new Repeller(width / 2, height/2);
  att1 = new Attractor(235, height/2);
  att2 = new Attractor(565, height/2);

  osc = new p5.TriOsc();
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();
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

  let freq = map(emitter.origin.x, 0, width, 40, 880);
  osc.freq(freq);

  let amp = map(emitter.origin.y, 0, height, 1, 0.005);
  osc.amp(amp);
}