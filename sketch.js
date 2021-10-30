const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var bgImg;
var maxDrops=100;
var drops=[]



function preload(){
  bgImg=loadImage("snow3.jpg");
}



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
  if(frameCount%100===0){ 
    for(var i=0; i<maxDrops;i++){ 
    drops.push(new Drop(random(0,700),random(0,700),7,7)); 
  } 
}
 

}


function draw() {
  background(bgImg); 
  Engine.update(engine);
  for(var i=0; i<maxDrops;i++){ 
    drops[i].display(); 
    drops[i].update(); 

  }  
  drawSprites();
}