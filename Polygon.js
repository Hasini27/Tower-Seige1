class Polygon {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width
      this.height = this.height
      this.image=loadImage("rocket-removebg-preview.png");
      World.add(world, this.body);
      }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      fill("white");
      rotate(angle);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,100,105);
    }
    };
