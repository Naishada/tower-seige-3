class Poly{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Matter.Bodies.circle(x,y,20,options);
        this.image = loadImage("polygon.png")
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        fill("red");
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,40,40);
    }
}
    
