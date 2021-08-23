const backgroundImg = document.createElement('img');
backgroundImg.src = './Images/sea_background.png';

class Background {
    constructor(canvasContext){
        this.ctx = canvasContext,
        this.x = 0,
        this.y = 0,
        this.width = 1900,
        this.height = 900;
    }

    draw(){
        this.ctx.drawImage(backgroundImg, this.x, this.y, this.width, this.height);
    }


}