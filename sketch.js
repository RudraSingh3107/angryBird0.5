const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;
var engine ;
var world ;
var object1 ;
var ball1 ;
var ground;
var box2;
var box1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,400,400,20);
  box1 = new Box(200,200,50,50);
  box2 = new Box(175, 100, 50, 50);
}

function draw() {
  background("white"); 
  Engine.update(engine);

  
  ground.display();
  box1.display();
  box2.display();

  console.log(box2.body.angle);
}