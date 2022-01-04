var path, jackson, block1, block2
//var energy, coin, bomb

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  jacksonImage = loadAnimation("Runner-1.png","Runner-2.png");
  /*energyImage = loadImage("energyDrink.png");
  coinImage = loadImage("coin.png");
  bombImage = loadImage("bomb.png");*/
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,150,20,20);
  path.addImage("path",pathImage);
  path.scale = 1.2;

  jackson = createSprite(200,250,20,20);
  jackson.addAnimation("jackson",jacksonImage);
  jackson.scale = 0.07;

  block1 = createSprite(30,200,10,400);
  block1.visible = false;

  block2 = createSprite(380,200,10,400);
  block2.visible = false;

 /* energy = createSprite(100 || 200 || 320,250,20,20);
  energy.addImage("energy",energyImage);
  energy.scale=0.16;

  coin = createSprite(100 || 200 || 320,250,20,20);
  coin.addImage("coin",coinImage);
  coin.scale=0.5;

  bomb = createSprite(100 || 200 || 320,250,20,20);
  bomb.addImage("bomb",bombImage);
  bomb.scale=0.14;*/

}

function draw() {
  background(0);

 path.velocityY = 5;
 if (path.y > 400) {
   path.y = height/4;
 }

 jackson.x = World.mouseX;

 jackson.collide(block1);
 jackson.collide(block2);

drawSprites();
}
