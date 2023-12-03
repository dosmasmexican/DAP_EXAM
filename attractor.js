class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 500;
    this.angle = 0;
    this.size= 100;
  }
  
  setSize(value) {
    this.size= value;
  }

  setDis(value) {
    this.position.x = repeller.position.x +value;
  }

  setPower(value) {
    this.power = value;
  }
  
  move() {
    this.angle+= 0.02;
    this.position.x = width/2 - this.size * cos(this.angle);
    this.position.y = height/2 - this.size * sin(this.angle);
  }
  
  show() {
    stroke(0);
    strokeWeight(2);
    fill(200, 130, 50);
    circle(this.position.x, this.position.y, 32);
  }

  pull(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}