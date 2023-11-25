class Attractor {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.power = 250;
      this.angle = 0;
    }
    
    move() {
      this.angle+= 0.01;
      this.position.x = width/2 - 250 * cos(this.angle);
      this.position.y = height/2 - 250 * sin(this.angle);
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