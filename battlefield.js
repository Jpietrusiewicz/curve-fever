const consoleWidth =150;
const consoleBar = 3;
const POINTS_WIDTH = 800;
const POINTS_HEIGHT =600;
//battlefield 640x440

var pointsTab=new Array(POINTS_HEIGHT*POINTS_WIDTH);
// 10-50 snakes color(1 red 2 orange 3 pink 4 grey 5 green)y
//60< buffs635/70 5b;uffs border
//70 < buffs border
//100 border




function pointsClear(){
    for(var a=0; a < POINTS_HEIGHT*POINTS_WIDTH;a++){
        pointsTab[a]=0;
    }

        for(var a=consoleWidth;a < canvas.width;a++){
            pointsTab[a +1]=100;
            pointsTab[(canvas.height-1)*POINTS_WIDTH + a]=100;

        }
        for(var hei = 0 ; hei < canvas.height;hei++){
            pointsTab[(canvas.width-1)+ hei*POINTS_WIDTH]=100;
            pointsTab[(consoleWidth +1)+ hei*POINTS_WIDTH]=100;
        }

}

function buffsPointsUpdate(buffnumber){
  var buffsPointHelper;
  var xToBe = Math.floor(Math.random()*635) + 5 +150;
  var yToBe = Math.floor(Math.random()*550) + 5 ;
  pointsTab[yToBe*POINTS_WIDTH  + xToBe]= 60+buffnumber;
  for(var angl= 0; angl <2*Math.PI;angl+=Math.PI/40){
      buffsPointHelper=Math.floor(Math.cos(angl)*(20))+Math.floor(xToBe)+
      POINTS_WIDTH*(Math.floor(yToBe) + Math.floor(Math.sin(angl)*(20)));
      if(pointsTab[buffsPointHelper]==0){
        pointsTab[buffsPointHelper]=70+buffnumber;
      }
  }
  canvasContext.drawImage(generalBuffs.graph[buffnumber],xToBe-20,yToBe-20);
}

var pointsHelper;
var pointsYoungCounter = 0;


function zeroLastTable(snakeNumber){
    for(var a=0 ;a < pointsYoungCounter;a++){
        snake[snakeNumber].tooYoungPoints[(snake[snakeNumber].tooYoungPointsUpdate())]=0;
    }
}

function pointsUpdate(){

    for(var i =0; i <(snake[0].tooYoungPointsUpdate())-1;i++)
    {    for(var a = 0; a < pointsYoungCounter;a++ ){
            snake[0].tooYoungPoints[i][a] = snake[0].tooYoungPoints[i+1][a];
        }
    }
    zeroLastTable(0);
    for(var pointsToGrow = 0 ; pointsToGrow < pointsYoungCounter;pointsToGrow++){
        if(pointsTab[snake[0].tooYoungPoints[0][pointsToGrow]]==0){
            pointsTab[snake[0].tooYoungPoints[0][pointsToGrow]]=1;
        }
    }
    pointsYoungCounter = 0;
     if(snake[0].toCheckAndDrow){
        pointsTab[Math.floor(snake[0].x)+POINTS_WIDTH*(Math.floor(snake[0].y))]=10 + snake[0].radius;
    for(var angl= -(Math.PI/2); angl <Math.PI/2;angl+=Math.PI/(snake[0].radius*2)){
        pointsHelper=Math.floor(Math.cos(angl + snake[0].angle))*(snake[0].radius)+Math.floor(snake[0].x)+
        POINTS_WIDTH*(Math.floor(snake[0].y) + Math.floor(Math.sin(angl+ snake[0].angle)*(snake[0].radius)));
    if(pointsTab[pointsHelper]==0){

        pointsYoungCounter++;
        snake[0].tooYoungPoints[(snake[0].tooYoungPointsUpdate()) -1][pointsYoungCounter-1] = pointsHelper;

    }
    }

    }
}
function checkColision(snakeNumber){
    var temp;
    var wasBufNotfChecked=true;
    if(snake[snakeNumber].toCheckAndDrow){
            for(var angl= -(Math.PI/2) ; angl <Math.PI/2;angl+=Math.PI/(snake[snakeNumber].radius*2)){
                temp = Math.floor(snake[snakeNumber].x) + Math.floor(Math.cos(snake[snakeNumber].angle+angl)*(snake[snakeNumber].radius-1))
                + (Math.floor((Math.sin(snake[snakeNumber].angle+angl))*(snake[snakeNumber].radius-1)+snake[snakeNumber].y))*POINTS_WIDTH ;
                if((pointsTab[temp]==100||(pointsTab[temp]<70&&pointsTab[temp]!=0))){
                    console.log('wyjebalo sie ' + angl)
                    game=false;
                    return true;
                }else {
                  if(pointsTab[temp]>=70&&pointsTab[temp]<80&&wasBufNotfChecked){
                    console.log("zebrano: "+(pointsTab[temp]-70));
                    switch (pointsTab[temp]-70) {
                      case 0:
                        generalBuffs.buffColected.kolo_dobreCienko(snakeNumber);
                        break;
                      case 1:
                      generalBuffs.buffColected.kolo_dobreSzybko(snakeNumber);
                        break;
                      case 2:
                        generalBuffs.buffColected.kolo_wiecejkol();
                        break;
                      case 3:
                        generalBuffs.buffColected.kolo_zleGrubo(snakeNumber);
                        break;
                      case 4:
                        generalBuffs.buffColected.kolo_zleOdwrocenie(snakeNumber);
                        break;
                      case 5:
                        generalBuffs.buffColected.kolo_zleSzybko(snakeNumber);
                        break;
                      default:
                        console.log("co to za buff?");
                    };
                    return true;
                  }
                }
            }
    }
    return false;
}




function battlefieldBorders(){
    paint(consoleWidth,0,consoleBar, canvas.height,"yellow");
    paint(canvas.width-consoleBar, 0,consoleBar, canvas.height,"yellow");
    paint(consoleWidth, 0,canvas.width, consoleBar,"yellow");
    paint(consoleWidth , canvas.height - consoleBar,canvas.width, consoleBar,"yellow");

}

function battlefieldUpdate(){
    paint(0,0,canvas.width, canvas.height,"black");
    battlefieldBorders();
    for(var a=0; a <POINTS_HEIGHT;a++){
        for(var i = 0 ;i<POINTS_WIDTH;i++){
            if(pointsTab[i+a*POINTS_WIDTH]>10&&pointsTab[i+a*POINTS_WIDTH]<20){ //
                paintCircle(i, a,pointsTab[i+a*POINTS_WIDTH] - 10,"blue");
            }
            if(pointsTab[i +a*POINTS_WIDTH]>=60&&pointsTab[i +a*POINTS_WIDTH]<70){
              canvasContext.drawImage(generalBuffs.graph[pointsTab[i +a*POINTS_WIDTH]-60],i-20,a-20);
            }

        }
    }

}
