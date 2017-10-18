//defining some global variables

var obj_1 = {
  x: 1,
  y: 1
}

var obj_2 = {
  x: 1,
  y: 1
}

var obj_3 = {
  x: 1,
  y: 1
}

var col = {
  r: 0,
  g: 0,
  b: 0
}

var col_2 = {
  r: 0,
  g: 0,
  b: 0
}

var col_3 = {
  r: 0,
  g: 0,
  b: 0
}

var cir_x = {
  x: 0
}
var cir_y = {
  y: 0
}


var cir_min = 10;
var cir_max = 300;

var max_cir_mvmt = 10;



//creating the set up function, creating a canvas with a background and setting framerate
function setup(){
  createCanvas(windowWidth, windowHeight);
  background('orange');
  frameRate(40);


}



//creating the draw sandbox
function draw(){
//defining some variables that will change every time draw is called
//specifying no cursor
  noCursor( mouseX, mouseY);


  obj_1.x = random(0, width);
  obj_1.y = random(0, height);
  obj_2.x = random(0, width);
  obj_2.y = random(0, height);
  obj_3.x = random(0, width);
  obj_3.y = random(0, height);

  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);

  col_2.r = random(0, 255);
  col_2.g = random(0, 255);
  col_2.b = random(0, 255);

  col_3.r = random(0, 255);
  col_3.g = random(0, 255);
  col_3.b = random(0, 255);

  cir_x.x = random(0, width);
  cir_y.y = random(0, height);

//creating the randomly colored triangles
  push();
  fill( col.r, col.g, col.b);
  stroke(12);
  triangle( obj_1.x, obj_1.y, obj_2.x, obj_2.y, obj_3.x, obj_3.y);
  pop();

//creating the circles that will follow the mouse
  var cir_size = map( mouseX, 0, width, cir_min, cir_max);
  push();

  fill( col_2.r, col_2.g, col_2.b);
  stroke(12);
  ellipse( mouseX, mouseY, cir_size);
  pop();

//creating the walking circles that will appear


  push();

  fill('black');
  ellipse( cir_x.x, cir_y.y, random( 0,400));
//this is to randomly update their positions
  cir_x.x += random( -max_cir_mvmt, max_cir_mvmt);
  cir_y.y += random( -max_cir_mvmt, max_cir_mvmt);
  pop();









//ending the draw sandbox
}

//creating a feature that resets the canvas when the mouse is pressed
function mousePressed(){
  background('orange');
}
