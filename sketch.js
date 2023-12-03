let input, button, greeting;

let emitter;

let repeller;

function setup() {
  createCanvas(500, 500);
  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, height / 2);

  input = createInput();
  input.position(20, 65);

  button = createButton("submit");
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement("h2", "choose an emoji");
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function draw() {
  background(255);
  repeller.move();
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  let gravity = createVector(0, 0.05);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.run();

  repeller.show();
}

function greet() {
  const name = input.value();
  greeting.html("WOW " + name + " !");

  for (let i = 0; i < 20; i++) {
    emitter.addParticle(name);
  }
}