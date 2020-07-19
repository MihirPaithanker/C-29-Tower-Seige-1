class Polygon {

    constructor(x,y,width,height) {

        var options = {
            isStatic: false,
            restituition: 0.5,
            density: 1.0 ,
            friction: 0.8           

        }
        this.image = loadImage("Images/download2.jpg");
        
        this.body = Bodies.rectangle(x,y,50,70,options);
        this.height = 70;
        this.width = 50;
        World.add(world,this.body);

    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0, 0, this.width,this.height);
        pop();
    }
    
}
