class Ball{
    constructor(x,y,radius,Angle){
    var options = {'frictionAir': 0.04,
                    'restitution':0.7,            
                    'density':0.9    
                                  }
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius 
   
    World.add(world,this.body)       
    }    
    display(){
    var angle = this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    angleMode(RADIANS)
    rotate(angle)
    fill ("blue")
    ellipseMode(CENTER)
    ellipse(0,0,this.radius)    
    pop()    
    }
    }