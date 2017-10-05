//Setup function
function setup() {
  //Create canvas to draw on
  createCanvas (500, 750);
}
function draw() {
  //Background color
  background( 'rgb(142, 221, 250)');
  //Main sandbox
  push();
  //Moving grid center (0,0) to canvas center
  translate( 250, 500);

  //Arms
  push();
  //Left Arm
  stroke('rgb(194, 108, 246)');
  strokeWeight(45);
  line( -140, -60, -85, -172);
  line( -140, -60, -140, 0);
  //Left Hand and skin color
  stroke('rgb(229, 233, 154)');
  strokeWeight(60);
  point( -140, 0);
  //Right Arm
  scale( -1, 1);
  stroke('rgb(194, 108, 246)');
  strokeWeight(45);
  line( -140, -60, -85, -172);
  line( -140, -60, -140, 0);
  //Right Hand and skin color
  stroke('rgb(229, 233, 154)');
  strokeWeight(60);
  point( -140, 0);
  pop();

  //Body
  push();
  //Main shirt rectangle, filled with purple.
  fill('rgb(194, 108, 246)');
  rect( -100, -200, 200, 250, 20, 20, 10, 10);
  //White Buttons going down my shirt
  fill( '0, 0, 0');
  ellipse( 0, -170, 10, 10);
  ellipse( 0, -140, 10, 10);
  ellipse( 0, -110, 10, 10);
  ellipse( 0, -80, 10, 10);
  ellipse( 0, -50, 10, 10);
  ellipse( 0, -20, 10, 10);
  ellipse( 0, 10, 10, 10);
  //Pockets for hands
  stroke('black');
  strokeWeight(2);
  line( -99, 42, -55, -20);
  scale( -1, 1);
  line( -99, 42, -55, -20);
  //Chest pocket
  stroke('black');
  strokeWeight(2);
  noFill();
  rect( -70, -160, 30, 40, 0, 0, 8, 8);
  pop();
  //Body end!

  //Legs
  push();
  translate( 0, 50);
  //Left leg
  fill('rgb(93, 244, 130)');
  triangle( -90, 0, -10, 0, -110, 600);
  //Right Leg
  scale( -1, 1);
  triangle( -90, 0, -10, 0, -110, 600);
  pop();

  //Head
  push();
  translate( 0, -200);
  //Head shape and skin color
  fill('rgb(229, 233, 154)');
  ellipse( 0, -75, 190, 175);












































}
