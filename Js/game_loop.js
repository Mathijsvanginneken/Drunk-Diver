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
    /*obstaclesArrayBeer.forEach((eachObstacle) => {
        eachObstacle.draw();
        eachObstacle.move();
    }),
    obstaclesArrayShark.forEach((eachObstacle) => {
        eachObstacle.draw();
        eachObstacle.move();
    }),*/
    collisions();
    console.log('Hey collision happening')
    
    requestAnimationFrame(letsPlay);
}

letsPlay();