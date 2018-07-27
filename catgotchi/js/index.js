function setup () {
  createCanvas(800,500)
}
function draw() {
  strokeWeight(2)
  line(0,0,width/2,height/2)
  point(100,200)
  noStroke()
  fill("white")
  triangle(width,0, width ,height/2, width/2, height/2)
}