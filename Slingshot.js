class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 30
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(myWorld, this.sling);

    }
   
    fly(){
        this.sling.bodyA=null;
        
    }
    attach(body){
        this.sling.bodyA=body;
    }
    
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}