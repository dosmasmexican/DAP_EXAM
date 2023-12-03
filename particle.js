class Particle {
  constructor(x, y, t) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255;
    this.w = random(20, 30)
    this.t = t;
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1
    this.acceleration.mult(0);
  }

  show() {
    textSize(this.w);
    text(this.t, this.position.x, this.position.y);
  }

  isDead() {
    return this.lifespan < 0.0;
  }
}