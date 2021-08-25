
const obstaclesArrayTrash = [];
const background = new Background(ctx);
const player = new Player();

let frameID = null

let trashIntervalId = null
let isStarted = true // Change it form the on-click event of the start button

function letsPlay(){

  if(!trashIntervalId && isStarted){ // frameId % 1000 === 0 is an alternative
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

    for(const obstacle of obstaclesArrayTrash) {
      obstacle.draw();
      obstacle.move();
    }
    
    checkTrashCollisions()

    frameID = requestAnimationFrame(letsPlay);
}


function checkTrashCollisions() {
  for (let i =0; i< obstaclesArrayTrash.length; i++) {
    if (
      (
        obstaclesArrayTrash[i].x + obstaclesArrayTrash[i].width >= player.x &&
        obstaclesArrayTrash[i].x < player.x
     ||
      obstaclesArrayTrash[i].x <= player.x + player.width &&
      obstaclesArrayTrash[i].x + obstaclesArrayTrash[i].width > player.x + player.width
      )
      &&
      (
        obstaclesArrayTrash[i].y + obstaclesArrayTrash[i].height >= player.y &&
        obstaclesArrayTrash[i].y > player.y
        ||
       obstaclesArrayTrash[i].y >= player.y + player.height &&
      obstaclesArrayTrash[i].y + obstaclesArrayTrash[i].height > player.y + player.height
      )
    ) {
      console.log("trash", i)
      obstaclesArrayTrash.splice(i, 1);
    }
  }    

}



letsPlay();