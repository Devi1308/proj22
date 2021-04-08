var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var hand;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(400, 400);

	// fairyVoice.play();

	fairy = createSprite(90,185,200,20);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;

	star = createSprite(360,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	hand=createSprite(195,185,5,5);
   hand.shapeColor="blue";
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  /*star.x= starBody.position.x ;
  star.y= starBody.position.y;*/

  

  fairy.depth = star.depth;
  star.depth = star.depth+1;

  hand.visible=false;

 // fairy.debug=true;

  //fairy.collide();
  if (hand.isTouching(star)){
	 // star.velocityY=0;
	  fairy.velocityX=0;
      fairyVoice.play();
    Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode===LEFT_ARROW){
		fairy.velocityX=-3;
		  hand.velocityX=-3;
	   }
   
	 if(keyCode===RIGHT_ARROW){
		fairy.velocityX=3;
		  hand.velocityX=3;
	   }
		  
	 if(keyCode===DOWN_ARROW){
		
	   Body.setStatic(starBody,false);
	  // Body.setStatic(star,false);
	  // starBody.velocityY=2;
	 }
   
}
