let movers = [];

let attractor;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 500; i++) {
    movers[i] = new Mover(random(0, width), random(0, height));
  }
  attractor = new Attractor();
}

function draw() {
  background(255);
  rule(movers, movers,8);
  
  attractor.move();

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.pull(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].show();
  }
}

function rule(aPs, bPs, g) {
  for (let i=0; i<aPs.length; i++) {    
    for (let j=0; j<bPs.length; j++) {
      let d = p5.Vector.dist(aPs[i].position, bPs[j].position);
      if (d > 0.2 && d < 90) {
        let force = p5.Vector.sub(aPs[i].position, bPs[j].position);
        force.mult(g);
        force.div(d*d);
        aPs[i].applyForce(force);
      }
    }
  }
}