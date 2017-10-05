//setup function
function setup() {
  //create canvas to draw on
  createCanvas (500, 1000);
}
function draw() {
  //background color
  background( 'rgb(165, 250, 186)');
  //main sandbox
  push();
  //moving grid center (0,0) to canvas center
  translate( 250, 500);

  //Body
  push();
  //main shirt rectangle, filled with purple.
  fill('rgb(194, 108, 246)');
  rect( -100, -200, 200, 250, 10);
  //White Buttons going down my shirt
  fill( '0, 0, 0');
  ellipse( 0, -170, 10, 10);
  ellipse( 0, -140, 10, 10);
  ellipse( 0, -110, 10, 10);
  ellipse( 0, -80, 10, 10);
  ellipse( 0, -50, 10, 10);
  ellipse( 0, -20, 10, 10);
  ellipse( 0, 10, 10, 10);
  pop();
  //Body end!








  //
























}
