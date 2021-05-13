class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
        this.chain.bodyA = body;
    }
    
    fly(){
        this.chain.bodyA = null;
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB
           
                
        line(pointA.x , pointA.y, pointB.x , pointB.y);
        line(pointA.x , pointA.y, pointB.x , pointB.y );
                       
           
        }
  
    
}