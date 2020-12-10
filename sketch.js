var canvas, backgroundImage;
var car1,car2,car3,car4,cars;
var gamestate = 0;
var playercount;

var database;

var form, player, game;

var allPlayers;
function preload(){
  startbg = loadImage("images/startbg.png")
  backgroundImg = loadImage("images/background.jpg")
  car1Img = loadImage("car1.png")
  car2Img = loadImage("car2.png")
  car3Img = loadImage("car3.png")
  car4Img = loadImage("car4.png")
  groundImg = loadImage("ground.png")
  TrackImg = loadImage("track.jpg")
}

function setup(){
  canvas = createCanvas(windowWidth-20,windowHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  background(0)
  if(playercount===4){
    game.update(1);
   }
  if(gamestate===1){
    clear()
    game.play();
  }
  if(gamestate ===0){
  background(startbg)
  }
  /*else if(gamestate===1){
    background(backgroundImg)
  }*/
  if(gamestate===2){
    game.end();
  }
  drawSprites();
}
