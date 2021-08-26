const obstaclesArrayTrash = [];
const obstaclesArrayBeer = [];
const obstaclesArrayShark = [];

let trashIntervalId = null
let BeerIntervalId = null
let SharkIntervalId = null

const background = new Background(ctx);
const player = new Player();

let frameID = null
let beerPoints = 0;
let score = 0;
let isStarted = true // Change it form the on-click event of the start button

function letsPlay(){

ctx.clearRect(0, 0, canvas.width, canvas.height);
background.draw();

  if(!trashIntervalId && isStarted){ 
    trashIntervalId = setInterval( ()=>{
      const trash = new ObstacleTrash(
        ctx,
        Math.random() * canvas.width + 10,
        0,
        150,
        100,
        Math.ceil(Math.random() * 3)
      );
      obstaclesArrayTrash.push(trash)
    }, 1000)}

     if(!BeerIntervalId && isStarted){ 
      BeerIntervalId = setInterval( ()=>{
      const beer = new ObstacleBeer(
        ctx,
        Math.random() * canvas.width + 10,
        0,
        50,
        50,
        Math.ceil(Math.random() * 3)
      );
      obstaclesArrayBeer.push(beer)
    }, 10000)}

     if(!SharkIntervalId && isStarted){ 
      SharkIntervalId = setInterval( ()=>{
      const shark = new ObstacleShark(
        ctx,
        0,
        Math.random() * canvas.height + 10,
        250,
        100,
        Math.ceil(Math.random() * 5)
      );
      obstaclesArrayShark.push(shark)
    }, 2000)}

    for(const obstacle of obstaclesArrayTrash) {
      obstacle.draw();
      obstacle.move();
    }

    for(const obstacle of obstaclesArrayBeer) {
      obstacle.draw();
      obstacle.move();
    }

    for(const obstacle of obstaclesArrayShark) {
      obstacle.draw();
      obstacle.move();
    }  
    
    player.update();
    player.draw();

    drawScore();
    checkTrashCollisions();
    checkBeerCollisions();
    checkSharkCollisions();

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
        obstaclesArrayTrash[i].y < player.y
        ||
       obstaclesArrayTrash[i].y <= player.y + player.height &&
      obstaclesArrayTrash[i].y + obstaclesArrayTrash[i].height > player.y + player.height
      )
    ) {
      score += 1;
      obstaclesArrayTrash.splice(i, 1);
    }
  }    
}

function checkBeerCollisions() {
  for (let i =0; i< obstaclesArrayBeer.length; i++) {
    if (
      (
        obstaclesArrayBeer[i].x + obstaclesArrayBeer[i].width >= player.x &&
        obstaclesArrayBeer[i].x < player.x
     ||
     obstaclesArrayBeer[i].x <= player.x + player.width &&
     obstaclesArrayBeer[i].x + obstaclesArrayBeer[i].width > player.x + player.width
      )
      &&
      (
        obstaclesArrayBeer[i].y + obstaclesArrayBeer[i].height >= player.y &&
        obstaclesArrayBeer[i].y < player.y
        ||
        obstaclesArrayBeer[i].y <= player.y + player.height &&
        obstaclesArrayBeer[i].y + obstaclesArrayBeer[i].height > player.y + player.height
      )
    ) {
      if(beerScore < 100){
        beerScore += 20;
        score += 20;
        console.log(beerScore)
      }
      
      obstaclesArrayBeer.splice(i, 1);
    }
  }    
}

function checkSharkCollisions() {
  for (let i =0; i< obstaclesArrayShark.length; i++) {
    if (
      (
        obstaclesArrayShark[i].x + obstaclesArrayShark[i].width >= player.x &&
        obstaclesArrayShark[i].x < player.x
     ||
     obstaclesArrayShark[i].x <= player.x + player.width &&
     obstaclesArrayShark[i].x + obstaclesArrayShark[i].width > player.x + player.width
      )
      &&
      (
        obstaclesArrayShark[i].y + obstaclesArrayShark[i].height >= player.y &&
        obstaclesArrayShark[i].y < player.y
        ||
        obstaclesArrayShark[i].y <= player.y + player.height &&
        obstaclesArrayShark[i].y + obstaclesArrayShark[i].height > player.y + player.height
      )
    ) {
       playerLost();
    }
  }    
}

function drawScore() {
  ctx.font = '50px Arial';
  ctx.fillStyle = 'Black';
  ctx.fillText('Score: ' + score , 1150, 50);
}

function startGameFromBegin() {
  startPage.classList.add('hide')
  gamePage.style.display = 'flex'
  letsPlay();
}

function playerLost() {
  gamePage.style.display = 'none'
  losePage.classList.remove('hide2')
}


startButton = document.getElementById('welcome-page-button');
loseButton = document.getElementById('lose-page-button');
startPage = document.getElementById('start-page');
gamePage = document.getElementById('game-board');
losePage = document.getElementById('lose-page');
startButton.addEventListener('click', startGameFromBegin);
loseButton.addEventListener('click', startGameFromBegin);