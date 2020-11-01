
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(100,690,4000,15)
	tree=new Tree(600,400,400,600)
	boy=new Boy(100,610,100,300);
	stone=new Stone(70,544,15)
	mango1=new Mango(620,200,15);
	mango2=new Mango(480,280,15);
	mango3=new Mango(580,250,15);
	mango4=new Mango(680,300,15);
	mango5=new Mango(780,300,15);
	mango6=new Mango(500,350,15);
	mango7=new Mango(540,300,15);
	sling=new SlingShot(stone.body,{x:80,y:540});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightgrey');
  
  mouseDragged();
  mouseReleased();
  detectollision();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);

  drawSprites();

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  sling.display();
  
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function detectollision(stone,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position
  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(mango.r+stone.r)
  {
    Matter.Body.setStatic(mango.body,false);
  }
  }


