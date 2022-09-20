const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var ball;
var square;
var rectang;

var ground;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.5,
    frictionAir : 0.01
  }

  var square_options = {
    restitution : 0.25,
    frictionAir : 0.01
  }

  var rectang_options = {
    restitution : 0.25,
    frictionAir : 0.25
  }


  var ground_options = {
    isStatic : true
  }


  push();
  fill("GREEN");
  ball = Bodies.circle(170,10,20,ball_options);
  World.add(world,ball);
  pop();

  push();
  fill("YELLOW");
  square = Bodies.rectangle(50,10,40,40,square_options);
  World.add(world,square);
  pop();

  push();
  fill("RED");
  rectang = Bodies.rectangle(300,10,60,40,rectang_options);
  World.add(world,rectang);
  pop();

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(square.position.x,square.position.y,40,40);
 rect(rectang.position.x,rectang.position.y,60,40);

 rect(ground.position.x,ground.position.y,400,20);
 
 
}