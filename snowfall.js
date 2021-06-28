class Snow{
    constructor(x,y,w,h){
var options={
    restitution:0.5,
    friction:0.8,
density:1
}

this.h=h;
this.w=w
this.body= Bodies.rectangle(x,y,w,h,options)
this.image=loadImage("snow5.webp")
World.add(world,this.body)

    }


    display(){
        var pos= this.body.position
        var angle=this.body.angle

push()
rotate(angle)
translate(pos.x,pos.y)
imageMode(CENTER)
image(this.image,0,0,this.w,this.h)
pop()

    }
}