// create a variable for the ball object
let balls = [];
const numOfBalls = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
//changing the initial positions of the balls
    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));

        init_x += 400;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {
    background('rgb(40,80,30)');
//calling the methods of the ball class
    for (let i = 0; i < balls.length; i++) {
        balls[i].mouseCheck();
        balls[i].ballCheck(balls, i);
        balls[i].edgeHit();
        balls[i].move();
        balls[i].display();
    }

    //soccer field
    push();
    noFill();
    stroke('255');
    rect(10, 10, windowWidth/2, windowHeight-10);
    rect(windowWidth-10, 10, -windowWidth/2, windowHeight-10);
    ellipse(windowWidth/2, windowHeight/2, 200);
    rect(10, windowHeight/3, 100, windowHeight*(1/3));
    rect(10, windowHeight/5, 200, windowHeight*(3/5));
    rect(windowWidth-10, windowHeight/3, -100, windowHeight*(1/3));
    rect(windowWidth-10, windowHeight/5, -200, windowHeight*(3/5));

}

//define ball class
class Ball {
    constructor(x, y, size) {
        this.color = '255';
        this.size = (50);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-5, 5);
    }
//soccer balls
    display() {
        push();
        fill(this.color);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        fill('black');
        ellipse(0, 0, 10);
        ellipse(0, 15, 10);
        ellipse(0, -15, 10);
        ellipse(-15, 0, 10);
        ellipse(15, 0, 10);
        ellipse(-14, -13, 10);
        ellipse(-14, 13, 10);
        ellipse( 14, 13, 10);
        ellipse( 14, -13, 10);

        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeHit() {
        //the ball will bounce off of the walls
        if ((this.posX + this.rad >= width || this.posX - this.rad <= 0)&&(windowHeight/5<(this.posY+this.rad)<windowHeight*(3/5))) {
            this.deltaX *= 1;
        }

        if ((this.posX + this.rad >= width || this.posX - this.rad <= 0)) {
            this.deltaX *= -1;
        }

        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;

        }
    }

    ballCheck(otherBalls, myId) {

        for (let n = 0; n < otherBalls.length; n++) {

            if (n != myId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;
                //this will slow the balls down when they touch each other
                if (d <= combinedR) {
                    this.deltaX *= -.5;
                    this.deltaY *= -.5;


                }
            }
        }
    }

    mouseCheck(){

        let d = dist(this.posX, this.posY, mouseX, mouseY);
        //this will speed the balls up if the mouse touches them
        if (d < this.rad) {
            this.deltaX *=1.25;
            this.deltaY *=1.25;
          }
            if (d < this.rad) {
           return true;
       } else {
           return false;
       }

}
}
//this is to get rid of balls that may stick together
function mousePressed(){
  for (let i = balls.length - 1; i >= 0; i--) {
        let destroyMe = balls[i].mouseCheck();
        if (destroyMe) {
            balls.splice(i, 1);
        }
    }
}
