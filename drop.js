class Drop{
    constructor(x,y,radius){
        options ={
           'friciton':0.1
        }
        this.body = Bodies(x,y,radius,options)
        this.radius = radius;
        this.drop = []
        World.add(world,this.body);


    }
    display(){
        circle(this.body.position.x,this.body.position.y,5)
       
    }

   
    }
   
