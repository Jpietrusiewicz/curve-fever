const radius=3;
const holeToLenght = 200;
const holeLenght =radius*2;

function makeSnake(color){
    this.x=Math.random()*(800 - consoleWidth - 40) + consoleWidth + 20;
    this.y=Math.random()*(600 - 40) + 20;
    this.radius = radius;
    this.angle = Math.random()*2*Math.PI;
    this.speed =3;
    this.radSpeed =0.1;
    this.color = color;
    this.isReversed= false;
    this.prevX=0;
    this.prevY=0;
    // this.prevPrevX=0;
    // this.prevPrevY=0;
    this.lenghtToHole=Math.floor(Math.random()*(holeToLenght/2));
    this.lenghtHole =0;
    this.isAlive=true;
    this.toCheckAndDrow = true;


    this.tooYoungPoints =[new  Array(10),new  Array(10),new  Array(10),new  Array(10),new  Array(10),new  Array(10),new  Array(10),new  Array(10),new  Array(10)];
    this.tooYoungPointsCounter =1;
    this.tooYoungPointsUpdate = function (){
        switch (this.radius){
            case 3:
                return 1;
            case 6:
                return 3;
            case 9:
                return 9;
            case 12:
                return 4;
        }
        return 5;
    }



    //bufs
    this.myBuffs = new makeSnakeBuffs();

    }

function clearTableforTooYOungPoints(){
    for(var a = 0;a < 5;a ++){
        for(var i=0;i < 10;i++){
            snake[0].tooYoungPoints[a][i]=0;
        }
    }
}


function makeSnakeBuffs(){
            this.thin = false;
            this.thinLenght =0;

            this.fast = 0;
            this.fastLenght =0;

            this.reverse = false;
            this.reverseLenght = 0;

            this.fat = 0;
            this.fatLenght = 0;

}

var snake = [ new makeSnake("red")];


function updateAngle(){
    if(keyHeldLeft){

        snake[0].angle-=snake[0].radSpeed;
    }
    if(keyHeldRight){
        snake[0].angle+=snake[0].radSpeed;
    }

}
function snakeUpdate(speed){
    if(speed%2==0)
    {
      updateAngle();
    }
    moveSnake();
    snakeUpdateHole();

}

function snakeUpdateHole(){


    if(snake[0].toCheckAndDrow){
        snake[0].lenghtToHole++;

        if(snake[0].lenghtToHole==1){
            battlefieldUpdate();
        }

       if(snake[0].lenghtToHole==holeToLenght){
             snake[0].lenghtToHole=0;
             snake[0].toCheckAndDrow=false;
        }
    }
    else{
        snake[0].lenghtHole++;
        if(snake[0].lenghtHole==holeLenght){
        snake[0].lenghtHole=0;
        snake[0].toCheckAndDrow=true;
        battlefieldUpdate();
        }
    }
}
function moveSnake(){


    snake[0].prevX=snake[0].x;
    snake[0].prevY=snake[0].y;
    snake[0].x+=Math.cos(snake[0].angle)*snake[0].speed;
    snake[0].y+=Math.sin(snake[0].angle)*snake[0].speed;
}
