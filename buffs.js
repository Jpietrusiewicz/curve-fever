function MakeBuffs(){ // zrob statycznie
    this.number = 3;
    this.graph = [document.createElement("img"),document.createElement("img"),document.createElement("img"),
    document.createElement("img"),document.createElement("img"),document.createElement("img")];
    this.timeToNext = 200;
    this.timeCurrent = 0;
    this.buffsNumber = 6;
    this.buffColected = new makeBuffsFunction()
    this.genBuffs= function (){
      if(++generalBuffs.timeCurrent >generalBuffs.timeToNext){
          let whichBuff =Math.floor(Math.random()*6);
          buffsPointsUpdate(whichBuff);
          generalBuffs.timeCurrent=0;
        }
    }
}

var generalBuffs = new MakeBuffs();


var players = 1;




function makeBuffsFunction()
{
    this.kolo_dobreCienko = function (snakeNumber){
      snake[snakeNumber].myBuffs.thin = true;
    }

    this.kolo_dobreSzybko= function (snakeNumber){
      if(snake[snakeNumber].myBuffs.fast<4)
        snake[snakeNumber].myBuffs.fast++;
    }
    this.kolo_wiecejkol= function (){
        generalBuffs.timeToNext=Math.floor(generalBuffs.timeToNext/2);
    }
    this.kolo_zleOdwrocenie= function (snakeNumber){
        for(var a =0 ; a < players;a ++){
            if(a!=snakeNumber){
                snake[a].myBuffs.reverse = true;
            }
        }
    }
    this.kolo_zleSzybko= function (snakeNumber){

        for(var a =0 ; a < players;a ++){
            if(a!=snakeNumber){
                snake[a].myBuffs.fast = true;
            }
        }
    }
    this.kolo_zleGrubo=function (snakeNumber){
        for(var a =0; a < players;a++){
        if(snakeNumber!=a){
                snake[a].myBuffs.fat++;
            }
        }
    }
}
var BuffCleaner = new buffCleaner();
function BuffCleaner(){ //1)wypierdalanie punktow 2) update punktow
  this.distance = function(index1, index2){
    leftX = index1%POINTS_WIDTH;
    leftY = Math.floor(index1/POINTS_HEIGHT)
    righX = index2%POINTS_WIDTH;
    rightY = Math.floor(index2/POINTS_HEIGHT)
    if((Math.floor(Math.sqrt( pow(leftX-righX,2)+ pow(leftY-rightY))))<=23){
      return true;
    }
    return false;
  }
  this.buffsPointsTable = new Array(6);
  buffsPointsTable.forEach(new Array());
  this.cleanBuffsPoints = function (xToClear,yToClear) {
    pointsTab[yToClear*POINTS_WIDTH  + xToClear]= 0;
    for(var angl= 0; angl <2*Math.PI;angl+=Math.PI/40){
        buffsPointHelper=Math.floor(Math.cos(angl)*(20))+Math.floor(xToClear)+
        POINTS_WIDTH*(Math.floor(yToClear) + Math.floor(Math.sin(angl)*(20)));
        if(pointsTab[buffsPointHelper]>=70){
          pointsTab[buffsPointHelper]=0;
        }
    }
  }
  this.clearTableOfBuffPoints = function(buffNumber,index){
    buffsPointsTable[buffnumber].splice(index,1);
  }
  this.updateTableOfBuffPoints = function(buffNumber, index){
    buffsPointsTable[buffNumber].push(index);
  }
}
