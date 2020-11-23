
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,targetCenter,targetCenter1,targetCenter2;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,390,1200,20)
	paper = new Paper(50,200,30,30)

	targetCenter = new Target(600,370,180,30)
	targetCenter1 = new Target(500,290,30,100)
	targetCenter2 = new Target(680,290,30,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paper.display();
  targetCenter.display();
  targetCenter1.display();
  targetCenter2.display();
}


function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:95})
}


}
