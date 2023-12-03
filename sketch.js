let emitter;

let repeller;

function setup() {
  createCanvas(500, 500);
  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(0,0);

  button1 = createButton("1");
  button1.position(20, 65);
  button1.mousePressed(case1);

  button2 = createButton("2");
  button2.position(20 + 40, 65);
  button2.mousePressed(case2);

  button3 = createButton("3");
  button3.position(20 + 80, 65);
  button3.mousePressed(case3);
}

function draw() {
  background(255);
  repeller.move();
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.run();

  repeller.show();
}

function case1() {
  repeller = new Repeller(400, 0.05);
}

function case2() {
  repeller = new Repeller(100, -0.05);
}

function case3() {
  repeller = new Repeller(800, -0.05);
}