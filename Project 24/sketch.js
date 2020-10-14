
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle,circleBody;
var Ground;
var part1,part2,part3;
var body1,body2,body3;
var edge;
var dustbin,dustimage;

function preload()
{
	
	dustimage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	edges= createEdgeSprites();

	dustbin= createSprite(600,610,100,100);
	dustbin.addImage("dustbin", dustimage);
	dustbin.scale= 0.5;

	/*part1= createSprite(400,610,20,130);
	part1.shapeColor="green";

	part2= createSprite(220,220,200,20);
	part2.shapeColor="green";

	part3= createSprite(220,610,20,130);
	part3.shapeColor="green";*/

	edge= Bodies.rectangle(800,0,10,700);

	/*partBody1= Bodies.rectangle(490,10,20,100,{isStatic:true});
	World.add(world,partBody1);
	partBody2= Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,partBody2);
	partBody3= Bodies.rectangle(310,640,20,100,{isStatic:true});
	World.add(world,partBody3);*/

	body1= Bodies.rectangle(690,610,20,130,{isStatic:true});
	World.add(world,body1);

	body2=Bodies.rectangle(600,682,200,20,{isStatic:true});
	World.add(world,body2);

	body3=Bodies.rectangle(510,610,20,130,{isStatic:true});
	World.add(world,body3);

	 circle = new paper(50,500,30);
	 Ground= new ground(400,700,800,20);
	 //part1 = new dustbinPart(400,400,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255)

  /*	part1.x= body1.position.x;
	part2.x= body2.position.x;
	part3.x= body3.position.x;

	part1.y= body1.position.y;
	part2.y= body2.position.y;
	part3.y= body3.position.y;*/

	 circle.display();
	 Ground.display();

	 
  
	 keyPressed();
  drawSprites();
 
}


function keyPressed(){

	if (keyCode=== UP_ARROW){

		Matter.Body.applyForce(circle.body,circle.body.position,{x:85,y:-85});
	
	}

}
