
//this sketch animates a car driving around a stoplight.
//the car will randomly change colors if the mouse is clicked. 


//creating a variable for red, green, and blue color values
var r, g, b;
//this will be needed to determine the color of the car later on




//setup statement
function setup(){

//creating a canvas that is the same size as the the window
  createCanvas( windowWidth, windowHeight);


//picking colors randomly for the car
  r = random('255');
  g = random('255');
  b = random('255');

//setting the frame rate for the sketch.
  frameRate( 60 );

}


//creating a draw function
function draw(){
//creating a white background
  background('255');

  noCursor();
//specifying that I do not want a cursor. Instead, I will have a car
  push();
//body of car
  fill( r, g, b);
  rect( mouseX, mouseY, 70, 50, 10, 90, 20, 0);
//wheels
  fill('black');
  ellipse( mouseX + 3, mouseY + 50, 30);
  ellipse( mouseX + 70, mouseY + 50, 30);

  pop();

//starting my stoplight sandbox
//creating my stop light. This will be composed of a rectangle and 3 circles.
  push();

  push();
//the body of the stoplight will be a black rectangle
  fill('black');
  rect( width * .5 - 50, height * .25, 100, 300);

  pop();

//red light at the top
  push();
//this line will fill the red light, and oscillate the fill
  fill(((sin((frameCount/50)*10))* 255), 0, 0);
  ellipse( width * .5, 220, 60);

  pop();
//end red light sandbox

//yellow light in middle
  push();
//this line wil fill the yellow light, and oscillate the fill
  fill( ((sin((frameCount/100)*10))* 255), ((sin((frameCount/100)*10))* 255), 0);
  ellipse(width * .5, 300, 60);

  pop();
//end yellow light sandbox

//green light at the bottom
  push();
//this line will fill the green light, and oscillate the fill
  fill( 0, ((sin((frameCount/200)*10))* 255), 0);
  ellipse(width * .5, 380, 60);

  pop();

  pop();
//this ends the stoplight



//declaring black text for a show of framerate and frameCount
//sandbox for frame rate text
  push();

  fill('black');
  text("Frame Rate:" + frameRate(), 10, windowHeight - 20);

  pop();
//sandbox for frame count text
  push();

  fill('black');
  text("Frame Count:" + frameCount, 10, windowHeight - 30);

  pop();



}


function mousePressed(){
  var d = dist( mouseX, mouseY, 70, 50);
  if (d > 100){
  //pick new color values for car
  r = random('255');
  g = random('255');
  b = random('255');
}
}
