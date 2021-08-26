const trashImg1 = document.createElement('img');
trashImg1.src = './Images/blue-boot.png';
const trashImg2 = document.createElement('img');
trashImg2.src = './Images/brown-boot.png';
const trashImg3 = document.createElement('img');
trashImg3.src = './Images/license-plate-white-letters.png';
const trashImg4 = document.createElement('img');
trashImg4.src = './Images/license-plate-yellow-letters.png';
const trashImg5 = document.createElement('img');
trashImg5.src = './Images/rusty-tin.png';
const trashImg6 = document.createElement('img');
trashImg6.src = './Images/tin-one.png';
const trashImg7 = document.createElement('img');
trashImg7.src = './Images/tire-left.png';
const trashImg8 = document.createElement('img');
trashImg8.src = './Images/tire-right.png';

const trashImg12 = document.createElement('img');
trashImg12.src = './Images/brown-boot-drunk1.png';
const trashImg10 = document.createElement('img');
trashImg10.src = './Images/license-plate-yellow-drunk1.png';
const trashImg9 = document.createElement('img');
trashImg9.src = './Images/blue-boot-drunk1.png';
const trashImg11 = document.createElement('img');
trashImg11.src = './Images/license-plate-white-drunk1.png';
const trashImg13 = document.createElement('img');
trashImg13.src = './Images/rusty-tin-drunk1.png';
const trashImg14 = document.createElement('img');
trashImg14.src = './Images/tin-one-drunk1.png';
const trashImg15 = document.createElement('img');
trashImg15.src = './Images/tire-left-drunk1.png';
const trashImg16 = document.createElement('img');
trashImg16.src = './Images/tire-right-drunk1.png';

const trashImg17 = document.createElement('img');
trashImg17.src = './Images/blue-boot-drunk2.png';
const trashImg18 = document.createElement('img');
trashImg18.src = './Images/brown-boot-drunk2.png';
const trashImg19 = document.createElement('img');
trashImg19.src = './Images/license-plate-white-drunk2.png';
const trashImg20 = document.createElement('img');
trashImg20.src = './Images/license-plate-yellow-drunk2.png';
const trashImg21 = document.createElement('img');
trashImg21.src = './Images/rusty-tin-drunk2.png';
const trashImg22 = document.createElement('img');
trashImg22.src = './Images/tin-one-drunk2.png';
const trashImg23 = document.createElement('img');
trashImg23.src = './Images/tire-left-drunk2.png';
const trashImg24 = document.createElement('img');
trashImg24.src = './Images/tire-right-drunk2.png';

let trashTypes = [trashImg1, trashImg2, trashImg3, trashImg4, trashImg5, trashImg6, trashImg7, trashImg8]   
let trashTypesDrunkLevelOne = [trashImg9, trashImg10, trashImg11, trashImg12,  trashImg13, trashImg14, trashImg15, trashImg16]    
let trashTypesDrunkLevelTwo = [trashImg17, trashImg18, trashImg19, trashImg20, trashImg21, trashImg22, trashImg23, trashImg24]    

class ObstacleTrash {
	constructor(canvasContext, positionX, positionY, width, height, speed) {
	    this.ctx = canvasContext,
		this.x = positionX,
		this.y = positionY,
		this.width = width,
		this.height = height,
        this.speed = speed
		this.type1 = trashTypes[Math.floor(Math.random() * trashTypes.length)];
		this.type2 = trashTypesDrunkLevelOne[Math.floor(Math.random() * trashTypesDrunkLevelOne.length)];
		this.type3 = trashTypesDrunkLevelTwo[Math.floor(Math.random() * trashTypesDrunkLevelTwo.length)];
	}

	draw() {
		
if (beerScore <= 2){
this.ctx.drawImage(this.type1, this.x, this.y, this.width, this.height);
} else if (beerScore <= 4){
this.ctx.drawImage(this.type2, this.x, this.y, this.width, this.height);
} else if (beerScore <= 100){
this.ctx.drawImage(this.type3, this.x, this.y, this.width, this.height);
}
}

	move() {
		this.y += this.speed;
	}
}

