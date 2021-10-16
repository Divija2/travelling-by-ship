var ship;
var sea;



function preload(){
seaImg=loadImage("sea.png");

shipImg1=loadImage("ship-1.png");
shipImg2=loadAnimation("ship-2.png");
shipImg3=loadAnimation("ship-3.png");
shipImg4=loadAnimation("ship-4.png");


}

function setup(){
  createCanvas(400,400);
ship=createSprite(50,200,20,50);
ship.addAnimation(ship);



 
}

function draw() {
  background(seaImg);
 
 drawSprites();
}