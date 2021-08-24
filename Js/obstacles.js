/*const trashImg1 = document.createElement('img');
trashImg1.src = './Images/blue-boot.png';
const trashImg3 = document.createElement('img');
trashImg3.src = './Images/brown-boot.png';
const trashImg6 = document.createElement('img');
trashImg6.src = './Images/license-plate-white-letters.png';
const trashImg7 = document.createElement('img');
trashImg7.src = './Images/license-plate-yellow-letters.png';
const trashImg8 = document.createElement('img');
trashImg8.src = './Images/rusty-tin.png';
const trashImg9 = document.createElement('img');
trashImg9.src = './Images/tin-one.png';
const trashImg10 = document.createElement('img');
trashImg10.src = './Images/tire-left.png';
const trashImg11 = document.createElement('img');
trashImg11.src = './Images/tire-right.png';

let trashTypes = [trashImg1, trashImg3, trashImg6, trashImg7, trashImg8, trashImg9, trashImg10, trashImg11]

class ObstacleTrash {
	constructor(canvasContext, positionX, positionY, width, height, speed) {
	    this.ctx = canvasContext,
		this.x = positionX,
		this.y = positionY,
		this.width = width,
		this.height = height,
        this.speed = speed,
        this.type = trashTypes[Math.floor(Math.random() * trashTypes.length)]
	}

	draw() {
        this.ctx.drawImage(this.type, this.x, this.y, this.width, this.height);
	}

	move() {
		this.y += this.speed;
	}
}

const beerImg = document.createElement('img');
beerImg.src = './Images/gold_tankard.png';

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

const sharkImg = document.createElement('img');
sharkImg.src = './Images/Shark.png';

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
}*/