function checkBuffs(snakeNumber){
    if((snake[snakeNumber].myBuffs.fat>0)&&(snake[snakeNumber].myBuffs.fatLenght==0)){
        buffsActivators.makeHimFat(snakeNumber);
    }
    if(((snake[snakeNumber].myBuffs.fast>0)&&snake[snakeNumber].myBuffs.fastLenght==0)){
        buffsActivators.makeHimFast(snakeNumber);
    }
    if(((snake[snakeNumber].myBuffs.thin)&&snake[snakeNumber].myBuffs.thinLenght==0)){
        buffsActivators.makeHimThin(snakeNumber);
    }
    if(snake[snakeNumber].myBuffs.reverse&&snake[snakeNumber].myBuffs.reverseLenght==0){
      buffsActivators.makeHimReversed(snakeNumber);
    }
}

var buffsActivators = new makeBuffsActivators();

function makeBuffsActivators(){

    this.makeHimFat= function (snakeNumber){
        snake[snakeNumber].radius +=3;
    }
    this.makeHimFast = function(snakeNumber){
         console.log("jazda " + snake[snakeNumber].speed);
    }
    this.makeHimThin = function(snakeNumber){
        snake[snakeNumber].radius =2;
    }
    this.makeHimReversed = function (snakeNumber){
      console.log("steruj na odwrot pls");
    }
}
