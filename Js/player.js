const playerImg1 = new Image();
playerImg1.src = './Images/Diver-removebg-preview.png'
const playerImg2 = new Image();
playerImg2.src = './Images/drunk-diver1.png'
const playerImg3 = new Image();
playerImg3.src = './Images/drunk-diver2.png'
  

if (beerScore === 0){
    playerImg = playerImg1;
}

if (beerScore === 1){
    playerImg = playerImg2;
}

if (beerScore === 3){
    playerImg = playerImg3;
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1900;
canvas.height = 900;

class Player{
    constructor(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.width = 65;
        this.height = 160;
    }

    update(){
    const distanceOfX = this.x - mouse.x;
    const distanceOfY = this.y - mouse.y;
    if (mouse.x != this.x){
            this.x -= distanceOfX/30;
    }
    if (mouse.y != this.y){
            this.y -= distanceOfY/30;
    }
}

    draw(){
    
    if(mouse.click){

    ctx.lineWidth = 0.001;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    }
    ctx.fillStyle = "rgba(200, 0, 200, 0)"; 
    ctx.beginPath();
    ctx.rect(this.x, this.y, 65, 160);
    ctx.fill();
    ctx.closePath();

    ctx.drawImage(playerImg, this.x - this.height, this.y - this.width)
 }
}

