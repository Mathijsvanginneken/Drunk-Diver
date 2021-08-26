const sharkImg1 = document.createElement('img');
sharkImg1.src = './Images/Shark.png';
const sharkImg2 = document.createElement('img');
sharkImg2.src = './Images/drunk-shark1.png';
const sharkImg3 = document.createElement('img');
sharkImg3.src = './Images/drunk-shark2.png';

class ObstacleShark {
	constructor(canvasContext, positionX, positionY, width, height, speed) {
	    this.ctx = canvasContext;
		this.x = positionX;
		this.y = positionY;
		this.width = width;
		this.height = height;
        this.speedX = speed;
        this.speedY = (speed * ((Math.random() * 2) -1));

	}

	draw() {
		
if (beerScore <= 40){
this.ctx.drawImage(sharkImg1, this.x-150, this.y, this.width, this.height);
} else if (beerScore <= 70){
this.ctx.drawImage(sharkImg2, this.x-150, this.y, this.width, this.height);
} else if (beerScore <= 100){
this.ctx.drawImage(sharkImg3, this.x-150, this.y, this.width, this.height);
}
}

	move() {
		this.x += this.speedX;
		this.y += this.speedY
	}
}