

function setup(){

  createCanvas( windowWidth, windowHeight);


}

var snowFill = ('255');
var snowFill2 = ('blue');
var posX = 1;
var posY = 1;

function draw(){
  background('pink');
  noCursor();
  snowFlake( 10, 1, 1, 1);
  snowFlake( 100, 1, 1, 1.5);
  snowFlake( 500, 10, 1, 1);
  snowFlake( 300, 5, .5, .5);
  snowFlake( 200, 1, 1, .5);
  snowFlake( 50, 10, .75, 1);
  snowFlake( 700, 0, 1, 1);
  snowFlake( 900, 1, 1, 1.5);
  snowFlake( 1000, 5, 1, .5);
  snowFlake( 1100, 1, 1, 1);

  treeStump();
  tree();

  push();
  translate( 400, 0);
  tree();
  treeStump();
  pop();

  push();
  translate( 800, 0);
  tree();
  treeStump();
  pop();

  push();
  translate( 550, 0);
  tree();
  treeStump();
  pop();

  push();
  translate( 150, 0);
  tree();
  treeStump();
  pop();

  push();
  translate( 900, 0);
  tree();
  treeStump();
  pop();

  push();
  translate( 650, 0);
  tree();
  treeStump();
  pop();

  push();
  translate( 800, 0);
  tree();
  treeStump();
  pop();
}


function snowFlake( x, y, w, h){
  push();
  translate( x, y);
  scale( w, h);

  fill(snowFill);
  noStroke();
  ellipse( 20, (frameCount % windowHeight) * .5, 15, 20);

  fill(snowFill2);
  noStroke();
  ellipse( 80, (frameCount % windowHeight) * .75, 10, 15);
  pop();
}


function treeStump( x, y, w, h){

  translate( x, y);
  scale( w, h);

  fill('brown');
  noStroke();
  rect( 60, 650, 50, -70);

}

function tree( x1, y1, x2, y2, x3, y3){
  fill('green');
  noStroke();
  triangle( 50, 580, 85, 400, 120, 580);



}
