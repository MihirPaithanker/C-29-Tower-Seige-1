const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon1;
var slingshot1;

var engine, world;

var ground;
var ground2;
var ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18;
function setup(){
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(1200,400);
  ground = new Ground(600,height,1100,10);
  ground2 = new Ground(400,250,500,20);
  ground3 = new Ground(950,300,500,10);

  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40);
  block8 = new Box(420,195,30,40);
  block9 = new Box(390,155,30,40);
  block10 = new Box(880,285,30,40);
  block11 = new Box(910,285,30,40);
  block12 = new Box(940,285,30,40);
  block13 = new Box(970,285,30,40);
  block14 = new Box(1000,285,30,40);
  block15 = new Box(910,245,30,40);
  block16 = new Box(940,245,30,40);
  block17 = new Box(970,245,30,40);
  block18 = new Box(940,205,30,40);
  polygon1 = new Polygon(100,250);
	slingshot1 = new Slingshot(polygon1.body,{x:100,y:100});
  
}

function draw () {
  background("white");
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  ground3.display();
  slingshot1.display();
  polygon1.display();

  ground.display();
  ground2.display();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}