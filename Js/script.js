
const obstaclesArrayTrash = [];
const background = new Background(ctx);
const player = new Player();

let trashIntervalId = null
let isStarted = true // Change it form the on-click event of the start button

function letsPlay(){

  if(!trashIntervalId && isStarted){
    trashIntervalId = setInterval( ()=>{
      const trash = new ObstacleTrash(
        ctx,
        Math.random() * canvas.width + 10,
        0,
        50,
        50,
        Math.ceil(Math.random() * 3)
      );
      obstaclesArrayTrash.push(trash)
    }, 1000)}

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    background.draw();
    player.draw();
    obstaclesArrayTrash.forEach((eachObstacle) => {
        eachObstacle.draw();
        eachObstacle.move();    
    }),
    collisions();
    
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