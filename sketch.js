var carlos;
var esquare;
var etriangle;
var ground;
var platform1;
var platform2;


function preload()
{
 Esquare = loadImage("RedTriangle.png")
}

function setup() 
{
  createCanvas(windowWidth,windowHeight);

  carlos = createSprite(500,643,50,50);
  carlos.shapeColor = "cyan"

 // esquare = createSprite(500,200,400,20);

  etriangle = createSprite(500,300,400,20);
  etriangle.addImage(Esquare);
  etriangle.scale = 0.1;

  ground = createSprite(width/2,height-20,1100,500)
  ground.shapeColor = "white";

  platform1 = createSprite(400,400,200,40);
  platform2 = createSprite(900,400,200,40)
  platform1.shapeColor = "white"
  platform2.shapeColor = "white"
}

function draw() 
{
  background("black")
  drawSprites()

  if(keyDown("space")){
    carlos.velocityY = -10
  }
  if(keyDown(LEFT_ARROW)){
    carlos.x = carlos.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    carlos.x = carlos.x+5
  }
  etriangle.x = carlos.x-100
  etriangle.y = carlos.y-10
  carlos.velocityY = carlos.velocityY+0.8
  carlos.collide(ground)
  carlos.collide(platform1)
  carlos.collide(platform2)
  
}

