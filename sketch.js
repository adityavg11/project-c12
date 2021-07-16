 var jake;
 var path;
  var invisiblewall;
  var invisiblewall2;

function preload(){
jake_running=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
roadimg=loadImage("path.png");


}

function setup(){
  path=createSprite(200,200,20,30);
  path.addImage("path",roadimg);
  path.scale=1.2;
jake=createSprite(200,200,20,30);
jake.addAnimation("running",jake_running);
jake.scale=0.5;
jake.y = 300;
invisiblewall=createSprite(50,10,30,800)
invisiblewall2=createSprite(360,10,30,800);
 invisiblewall.visible=false;
 invisiblewall2.visible=false;




}







function draw(){
background("black");

jake.x = World.mouseX


if (path.y > 400){
path.y=200;
}

jake.collide(invisiblewall);
jake.collide(invisiblewall2);




drawSprites();
}
