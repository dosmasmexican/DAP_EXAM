let particles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  particle = createParticles(200); 
}


function draw() {
  background(255);
  rule(particles, particles, 10);
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

function createParticles(number) {
  for (let i=0; i<number; i++) {
    let p = new Particle();
    particles.push(p);
  }
}


// let emitter;

// let repeller;

// let att;

// function setup() {
//   createCanvas(800, 600);
//   emitter1 = new Emitter(width / 2, 100);
//   emitter2 = new Emitter(width / 2, height-100);
//   repeller = new Repeller(width / 2, height/2);
//   att1 = new Attractor(235, height/2);
//   att2 = new Attractor(565, height/2);
// }

// function draw() {
//   background(255);
//   repeller.move();
//   emitter1.addParticle();
//   emitter1.addParticle();
//   emitter2.addParticle();
//   emitter2.addParticle();
//   let gravity1 = createVector(0, 0.005);
//   emitter1.applyForce(gravity1);
//   emitter1.applyRepeller(repeller);
//   emitter1.applyAttractor(att1);
//   emitter1.applyAttractor(att2);
//   emitter1.run();
//   let gravity2 = createVector(0, -0.005);
//   emitter2.applyForce(gravity2);
//   emitter2.applyRepeller(repeller);
//   emitter2.applyAttractor(att1);
//   emitter2.applyAttractor(att2);
//   emitter2.run();
//   repeller.show();
// }

