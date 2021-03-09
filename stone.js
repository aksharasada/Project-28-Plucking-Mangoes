class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius, options);
      this.radius = radius;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      fill("white");
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
    }
  };