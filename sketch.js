let p;
let e;
let backgroundPic
function setup() {
  createCanvas(400, 400);
  p = new Player(175,175,50,50,"ship.png",65);
  e = new Enemy(10,10,50,50,"Alien1.png",65);
  //backgroundPic = loadImage("Alien1.png");
  
}

function draw() {
  background(100);
  
  
  p.display()
  p.update()
  
  e.display()
  //backgroundPic.resize(400,400)
  //image(backgroundPic,0,0)
}
