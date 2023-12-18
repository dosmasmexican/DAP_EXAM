class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 400;
    this.speed = 0;
  }

  setPower(value) {
    this.power = value;
  }

  setSpeed(value) {
    this.speed = value;
  }

  show() {
    fill(0);
    circle(this.position.x, this.position.y, 32);
  }

  repel(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
