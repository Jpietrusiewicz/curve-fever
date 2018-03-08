function buffs(){
    this.number = 3;
    this.graph = [document.createElement("img"),document.createElement("img"),document.createElement("img"),
    document.createElement("img"),document.createElement("img"),document.createElement("img")];
    //this.effects = [ kolo_dobreCienko(playerNumber) ,kolo_dobreSzybko(playerNumber),kolo_wiecejkol (playerNumber)]
    //,kolo_zleOdwrocenie (playerNumber),(playerNumber)
}




var myBuffs = new buffs;
function loadImages(){
    myBuffs.graph[0].src =  "kolo_dobreCienko.png";
    myBuffs.graph[1].src =  "kolo_dobreSzybko.png";
    myBuffs.graph[2].src =  "kolo_wiecejkol.png";
    myBuffs.graph[3].src =  "kolo_zleGrubo.png";
    myBuffs.graph[4].src =  "kolo_zleOdwrocenie.png";
    myBuffs.graph[5].src =  "kolo_zleSzybko.png";
    console.log("doneload");
}