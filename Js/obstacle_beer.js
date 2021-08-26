const beerImg = document.createElement('img');
beerImg.src = './Images/gold_tankard.png';

let beerScore = 0;

class ObstacleBeer {
	constructor(canvasContext, positionX, positionY, width, height, speed) {
	    this.ctx = canvasContext,
		this.x = positionX,
		this.y = positionY,
		this.width = width,
		this.height = height,
        this.speed = speed
	}

	draw() {
        this.ctx.drawImage(beerImg, this.x, this.y, this.width, this.height);
	}

	move() {
		this.y += this.speed;
	}
}

