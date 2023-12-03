class Repeller {
  constructor(p, n) {
    this.position = createVector(width / 2, height / 2);
    this.power = p;
    this.angle = 0;
    this.speed = n;
  }

  move() {
    this.angle += this.speed;
    this.position.x = width / 2 + 150 * cos(this.angle);
    this.position.y = height / 2 + 150 * sin(this.angle);
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