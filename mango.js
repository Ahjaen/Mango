class Mango {
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
        this.image=loadImage("sprites/mango.png")

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			fill(255,0,255)
            image(this.image, 0, 0, this.r, this.r)
			pop()
			
	}

}