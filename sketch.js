let p;
function setup() {
  createCanvas(400, 400);
  p = new Player(175,175,50,50,"ship.png",65);
}

function draw() {
  background(100);
  p.display()
  p.update()
}
