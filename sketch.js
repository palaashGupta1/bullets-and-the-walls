var bullet,wall,thickness; 
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(233,321);
  weight=random(30,52);
  thickness=random(23,83);
  bullet = createSprite(0, 200, 100, 50);
  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background("pink");  
  bullet.shapeColor="blue";
  wall.shapeColor=(80,80,80);
  bullet.velocityX = speed;
  bullet.collide(wall);
  
  if(bullet.isTouching(bullet,wall) && damage===3.68){
    wall.shapeColor="green";
  }
  else if(bullet.isTouching(bullet,wall) && damage===12.43){
wall.shapeColor="red";
  }

  drawSprites();
  //isTouching();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
  function damage(){
    var damage=(0.5*weight*speed*speed/(thickness*thickness*thickness));
  }
}
