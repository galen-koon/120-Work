



//setup statement
function setup(){

//creating a canvas that is the same size as the the window
  createCanvas( windowWidth, windowHeight);

//setting the frame rate for the sketch.
  frameRate( 30 );

}

//creating a draw function
function draw(){
//creating a white background
  background('255');
  noCursor();
//specifying that I do not want a cursor. Instead, I will have a car
  push();
  fill('red');
  rect( mouseX, mouseY, 70, 50, 10, 90, 20, 0);
  fill('black');
  ellipse( mouseX + 3, mouseY + 50, 30);
  ellipse( mouseX + 70, mouseY + 50, 30);
  pop();

//creating my stop light. This will be composed of a rectangle and 3 circles.
  push();

  push();
  fill('black');
  rect( width * .5 - 50, height * .25, 100, 300);
  pop();

//red light at the top
  push();
  fill('red');
  ellipse( width * .5, 220, 60);
  pop();

//yellow light in middle
  push();
  fill('yellow');
  ellipse(width * .5, 300, 60);
  pop();

//green light at the bottom
  push();
  fill('green');
  ellipse(width * .5, 380, 60);
  pop();

  pop();
  //this ends the stoplight













}
