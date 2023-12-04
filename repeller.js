class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 1000;
    this.angle = 0;
  }

  move() {
    this.angle+= 0.03;
    this.position.x = width/2 + 50 * cos(this.angle);
    this.position.y = height/2 + 50 * sin(this.angle);
  }
  
  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 16);
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