const background = new Background(ctx);

function letsPlay(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    background.draw();
    player.draw();
    requestAnimationFrame(letsPlay);
}

letsPlay();