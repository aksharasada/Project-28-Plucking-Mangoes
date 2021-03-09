
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1050, 580);
	ground = new Ground(width/2, 600, width, 40);

	mango1 = new Mango(1100, 160, 30);
	mango2 = new Mango(1100, 300, 30);
	mango3 = new Mango(1150, 280, 30);
	mango4 = new Mango(1000, 240, 30);
	mango5 = new Mango(1050, 200, 30);

	stone = new Stone(235, 415, 30);

	slingshot = new Slingshot(stone.body,{x : 235, y : 415});
	//Create the Bodies Here.
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  tree.display();
  ground.display();

  image(boy ,200,340,200,300);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
   
  slingshot.display();

  stone.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}


function mouseReleased(){
	slingshot.fly();
}


function detectCollision(stone, mango){
	mangoPos = mango.body.position;
	stonePos = stone.body.position;

	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	if(distance <= mango.radius + stone.radius){
		Matter.Body.setStatic(mango.body, false);
	}
	
}