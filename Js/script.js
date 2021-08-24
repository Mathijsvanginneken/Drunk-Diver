
const obstaclesArrayTrash = [];
const player = new Player();
const background = new Background(ctx);

function letsPlay(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    background.draw();
    player.draw();
    obstaclesArrayTrash.forEach((eachObstacle) => {
        eachObstacle.draw();
        eachObstacle.move();
        
    }),
    collisions();
    console.log('Hey collision happening')
    
    requestAnimationFrame(letsPlay);
}

letsPlay();

function collisions() {
    
    for (let i = obstaclesArrayTrash.length - 1; i >= 0; i--) {
    
      if (
        obstaclesArrayTrash[i].x >= player.x &&
        obstaclesArrayTrash[i].x <= player.x + player.width &&
        obstaclesArrayTrash[i].y >= player.y &&
        obstaclesArrayTrash[i].y <= player.y + player.height
      ) {
        obstaclesArrayTrash.splice(i, 1);
      } console.log(i)
    }
}