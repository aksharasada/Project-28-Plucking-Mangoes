class Tree{
    constructor(x, y){
        this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=500;
		this.wallThickness=10;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		
        this.image = loadImage("tree.png");
        
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
    }

    display(){
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position;


       
        push()
        translate(posBottom.x, posBottom.y+10);
        fill(255)
        imageMode(CENTER);
        image( this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
        pop()

    }
    
}