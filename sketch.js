let movers = [];

let attractor;
let repeller;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 500; i++) {
    movers[i] = new Mover(random(0, width), random(0, height));
  }
  attractor = new Attractor();
  repeller = new Repeller(width / 2, height/2);
}

function draw() {
  background(255);
  rule(movers, movers,-0.03);
  repeller.move();
  repeller.show();
  attractor.move();
  attractor.show();

  for (let i = 0; i < movers.length; i++) {
    let force1 = attractor.pull(movers[i]);
    let force2 = repeller.repel(movers[i]);
    movers[i].applyForce(force1);
    movers[i].applyForce(force2);
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