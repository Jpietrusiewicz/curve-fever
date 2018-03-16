function MakeBuffs(){ // zrob statycznie
    this.number = 3;
    this.graph = [document.createElement("img"),document.createElement("img"),document.createElement("img"),
    document.createElement("img"),document.createElement("img"),document.createElement("img")];
    this.timeToNext = 100;
    this.timeCurrent = 0;
    this.buffsNumber = 6;
    this.buffColected = new makeBuffsFunction()
    this.genBuffs= function (){
      if(++generalBuffs.timeCurrent == generalBuffs.timeToNext){
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
