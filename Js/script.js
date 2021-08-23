const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1900;
canvas.height = 900;

let score = 0;
let gameFrame = 0;

const playerImg = new Image();
playerImg.src = './Images/Diver-removebg.png'

class Player{
    constructor(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.frame = 0;
    }

    update(){
    const distanceOfX = this.x - mouse.x;

    console.log(canvas.width, mouse.x)

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
    ctx.drawImage(playerImg, this.x - 170, this.y - 80)
 }
}

const player = new Player();
