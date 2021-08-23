const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1900;
canvas.height = 900;

let score = 0;
let gameFrame = 0;


class Player{
    constructor(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.radius = 50;
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

    ctx.lineWidth = 0.1;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    }
    ctx.fillStyle = 'black'  
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.fillRect(this.x, this.y, this.radius, 10);
 }
}

const player = new Player();
