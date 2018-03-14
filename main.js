var canvas, canvasContext;


window.onload = function(){
    canvas = document.getElementById("gameCanvas");
    canvasContext=canvas.getContext("2d");
    var FPS =30;

    pointsClear();
    battlefieldUpdate();
    clearTableforTooYOungPoints();

    setInterval(updateAll,1000/FPS);

    document.addEventListener('keydown',keyPreesed);
    document.addEventListener('keyup', keyReleased);


}

function moveEverything(){
    snakeUpdate();
    if(checkColision(0)){
        battlefieldUpdate();
        console.log(snake[0].myBuffs.fast);
        checkBuffs(0);
        // generalBuffs.buffColected.kolo_dobreSzybko(0);
    }
    pointsUpdate();
}

function updateAll(){
    if(game){
      for(var a=0; a <=snake[0].myBuffs.fast;a++)
        {
          moveEverything();
          drawEverything();
        }
  }
}

function drawEverything(){
    drawSnakes();
}
var holeHelp = true;
function drawSnakes(){
    if(snake[0].toCheckAndDrow){
        paintCircle(snake[0].x,snake[0].y,snake[0].radius,snake[0].color);
        paintCircle(snake[0].prevX,snake[0].prevY,snake[0].radius,snake[0].color);
        holeHelp=true;

    }
    else
    {
        if(!holeHelp)
            paintCircle(snake[0].prevX,snake[0].prevY,snake[0].radius,"black");
        else
            paintCircle(snake[0].prevX,snake[0].prevY,snake[0].radius,snake[0].color);

        holeHelp=false;
    }
    paintCircle(snake[0].x,snake[0].y,snake[0].radius-2,"yellow");
}
