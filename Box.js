class Box  {
    constructor(x, y, width, height){
  var options={
    restitution:0.2,
    friction:0.0
  }
  this.body=Bodies.rectangle(x,y,width,height,options)
  this.width=width
  this.height=height
  World.add(world,this.body);

    }
    display(){
       var angle=this.body.angle
       var p=this.body.position
       push()
translate(p.x,p.y)
rotate(angle)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()
       
  }
}