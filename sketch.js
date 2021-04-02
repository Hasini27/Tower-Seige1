const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var backGround, stand, ground;
var spaceShip, Slingshot;
function preload (){
  backGround = loadImage("background.jpg");

}

function setup (){
  var canvas = createCanvas(1200,500);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(600,500,1200,40);
  stand = new Ground(850, 305, 300, 20);

  spaceShip = new Polygon (70, 400, 10, 10);

  Slingshot = new SlingShot(spaceShip.body,{x:300, y:200});

  //level1
  asteroid1 = new Asteroid (730, 275, 70,50);
  spacejunk1 = new SpaceJunk (780, 275, 40, 40);
  asteroid2 = new Asteroid (830, 275, 70, 50);
  spacejunk2 = new SpaceJunk (880, 275, 40, 40);
  asteroid3 = new Asteroid (930, 275, 70, 50);
  spacejunk3 = new SpaceJunk (980, 275, 40, 40);

  //level2
  asteroid4 = new Asteroid (755, 235, 70, 50);
  spacejunk4 = new SpaceJunk (805, 235, 40, 40);
  asteroid5 = new Asteroid (855, 235, 70, 50);
  spacejunk5 = new SpaceJunk (905, 235, 40, 40);
  asteroid6 = new Asteroid (955, 235, 70, 50);

  //level3
  spacejunk6 = new SpaceJunk (780, 195, 40, 40);
  asteroid7 = new Asteroid (830, 195, 70, 50);
  spacejunk7 = new SpaceJunk (880, 195, 40, 40);
  asteroid8 = new Asteroid (930, 195, 70, 50);

  //level4
  spacejunk8 = new SpaceJunk (805, 155, 40, 40);
  asteroid9 = new Asteroid (855, 155, 70, 50);
  spacejunk9 = new SpaceJunk (905, 155, 40, 40);

  //level5
  asteroid10 = new Asteroid (830, 115, 70, 50);
  spacejunk10 = new SpaceJunk (880, 115, 40, 40);

  //level6
  asteroid11 = new Asteroid (855, 75, 70, 50);

}

function draw (){
  background(backGround);
 Engine.update(engine);
  ground.display();
  stand.display();
  spaceShip.display();
  Slingshot.display();
  asteroid1.display();
  spacejunk1.display();
  asteroid2.display();
  spacejunk2.display();
  asteroid3.display();
  spacejunk3.display();
  asteroid4.display();
  spacejunk4.display();
  asteroid5.display();
  spacejunk5.display();
  asteroid6.display();
  spacejunk6.display();
  asteroid7.display();
  spacejunk7.display();
  asteroid8.display();
  spacejunk8.display();
  asteroid9.display();
  spacejunk9.display();
  asteroid10.display();
  spacejunk10.display();
  asteroid11.display();
}

function mouseDragged(){
  Matter.Body.setPosition(spaceShip.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  Slingshot.fly();
}