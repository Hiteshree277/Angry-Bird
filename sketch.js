const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,320,70,70);
    console.log(box1);

    box2=new Box(920,320,70,70);
    console.log(box2);


    log1=new Log(810,300,300,PI/2);
    
    ground=new Ground(600,390,1200,20);
    console.log(ground);

    pig1=new Pig(810,320);
    console.log(pig1);

    pig2=new Pig(810,275);

    box3= new Box(700,275,70,70);

    box4=new Box(920,275,70,70);

    log2=new Log(810,210,300,PI/2);

    box5=new Box(810,160,70,70);

    log3=new Log(760,120,150,PI/5);

    log4=new Log(870,120,150,-PI/5);

    bird=new Bird(100,100);
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    
}