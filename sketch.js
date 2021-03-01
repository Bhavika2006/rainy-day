const Engine = Matter.Engine
const Body = Matter.Body
const Bodies = Matter.Bodies
const World = Matter.World
var manImg,thunderboltImg
drops = []
function preload(){
    manImg = loadImage("image/man/walking_1.png")  
    manImg = loadImage("image/man/walking_2.png")  
    manImg = loadImage("image/man/walking_3.png")  
    manImg = loadImage("image/man/walking_4.png")  
    manImg = loadImage("image/man/walking_5.png")  
    manImg = loadImage("image/man/walking_6.png")  
    manImg = loadImage("image/man/walking_7.png")  
    manImg = loadImage("image/man/walking_8.png")  
    thunderboltImg = loadImage("image/thunderbolt/1.png")
    thunderboltImg = loadImage("image/thunderbolt/2.png")
    thunderboltImg = loadImage("image/thunderbolt/3.png")
    thunderboltImg = loadImage("image/thunderbolt/4.png")
}

function setup(){
   createCanvas(400,400)
    engine = Engine.create()
    world = engine.world
    
    man = new Man(200,200,20)

}

function draw(){
  Engine.update(engine);
   var maxDrops =100
   for(i = 0;i<maxDrops;i++){
       drop = new Drop(random(0,400),random(0,400))
       drops.push(drop)
   }
    man.display();
    drop.display();
}   

