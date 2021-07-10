const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase;
var computerBase;
var player,computer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   playerBase = new PlayerBase(300,random(450,height-300),180,150);
   computerBase = new ComputerBase(1100,random(450,height-300),180,150);
   player = new Player(300,playerBase.body.position.y-140,180,150);
   computer = new Computer(1100,computerBase.body.position.y-140,180,150);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase.display();
  computerBase.display();


   player.display();
   computer.display();


}
