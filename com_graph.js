
function paint(startX, startY, pWidth, pHeight, color){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(startX,startY,pWidth,pHeight);
}

function paintCircle(centerX, centerY,bradius, color){
    canvasContext.fillStyle=color;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY,bradius,0,2*Math.PI,true);
    canvasContext.fill();
}