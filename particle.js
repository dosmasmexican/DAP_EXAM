class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
    this.synth = new p5.MonoSynth();
  }

  run() {
    this.update();
    this.show();
    this.checkBottom();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  checkBottom() {
    if (this.position.y >= height) {
      if (this.position.x > 0 && this.position.x < 40) {
        this.synth.triggerAttack("C3");
        this.synth.triggerRelease(0.05);
      }
            if (this.position.x > 40 && this.position.x < 80) {
        this.synth.triggerAttack("E3");
        this.synth.triggerRelease(0.01);
      }
            if (this.position.x > 80 && this.position.x < 120) {
        this.synth.triggerAttack("G3");
        this.synth.triggerRelease(0.01);
      }
            if (this.position.x > 120 && this.position.x < 160) {
        this.synth.triggerAttack("C4");
        this.synth.triggerRelease(0.01);
      }
            if (this.position.x > 160 && this.position.x < 200) {
        this.synth.triggerAttack("E4");
        this.synth.triggerRelease(0.01);
      }
            if (this.position.x > 200 && this.position.x < 240) {
        this.synth.triggerAttack("G4");
        this.synth.triggerRelease(0.01);
      }
            if (this.position.x > 240 && this.position.x < 280) {
        this.synth.triggerAttack("C6");
        this.synth.triggerRelease(0.01);
      }
            if (this.position.x > 280 && this.position.x < 320) {
        this.synth.triggerAttack("E6");
        this.synth.triggerRelease(0.01);
      }
            if (this.position.x > 320 && this.position.x < 360) {
        this.synth.triggerAttack("G6");
        this.synth.triggerRelease(0.01);
      }
        if (this.position.x > 360 && this.position.x < 400) {
        this.synth.triggerAttack("C7");
        this.synth.triggerRelease(0.01);
      }
    }
  }
  
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }

  show() {
    noStroke();
    fill(0);
    circle(this.position.x, this.position.y, 6);
  }

  isDead() {
    return this.position.y >= height;
  }
}