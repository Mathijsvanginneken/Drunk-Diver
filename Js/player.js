const playerImg1 = new Image();
playerImg1.src = './Images/player1.png'
const playerImg2 = new Image();
playerImg2.src = './Images/player2.png'
const playerImg3 = new Image();
playerImg3.src = './Images/player3.png'
  
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 920;
canvas.width = 1900;


class Player{
    constructor(){
        this.x = canvas.width;
        this.y = canvas.height;
        this.width = 80;
        this.height = 170;
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
    ctx.fillStyle = "rgba(0, 0, 200, 0)";  
    ctx.beginPath();
    ctx.rect(this.x, this.y, 65, 160);
    ctx.fill();
    ctx.closePath();

    if (beerScore <= 40){
        ctx.drawImage(playerImg1, this.x - this.height, this.y - this.width);
        } else if (beerScore <= 70){
        ctx.drawImage(playerImg2, this.x - this.height, this.y - this.width);
        } else if (beerScore <= 100){
        ctx.drawImage(playerImg3, this.x - this.height, this.y - this.width);
        }
 }
}

