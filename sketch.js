const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var Gr_options
var Gr;
var object2;

function Preload (){

object.addImage("helicopter.png");



}


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   Gr_options ={
    isStatic: true
   }

   object2 = createSprite(200,50,50,20);




    Gr = Bodies.rectangle(200,390,400,30,Gr_options);
    World.add(world,Gr);



    var object_options ={
     restitution: 1
        
        
    }

   
        
        
    

   object= Bodies.rectangle(200,100,200,20,object_options);
    World.add(world,object);

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);

    rect(Gr.position.x,Gr.position.y,400,30);

    restitution = 2.5;


    drawSprites();
}
