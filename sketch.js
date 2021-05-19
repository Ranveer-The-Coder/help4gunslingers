const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var database;
var back_img, back_img2;
var gameState =0;
var playerCount = 0;
var allPlayers;
var wallImg;

var player, form,game;
var player1,player2;
var players;
var player1Shooting, player2Shooting ;
var wall1,wall2,wall3,wall4,wall5
var engine,world;
var edges;



function preload(){

  back_img = loadImage("background.png")
  player1Shooting = loadImage("player1Shooting.png")
  player2Shooting = loadImage("player2Shooting(final).png")
   wallImg = loadImage("wall.png")
 
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world=engine.world;
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start(); 

//edges = createEdgeSprite()

wall1 = createSprite(300,360,250,250)
wall1.addImage(wallImg)



  
}

function draw() {
  background(back_img);

  Engine.update(engine);

  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
       
     
   }
   if (gameState === 2) {
    
     game.end();
   }
  

   
}