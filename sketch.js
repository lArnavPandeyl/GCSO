var car;
var wall;
var speed;
var weight;
var deformation;



function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = "black"
  
  speed = random(55,90);
weight =random(400,1500)

  car = createSprite(200,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "white"



deformation = 0.5 * weight * speed * speed /22500

}

function draw() {
  background(30,20,100);  

  if(wall.x- car.x < car.width/2 + wall.width/2 ) {
    car.velocityX = 0;
if(deformation <100 && car.y - wall.y + car.height/2 + wall.height/2  )  {
car.shapeColor = "green"}
if(deformation <180&&deformation >100 ){
  car.shapeColor = "yellow"}
  if(deformation > 180){
    car.shapeColor = "red"
  }



  }





  drawSprites();
}