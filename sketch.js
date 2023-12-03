let emitter;
let repeller;

let gui;

let params = {
  testValue: 10,
  testValueMin: 0,
  testValueMax: 500,
  testValueStep: 2,
  move: 1,
  moveMin: 0,
  moveMax: 10,
  moveStep: 0.1,
  tColor: [200, 0, 0],
  tChoice: ["apple", "banana", "mango"],
};

function setup() {
  createCanvas(500, 500);

  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, height / 2);

  gui = createGui("test slider");

  gui.addObject(params);
  gui.setPosition(510, 10);
}

function draw() {
  background(255);
  const r = rotateSlider.value();
  const p = powerSlider.value();
 
  repeller.setPower(p);
  repeller.setSpeed(r);
  repeller.move();

  for (let i = 0; i < particleSlider.value(); i++) {
    emitter.addParticle();
  }

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.run();

  repeller.show();
}