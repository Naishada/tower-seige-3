class Square {
    constructor(x,y,width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
        var options={
            isStatic : false
        }
        this.visibility = 225;
        this.body = Bodies.rectangle (x,y,this.width,this.height,options);
        World.add(world,this.body)
    }
    display(){
       // console.log(this.body.speed);
        if(this.body.speed < 6){
            var pos = this.body.position;
            rectMode(CENTER);
            fill (this.color);
            rect(pos.x,pos.y,this.width,this.height);
        }
        else{
            World.remove(world,this.body);
            this.visibility = 255;
        }
    }
}