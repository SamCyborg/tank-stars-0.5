//Create variables here
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var tank1;

function preload()
{
	//load images here
}

function setup() {
	createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  tank1 = new Tank(100,300,100,100);
}


function draw() {  
  background(0);
  Engine.update(engine);
  tank1.display();

  drawSprites();
  //add styles here

}



