
//declaring the ball object
var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
//declaring a color object
var col ={
  r:0,
  g:0,
  b:0
};


//declaring the setup function and creating a white canvas the size of the window
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);


}
//ending the setup function

//declaring the draw function
function draw() {


    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
//defining the color variables
    col.r = random( 0, 255);
    col.g = random( 0, 255);
    col.b = random( 0, 255);
//creating a sandbox for when the mouse is pressed.
//the color of the ball will change randomly while the mouse is held and then go back to white
    push();
    if (mouseIsPressed){
      fill(col.r, col.g, col.b)}else{
    fill(255)}
    ellipse(ball.x, ball.y, ball.width, ball.width);
    pop();
//ending the random fill sandbox
//creating my button sandbox
    push();
    noFill();
    stroke(4);
    if( (mouseX >= 550) && (mouseX <= 650) && (mouseY >= 250) && (mouseY <= 350)){
      fill('blue');}else{
        fill('255');
      }
    rectMode(CENTER);
    rect( 600, 300, 100, 100);
    pop();
//ending the button sandbox



}
//ending the draw function
//calling the mousepressed function
function mousePressed() {
//this will change the angle and speed that the ball bounces
    push();
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
    pop();
//this will change the background to a random color
    push();
    background(col.r, col.g, col.b);
    pop();
//this will reset the background to white if the button is clicked
    push();
    if((mouseX >= 550) && (mouseX <= 650) && (mouseY >= 250) && (mouseY <= 350)){
      background(255);
    }
}
//ending the mousepressed function
