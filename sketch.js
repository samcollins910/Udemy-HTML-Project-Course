function setup(){
  createCanvas(600,400);

}

function draw(){
   background(0,0,0,3);

var c = random(255);
var r = random(255)
var g = random(255)
var b = random(255)
 var x = random(600);
 var y = random(400);
	fill(r,g,b);
	stroke (r,g,b);
	strokeWeight (random(15))
	line(x, y, x,y);

}
