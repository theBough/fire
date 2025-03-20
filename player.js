function Player(x,y,w,h,fileName,left_direction, right_direction){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = loadImage(fileName);
  this.left_direction = left_direction;
  this.right_direction = right_direction;
  
  this.display = function(){
    //resizing the picture based on the 
    //function that calls this object.
    this.img.resize(this.w, this.h)
    image(this.img,this.x, this.y)
  }
  this.update = function(){
    //checking to see if we have to move the player left
    if(keyIsDown(this.left_direction)){
      this.x -= 5
    }
  }
  
}
