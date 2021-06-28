const Engine= Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies

var engine,world;
var bg,bgimg;
var boy1,boy2,boy1img,boy2img;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10;

function preload(){
  bgimg=loadImage("snow2.jpg")
boy1img= loadImage("mario00.png")
boy2img= loadImage("collided.png")
}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1200,600);
  boy1=createSprite(400, 500, 50, 50);
  boy1.addImage(boy1img)
  boy1.scale=2.5
  boy2=createSprite(1050, 500, 50, 50);
  boy2.addImage(boy2img)
  boy2.scale=2.5

  snow1= new Snow(100,10,50,50)
  snow2= new Snow(400,50,50,50)
  snow3= new Snow(600,20,50,50)
  snow4= new Snow(440,50,50,50)
  snow5= new Snow(350,40,20,20)
  snow6= new Snow(500,30,15,15)
  snow7= new Snow(850,50,50,50)
  snow8= new Snow(900,25,50,50)
  snow9= new Snow(1090,35,40,40)
  snow10= new Snow(1000,5,50,50)

}

function draw() {
  Engine.update(engine);

  background(bgimg);  
  drawSprites();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();

}