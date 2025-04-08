function collision(projectile,entity) {
  for (var i = 0; i < w.length; i++) {

    //check if we hit the left
    if (entity.y <= projectile[i].y + projectile[i].h && entity.y + entity.h >= projectile[i].y && entity.x <= w[i].x + projectilei].w && entity.x >= projectile[i].x) {
      entity.isAlive = false
    }

    //check if we hit the right
    if (entity.y <= projectile[i].y + projectile[i].h && entity.y + entity.h >= projectile[i].y && entity.x + entity.w >= projectile[i].x && entity.x <= projectile[i].x + projectile[i].w) {
      entity.isAlive = false
    }


    if (entity.x <= projectile[i].x + projectile[i].w && entity.x + entity.w >= projectile[i].x && entity.y <= projectile[i].y + projectile[i].h && entity.y >= projectile[i].y) {
      entity.isAlive = false
    }

    //check if we hit the top
    if (entity.x <= projectile[i].x + projectile[i].w && entity.x + entity.w >= projectile[i].x && entity.y + entity.h >= w[i].y && entity.y <= projectile[i].y + projectile[i].h) {
      entity.isAlive = false
    }

  }//end loop
}//end colisio
