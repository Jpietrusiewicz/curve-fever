function checkBuffs(snakeNumber){
    if((snake[snakeNumber].myBuffs.fat>0)&&(snake[snakeNumber].myBuffs.fatLenght==0)){
        buffsActivators.makeHimFat(snakeNumber);
    }
    if(((snake[snakeNumber].myBuffs.fast>0)&&snake[snakeNumber].myBuffs.fastLenght==0)){
        buffsActivators.makeHimFast(snakeNumber);
        console.log("spid"+ snake[snakeNumber].speed);
    }
}

var buffsActivators = new makeBuffsActivators();

function makeBuffsActivators(){

    this.makeHimFat= function (snakeNumber){
        snake[snakeNumber].radius +=3;
    }
    this.makeHimFast = function(snakeNumber){
         //snake[snakeNumber].speed +=1;
         console.log("jazda" + snake[snakeNumber].speed);
    }
}
