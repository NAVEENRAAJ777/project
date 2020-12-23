var car;

var wall;

var weight;

var speed; 


function setup(){

 createCanvas(1600,400)

car=createSprite(700,200,20,60)

 car.shapeColor="green"

  wall=createSprite(1200,200,20,200)

  wall.shapeColor="green"



}

function draw(){

 background(20,20,20)

 car.velocityX=5;

 weight=random(50,200)

 speed=random(1,200)





 if(car.x-wall.x<car.width/2+wall.width/2

  &&wall.x-car.x<car.width/2+wall.width/2

  &&car.y-wall.y<car.width/2+wall.width/2

  &&wall.y-car.y<car.width/2+wall.width/2){

   car.velocityX=0;

   var deformation=0.5*speed*weight*speed/24509

   if(deformation>180){

​    car.shapeColor="red"

   }

   if(deformation<100){

​    car.shapeColor="blue"

   }



   

   if(deformation<180&&deformation>100){

​    car.shapeColor="yellow"

   }





 }



 drawSprites()

}