//create a variable for a laser object
let laser;


function setup(){
  createCanvas( windowWidth, windowHeight);
  laser = new Laser(10, 10, 800, 800);
}


function draw(){
  background(0);


  laser.display();
  laser.move();
  laser.edgeHit();
}


//laser class definition
class Laser{
  constructor( x1, y1, x2, y2){
    //this.color = color;
    this.posX1 = x1;
    this.posY1 = y1;
    this.posX2 = x2;
    this.posY2 = y2;
    this.deltaX1 = random(-2, 2);
    this.deltaY1 = random(-2, 2);
    this.deltaX2 = random(-2, 2);
    this.deltaY2 = random(-2, 2);

  }

  display(){
    push();
    stroke('255');

    translate(this.posX1, this.posY1, this.posX2, this.posY2);
    line( 0, 0, 10, 10);
    pop();
  }

  move(){
    push();
    this.posX1 += this.deltaX1;
    this.posY1 += this.deltaY1;
    this.posX2 += this.deltaX2;
    this.posY2 += this.deltaY2;
    pop();
  }

  edgeHit(){
    // check if the ball has hit a vertical wall (left or right walls)
        if (this.posX1 >= width || this.posX1 <= 0) {
            this.deltaX1 *= -1;
            this.deltaX2 *= -1;
        }
        // check if the ball has hit a horizontal wall (top or bottom walls)
        if (this.posY1 >= height || this.posY1 <= 0) {
            this.deltaY1 *= -1;
            this.deltaY2 *= -1;
        

  }




}
}
