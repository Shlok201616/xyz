class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Pic/mango.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50,50);
        pop();
      }
}