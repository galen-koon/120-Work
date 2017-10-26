### Galen Koon, 50

[Live Sketch](https://galen-koon.github.io/120-Work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing
All of the line references in this refer to the lines from the original code. They may be different than in my altered code.

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

First, I decided to change the canvas to fit the entire window (line 13), because I like the aesthetics better.
The goals of this piece were to change the aesthetics and the feel of it, while still maintaining your original idea. I wanted to include a button, an ability to "reset" the image, and much brighter colors. I also wanted to add a jittery effect that would in essence move the ball around the image faster. This was accomplished by a changing background, which would hide the ball's previous path whenever it is called. The button allows the background to be reset to white, thus cleaning the image. The mouse, when pressed, does two things. First, it changes the background color randomly, thus making the image more pleasing to look at. Second, it randomly changes the color of the ball for as long as the mouse is held. This makes the ball more interesting and also creates cool patterns on screen, as opposed to simply a white ball. I like the option as well of being able to determine how long the ball is colorful before it returns to being white.
