var fixedRect, movingRect,go1,go2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX=2
  movingRect.debug = true;

  go1 = createSprite(800, 400, 50, 80)
  go1.shapeColor = "red"
  go1.velocityX=-1
  // go1.velocityY=-1

  // go2 = createSprite(600, 400, 50, 80)
  // go2.shapeColor = "Gray"
  // go2.velocityX=mouseX
  // go2.velocityY=mouseY
  
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  if(Touch(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  (TouchRespond(go1, movingRect))

  drawSprites();
}

