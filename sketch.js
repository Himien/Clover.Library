var b1, b2, o1, o2, P
function setup() {
  createCanvas(800,400);
  b1=createSprite(400, 200, 50, 50);
b2=createSprite(600,200,30,30);
P=createSprite(300,300,75,75);
b1.shapeColor="green"
b2.shapeColor="yellow"
P.shapeColor="purple"
}

function draw() {
  background("black");  
  b2.x=mouseX
  b2.y=mouseY

if(istouching(P, b2)){
  b2.shapeColor="red"
  b1.shapeColor="red"
  
}
else{
  b1.shapeColor="green"
  b2.shapeColor="yellow"
}


  console.log(b2.x-b1.x)
  drawSprites();
}


