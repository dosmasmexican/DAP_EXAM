class Emitter {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }
  
  work() {
    this.update();
    this.show();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.origin.add(this.velocity);
    this.acceleration.mult(0);
  }

  addParticle() {
    this.particles.push(new Particle(this.origin.x, this.origin.y));
  }

  applyForce(force) {
    for (let particle of this.particles) {
      particle.applyForce(force);
    }
    this.acceleration.add(force);
  }

  applyRepeller(repeller) {
    for (let particle of this.particles) {
      let force = repeller.repel(particle);
      particle.applyForce(force);
      this.applyForce(force);
    }
  }

  applyAttractor(attractor) {
    for (let particle of this.particles) {
      let force = attractor.pull(particle);
      particle.applyForce(force);
      this.applyForce(force);
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  show() {
    noStroke();
    fill(0);
    circle(this.origin.x, this.origin.y, 25);
  }
}