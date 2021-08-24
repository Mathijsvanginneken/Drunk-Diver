const sharkImg1 = document.createElement('img');
sharkImg1.src = './Images/Shark.png';
const sharkImg2 = document.createElement('img');
sharkImg2.src = './Images/drunk-shark1.png';
const sharkImg3 = document.createElement('img');
sharkImg3.src = './Images/drunk-shark2.png';

if (beerScore === 0){
    sharkImg = sharkImg1;
}

if (beerScore === 2){
    sharkImg = sharkImg2;
}

if (beerScore === 4){
    sharkImg = sharkImg3;
}

class ObstacleShark {
	constructor(canvasContext, positionX, positionY, width, height, speed) {
	    this.ctx = canvasContext,
		this.x = positionX,
		this.y = positionY,
		this.width = width,
		this.height = height,
        this.speed = speed
	}

	draw() {
        this.ctx.drawImage(sharkImg, this.x, this.y, this.width, this.height);
	}

	move() {
		this.x += this.speed;
	}
}