var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1,wall2,wall3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 90,10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	
	helicopterSprite=createSprite(width/2, 200,10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;

	wall1=createSprite(400,650,200,20,{isStatic:true});
	wall1.shapeColor="red";
	World.add(world,wall1);

	wall2=createSprite(500,610,20,100,{isStatic:true});
	wall2.shapeColor="red";
	World.add(world,wall2);

	wall3=createSprite(300,610,20,100,{isStatic:true});
	wall3.shapeColor="red";
	World.add(world,wall3);

	

	 packageBody = Bodies.circle(width/2 ,200 ,5);

	 	
   

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	
		
  
}


function draw() {
  rectMode(CENTER);
  //Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  
  
  
  
    drawSprites();
 
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		packageBody = Bodies.circle(width/2 ,200 ,5,{isStatic:false});
		World.add(world,packageBody);
	}

	}

