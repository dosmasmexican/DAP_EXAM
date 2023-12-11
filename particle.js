class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  applyRepeller(repeller) {
    let force = repeller.repel(particle);
    particle.applyForce(force);
}

applyAttractor(attractor) {
    let force = attractor.pull(particle);
    particle.applyForce(force);
}

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    noStroke();
    fill(50, 255);
    circle(this.position.x, this.position.y, 10);
  }
}