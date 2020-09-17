var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 40, 10);
  bullet.shapeColor = "blue"
  
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = (80,80,80)

  thickness = random (22,83)
  speed = random(223,321)
  weight = random (30,52)
  bullet.velocityX = speed;
}

function draw() {
  background(105,105,105);  
  
  if (hascollided(bullet,wall)){
  bullet.velocityX = 0;
    var damage = 0.5 * weight  *speed * speed / ( thickness * thickness * thickness )
    
  if (damage > 10)
  {
  bullet.shapeColor = "red"
  }

  if (damage < 10 )
  {
    bullet.shapeColor = "green"
    }
  
    }
    drawSprites();
}

function hascollided(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x

if (bulletRightEdge>=wallLeftEdge){
return true;
}
  return false;
}