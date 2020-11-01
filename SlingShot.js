class SlingShot {

constructor(BodyA,PointB){

    var options ={
        bodyA:BodyA,
        pointB:PointB,
        stifness : 0.8,
        length : 10



        
    }
    this.pointB=PointB;
    this.sling=Constraint.create(options);
    World.add(world,this.sling);
}

fly(){
this.sling.bodyA= null;
} 

    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(6);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

}

