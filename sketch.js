
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy

function preload()
{
	boyImage = loadImage("sprites/boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,630)
	boy.addImage (boyImage)
	boy.scale=0.08

	ground = new Ground(400,height,800,10)

	mango = new Mango(400,400,30)

	stone = new Stone(170, 610, 40)

	sling = new Sling(stone.body,{x:170, y:610});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200,200,200);
  
    drawSprites();
	mango.display();
	stone.display();
	sling.display();

}


function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	sling.fly();
}
