//create a variable for a laser object
let laser = [];


function setup(){
  createCanvas( windowWidth, windowHeight);
  background(0);
  for( let i = 0; i < 20; i++){
    laser[i] = new Laser( 20, 20, 40, 40);
  }

}


function draw(){


  for( let i = 0; i < laser.length; i++){
    laser[i].laserCheck(lasers, i);
    laser[i].display();
    laser[i].move();
    laser[i].edgeHit();
  }


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

        if (this.posX1 >= width || this.posX1 <= 0) {
            this.deltaX1 *= -1;
            this.deltaX2 *= -1;
        }

        if (this.posY1 >= height || this.posY1 <= 0) {
            this.deltaY1 *= -1;
            this.deltaY2 *= -1;


  }

}


    laserCheck(otherLasers, myId){
    // for loop touches each of the balls in the array
    for (let n = 0; n < otherLasers.length; n++) {
        // if n != myId, then check for touching
        // otherwise, its ME and we need to skip
        if (n != myId) {
            let d = dist(this.posX1, this.posY1, otherLasers[n].posX1, otherLasers[n].posY1);
            let combinedR = this.posY1 + otherLasers[n].posY1;

            if (d <= combinedR) {
                this.deltaX *= -1;
                this.deltaY *= -1;
  }
}
}
}

function mousePressed(){
  for( let i = 0; i < 20; i++){
    laser[i] = new Laser( 20, 20, 40, 40);
  }

  for( let i = 0; i < laser.length; i++){
    laser[i].display();
    laser[i].move();
    laser[i].edgeHit();
  }
background(0);

}
