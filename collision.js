function collision(projectile,entity) {
  for (var i = 0; i < projectile.length; i++) {

    //check if we hit left side
    if (entity.y <= projectile[i].y + projectile[i].h && entity.y + entity.h >= projectile[i].y && entity.x <= projectile[i].x + projectile[i].w && entity.x >= projectile[i].x) {
      entity.isAlive = false
    }

    //check if we hit right side
    if (entity.y <= projectile[i].y + projectile[i].h && entity.y + entity.h >= projectile[i].y && entity.x + entity.w >= projectile[i].x && entity.x <= projectile[i].x + projectile[i].w) {
      entity.isAlive = false
    }

    //check if we hit bottom side
    if (entity.x <= projectile[i].x + projectile[i].w && entity.x + entity.w >= projectile[i].x && entity.y <= projectile[i].y + projectile[i].h && entity.y >= projectile[i].y) {
      entity.isAlive = false
    }

    //check if we hit top side
    if (entity.x <= projectile[i].x + projectile[i].w && entity.x + entity.w >= projectile[i].x && entity.y + entity.h >= projectile[i].y && entity.y <= projectile[i].y + projectile[i].h) {
      entity.isAlive = false
    }

  }//end loop
}//end colision
