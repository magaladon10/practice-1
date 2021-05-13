const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint


function setup() {
var canvas =   createCanvas(800,400);
 engine = Engine.create()
world = engine.world
ground = new Ground(10,380,82,20)
box = new Box(400,200,20,20)
}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
 box.display();
 ground.display();
}