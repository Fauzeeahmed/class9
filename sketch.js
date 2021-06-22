var box1;

function setup() {
  
  createCanvas(1000, 400);
  box1=createSprite(500,200,50,50)
  box1.velocityX = 2;
}

function draw() {
  background(200,10,200)
  
  drawSprites();

}
