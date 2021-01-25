var umbrella,thunderbolt
var drop = []
function preload(){
   umbrella = loadImage("umbrella/walking_1.png") 
   umbrella = loadImage("umbrella/walking_2.png") 
   umbrella = loadImage("umbrella/walking_3.png") 
   umbrella = loadImage("umbrella/walking_4.png") 
   umbrella = loadImage("umbrella/walking_5.png") 
   umbrella = loadImage("umbrella/walking_6.png") 
   umbrella = loadImage("umbrella/walking_7.png") 
   umbrella = loadImage("umbrella/walking_8.png") 
    thunderbolt = loadImage("thunderbolt/1.png")
    thunderbolt = loadImage("thunderbolt/2.png")
    thunderbolt = loadImage("thunderbolt/3.png")
    thunderbolt = loadImage("thunderbolt/4.png")
}

function setup(){
   
    man = new Umbrella(250,300,40)
    for(var i=0;i<500;i++){
       var drops = new Drop(i,0,5) 
    }
   

}

function draw(){
 createCanvas(500,500)
 man.display();
        
}

   

