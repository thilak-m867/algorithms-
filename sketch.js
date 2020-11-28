var fixedRect, movingRect;
var rect1;
var rect2, rect3;
var rect4, rect5;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "orange";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = 'orange';
  rect1 = createSprite(300, 500, 60, 80);
  rect1.shapeColor = "green";

  rect2 = createSprite(200, 100, 50, 50);
  rect2.velocityX = 2;
  rect3 = createSprite(600, 100, 40, 40);
  rect3.velocityX = -3;

  rect4 = createSprite(700, 200, 50, 50);
  rect4.velocityY = 2;
  rect5 = createSprite(700, 600, 40, 40);
  rect5.velocityY = -3;
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  bounceOff(rect2, rect3);

  bounceOff(rect4, rect5);

  if(isTouching(movingRect, rect1)) {
    movingRect.shapeColor = "blue";
    rect1.shapeColor = "blue";
  } else {
    movingRect.shapeColor = "orange";
    rect1.shapeColor = "green";
  }


  
  drawSprites();
}

