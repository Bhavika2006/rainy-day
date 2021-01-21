var umbrella,thunderbolt

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
    drop1= new Drop(random(0,500),0,5)
    drop2= new Drop(random(0,500),0,5)
    drop3= new Drop(random(0,500),0,5)
    drop4= new Drop(random(0,500),0,5)
    drop5= new Drop(random(0,500),0,5)
    drop6= new Drop(random(0,500),0,5)
    drop7= new Drop(random(0,500),0,5)
    drop8= new Drop(random(0,500),0,5)
    drop9= new Drop(random(0,500),0,5)
    drop10= new Drop(random(0,500),0,5)
    

}

function draw(){
 createCanvas(500,500)

}   

