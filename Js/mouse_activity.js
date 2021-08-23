let canvasPosition = canvas.getBoundingClientRect();

console.log(canvasPosition)

const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}
canvas.addEventListener('mousedown', function(event){
    mouse.click = true;
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;

console.log(mouse.x, mouse.y);

});