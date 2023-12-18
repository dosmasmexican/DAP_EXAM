class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 400;
    this.angle = 0;
    this.speed = 0;
    this.synth = new p5.MonoSynth();
    this.c = 0;
  }

  setPower(value) {
    this.power = value;
  }

  setSpeed(value) {
    this.speed = value;
  }

  move() {
    this.angle += this.speed;
    this.position.x = width / 2 + 150 * cos(this.angle);
    this.position.y = height / 2 + 150 * sin(this.angle);
  }

  show() {
    fill(this.c);
    circle(this.position.x, this.position.y, 32);
  }

  repel(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    if (distance < 20) {
    }
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
