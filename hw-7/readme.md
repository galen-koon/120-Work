### Galen Koon, 50

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

The original code can be broken up into segments dealing with variables and calling functions.
Lines 3-10 deal with establishing a global object known as ball. This object has variables within it, that are established and will be called later on in the sketch.

Lines 12-15 call the setup function, which creates the canvas and establishes the white background.

Lines 19-34 call the draw function, which will loop continuously. Lines 21 and 22 change the ball's position using +=, while multiplying it by ball.scale_x or ball.scale_y, which are determined by the mouse being pressed. This multiplies it by itself so it can move.

Lines 25-27 deal with the first if statement. This has a logical or operator attached to it. This means that if either the ball's position is greater than or equal to width, or the ball's position is less than
or equal to zero, than the ball's rate of movement in the x direction will multiply by -1.

Lines 28-30 deal with the second if statement, which is like the first but is in the y direction.

Lines 32 and 33 create the ellipse, which is filled with white and will have the position of ball.x and ball.y, and have a diameter of 40.

Lines 36-39 deal with the mousePressed function, which in this case affects the rate of change of the balls positioning. This is done using the map tool, which is reading the position of the mouse on the canvas. 

## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->
