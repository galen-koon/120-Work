//The goal of this piece is to create an abstract battle
//between the black circles and the colored triangles. The black circles
//slowly crawl across the screen until it is all-out warfare.
//The mouse is simply an innocent bystander who has gotten sucked
//into the conflict.


//defining some global variables that can manipulated later
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

//some constant global variables
var cir_min = (8);
var cir_max = (2);
var max_cir_mvmt = 10;



//creating the set up function, creating a canvas with a background and setting framerate
function setup(){
  createCanvas(windowWidth, windowHeight);
  background('orange');
  frameRate(60);

}



//creating the draw sandbox
function draw(){

//specifying no cursor
  noCursor( mouseX, mouseY);
  var yc = constrain( mouseY, 10, (height-10));
//defining some variables that will change every time draw is called
  obj_1.x = random(0, width);
  obj_1.y = random(0, height);
  obj_2.x = random(0, width);
  obj_2.y = random(0, height);
  obj_3.x = random(0, width);
  obj_3.y = random(0, height);

  col.r = floor(random(256));
  col.g = floor(random(256));
  col.b = floor(random(256));

  col_2.r = floor(random(256));
  col_2.g = floor(random(256));
  col_2.b = floor(random(256));

  col_3.r = floor(random(256));
  col_3.g = floor(random(256));
  col_3.b = floor(random(256));

//this will constrain the black circles to a specific area of the canvas
  cir_x.x = random(0, (frameCount * 0.5));
  cir_y.y = random(400, random((height % 100), (height % 50), (height % 25), (height % 15), (height % 7)));

//creating the randomly colored triangles
  push();
//randomly colored
  fill( col.r, col.g, col.b);
  stroke(12);
//randomly sized
  triangle( obj_1.x, obj_1.y, obj_2.x, obj_2.y, obj_3.x, obj_3.y);
  pop();

//creating the circles that will follow the mouse
//the map command will change their size as the mouse moves across the screen
  var cir_size = map( mouseX, 0, width, (mouseY / cir_min), (mouseY / cir_max));
  push();
//randomly colored
  fill( col_2.r, col_2.g, col_2.b);
  stroke(12);
  ellipse( mouseX, yc, cir_size);
  pop();

//creating the walking circles that will appear


  push();

  fill('black');
//randomly sized
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
