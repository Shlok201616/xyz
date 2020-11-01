class Ground{

    constructor(x,y,width,height) {

    var this_options={

        isStatic:true
    }
this.body= Bodies.rectangle(x,y,width,height,this_options);
  this.width=width
  this.height=height
  World.add(world,this.body);
  

    
}
    
display(){

    var pos=this.body.position

    rectMode(CENTER);
    strokeWeight(0);
    stroke("green");
    fill("grey");
    rect(pos.x,pos.y,this.width,this.height)



}





}