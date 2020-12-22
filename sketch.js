const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var poly1;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17;
var block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31;
var block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42;
var chain;
var engine,world;
var bgcolour;
function setup(){
  getBackgroundImage();
  createCanvas(800,800);
   engine = Engine.create()
   world = engine.world;
   poly1 = new Poly(122,415);
   ground1 = new Ground(337,708,300,5);
   ground2 = new Ground(600,450,300,5);
   chain = new Slingshot(poly1.body,{x:122,y:415});
   block1 = new Square(490,431,30,30,"red");
   block2 = new Square(520,431,30,30,"red");
   block3 = new Square(550,431,30,30,"red");
   block4 = new Square(580,431,30,30,"red");
   block5 = new Square(610,431,30,30,"red");
   block6 = new Square(640,431,30,30,"red");
   block7 = new Square(670,431,30,30,"red");
   block8 = new Square(700,431,30,30,"red");
   block9 = new Square(520,401,30,30,"orange");
   block10 = new Square(550,401,30,30,"orange");
   block11 = new Square(580,401,30,30,"orange");
   block12 = new Square(610,401,30,30,"orange");
   block13 = new Square(640,401,30,30,"orange");
   block14 = new Square(670,401,30,30,"orange");
   block15 = new Square(550,371,30,30,"yellow");
   block16 = new Square(580,371,30,30,"yellow");
   block17 = new Square(610,371,30,30,"yellow");    
   block18 = new Square(640,371,30,30,"yellow");
   block19 = new Square(580,341,30,30,"lemonyellow");
   block20 = new Square(610,341,30,30,"lemonyellow");
   block21 = new Square(594,311,30,30,"brown");

   block22 = new Square(230,690,30,30,"blue");
   block23 = new Square(260,690,30,30,"blue");
   block24 = new Square(290,690,30,30,"blue");
   block25 = new Square(320,690,30,30,"blue");
   block26 = new Square(350,690,30,30,"blue");
   block27 = new Square(380,690,30,30,"blue");
   block28 = new Square(410,690,30,30,"blue");
   block29 = new Square(440,690,30,30,"blue");
   block30 = new Square(260,660,30,30,"lightblue");
   block31 = new Square(290,660,30,30,"lightblue");
   block32 = new Square(320,660,30,30,"lightblue");
   block33 = new Square(350,660,30,30,"lightblue");
   block34 = new Square(380,660,30,30,"lightblue");
   block35 = new Square(410,660,30,30,"lightblue");
   block36 = new Square(290,630,30,30,"pink");
   block37 = new Square(320,630,30,30,"pink");
   block38 = new Square(350,630,30,30,"pink");
   block39 = new Square(380,630,30,30,"pink");
   block40 = new Square(320,600,30,30,"marron");
   block41 = new Square(350,600,30,30,"marron");
   block42 = new Square(335,570,30,30,"purple")
   Engine.run(engine);
  
}

function draw() {
  //camera.zoom=camera.zoom+1
  //!== means not equal to
  if(bgcolour){
  background(bgcolour); 
  }
  else{
    background("orange");
  } 
  poly1.display();
  ground1.display();
  ground2.display();
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
  fill("pink")
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  chain.display();
  drawSprites();
 text(mouseX+","+mouseY,mouseX,mouseY);
 textSize(20);
 text("Drag the mouse and relese it to hit the blocks.Press space for another chance",100,50)
}
function mouseDragged(){
  Matter.Body.setPosition(poly1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	chain.fly();
}
function keyPressed ()
{
  if(keyCode === 32)
  {
    chain.attach(poly1.body);  
  }
} 

//asynchronous 
async function getBackgroundImage(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  console.log(responseJSON)
  var datetime = responseJSON.datetime
  console.log(datetime)
  var hour = datetime.slice(11,13)
  console.log(hour)
  if(hour>6 && hour<18){
  bgcolour = "orange";
  }
  else{
    bgcolour = "blue";
  }
}