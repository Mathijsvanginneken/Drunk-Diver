function collision() {
    for (const trash of obstaclesArrayTrash) {
      if (
        player.x < trash.x + trash.width && 
        player.x +  player.width > trash.x &&
        player.y < trash.y + trash.height &&
        player.y +  player.height > trash.y
      )
        scorePoints += 1;
       obstaclesArrayTrash.splice(trash, 1);
  }
   for (const beer of obstaclesArrayBeer) {
     if (
       player.x < beer.x + beer.width && 
       player.x +  player.width > beer.x &&
       player.y < beer.y + beer.height &&
       player.y +  player.height > beer.y
     )
       scorePoints += 1;
      //  obstaclesArrayTrash.splice(i, 1);
    }
    for (const shark of obstaclesArrayShark) {
      if (
        player.x < shark.x + shark.width && 
       player.x +  player.width > shark.x &&
       player.y < shark.y + shark.height &&
       player.y +  player.height > shark.y
     )
       scorePoints += 1;
        //obstaclesArrayTrash.splice(i, 1);
    }
}