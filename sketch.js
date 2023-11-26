let particles = [];
let repellers = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  particles = createParticles(color(0, 0, 0), 300);
  repellers = createParticles(color(255, 255, 255), 20);
}


function draw() {
  background(255);
  rule(repellers, repellers, -100);
  rule(particles, repellers, 300);

  for (let i=0; i<particles.length; i++) {
    let p = particles[i];
    p.update();
    p.show();
  }
}

function rule(aPs, bPs, g) {
  for (let i=0; i<aPs.length; i++) {    
    for (let j=0; j<bPs.length; j++) {
      let d = p5.Vector.dist(aPs[i].pos, bPs[j].pos);
      if (d > 0.2 && d < 90) {
        let force = p5.Vector.sub(aPs[i].pos, bPs[j].pos);
        force.mult(g);
        force.div(d*d);
        aPs[i].addForce(force);
      }
    }
  }
}

function createParticles(aColor, number) {
  let group = [];
  for (let i = 0; i < number; i++) {
    let p = new Particle(aColor);
    group.push(p);
    particles.push(p);
  }
  return group;
}