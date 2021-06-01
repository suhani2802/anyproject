const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box=new Box(200,300,50,50);
    box2=new Box(240,100,50,50);
    ground=new Ground();

   

   

    
}

function draw(){
    background("cyan");
    Engine.update(engine);
    box.display();
    box2.display();
    ground.display();

    
}