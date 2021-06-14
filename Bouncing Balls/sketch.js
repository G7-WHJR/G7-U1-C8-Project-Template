var ball1, ball2;
var topEdge, bottomEdge, leftEdge, rightEdge;

function setup() {
  createCanvas(450, 400);

  //ball1
  ball1 = createSprite(200, 200, 15, 15);
  ball1.shapeColor = "orange";

  //ball2
  ball2 = createSprite(150, 200, 15, 15);
  ball2.shapeColor = "red";

  //Top Edge
  topEdge = createSprite(225, 0, 450, 25);
  topEdge.shapeColor = "gray";
  topEdge.immovable = true;

  //Bottom Edge
  bottomEdge = createSprite(225, 400, 450, 25);
  bottomEdge.shapeColor = "gray";
  bottomEdge.immovable = true;

  //Left Edge
  leftEdge = createSprite(0, 200, 25, 400);
  leftEdge.shapeColor = "gray";
  leftEdge.immovable = true;

  //Right Edge
  rightEdge = createSprite(450, 200, 25, 400);
  rightEdge.shapeColor = "gray";
  rightEdge.immovable = true;
}

function draw() {
  background("lightyellow");

  ball1.bounce(leftEdge);
  ball1.bounce(rightEdge);
  ball1.bounce(bottomEdge);
  ball1.bounce(topEdge);

  if (mouseIsPressed) {
    //ball1
    ball1.velocity.x = 1; // Left or Right
    ball1.velocity.y = 1; // Top to Bottom
    ball1.setSpeed(4);

    //ball2 velocity & Speed:
  }

  drawSprites();
}
