// calling the set up function. Creating a canvas
function setup(){
  createCanvas( windowWidth, windowHeight);
frameRate( 10);
}
let y = 0;
//draw function, with a pink background
function draw(){
  background('pink');


//for loop calling for the ellipses to be drawn, colored randomly
//nested for loops for x and y
  for( var x = 30; x < width; x+=100) {
    //for( var y = 30; y < height; y+=80) {
//randomly colored
    fill(random(255), random(255), random(255));
    ellipse( x, y, 40, 40);
//  }
}
//this will move the ellipses down the window and restart them back at the top
y++;
    if (y > height) {
        y = 0;
    }

}
//end of the draw function
