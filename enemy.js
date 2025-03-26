function Enemy(x,y,w,h,fileName){
   this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = loadImage(fileName);
 
  
  this.display = function(){
    //resizing the picture based on the 
    //function that calls this object.
    this.img.resize(this.w, this.h)
    image(this.img,this.x, this.y)
  }
  this.update = function(){
    //checking to see if we have to move the player left
    
  }
}
