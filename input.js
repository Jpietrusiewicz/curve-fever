const KEY_LEFT_ARROW=37;
const KEY_RIGHT_ARROW=39;
const KEY_UP_ARROW=38;
const KEY_DOWN_ARROW=40;
const KEY_SPACE = 32

var keyHeldGas =false;
var keyHeldReverse =false;
var keyHeldLeft =false;
var keyHeldRight =false;


 var game = true;
function keyPreesed(evt){
    if(evt.keyCode==KEY_LEFT_ARROW){
        keyHeldLeft=true;
    }
    if(evt.keyCode==KEY_RIGHT_ARROW){
        keyHeldRight=true;
    }

    if(evt.keyCode==KEY_SPACE){
        if(game){
            game=false;
        }
        else{
            game = true;
        }
    }
    evt.preventDefault();
}

function keyReleased(evt){
    if(evt.keyCode==KEY_LEFT_ARROW){
        keyHeldLeft=false;
    }
    if(evt.keyCode==KEY_RIGHT_ARROW){
        keyHeldRight=false;
    }
}
