const backgroundImg = document.createElement('img');
backgroundImg.src = './Images/background2.png';
const backgroundImg2 = document.createElement('img');
backgroundImg2.src = './Images/background2Copy.png';

class Background {
    constructor(canvasContext){
        this.ctx = canvasContext,
        this.x = 0,
        this.y = 0,
        this.width = 1900,
        this.height = 900;
    }

    draw(){
        if (beerScore <= 5){
            this.ctx.drawImage(backgroundImg, this.x, this.y, this.width, this.height);
            } else if (beerScore >= 6){
            this.ctx.drawImage(backgroundImg2, this.x, this.y, this.width, this.height);
    }
}
}