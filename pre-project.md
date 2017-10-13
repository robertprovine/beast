# Beast-Game
remake of the classic DOS game Beast

*** Robert Provine / 4/12/2017 ***

# [Beast] Proposal

## What is [Beast]?

Beast is a classic text/grid based DOS game where the user (a diamond shape) tries to crush beasts ('H' shapes) between blocks. The blocks can be fixed or moveable depending on the color. The user has the ability to crush a beast if there is a beast directly snuggled within blocks, or if a beast is directly between a wall and a block.

## Wireframe

(http://i.imgur.com/ugrgSGw.jpg)
(http://i.imgur.com/KyA17ZW.jpg)
(http://i.imgur.com/2HES8lf.jpg)
(http://i.imgur.com/PYUfcmU.jpg)

## Initial thoughts on game structure

It is essentially a randomly generated grid of blocks, stationary objects and placement of x number of beasts and one diamond shaped character. The inputs events it could accept during the game play state would be the four arrow keys to navigate the diamond. The beasts would have to be moved toward the direction of the diamond at timed intervals. I believe a callback function triggered by repeated clock events for each beast would have to determine their movements. Challenges will include trying to figure out how to get the beasts directed toward the diamond, getting the blocks to move when pushed and structuring my code well. Overcoming DRYness is not as much of a hurdle for me than creating readable, simple, well structured code. I've thought about the logic needed to move blocks. Essentially, if the user pressed an arrow key in a particular direction, then check to see if there is a block present, if so, then iterate down that direction to see if there is an empty space down the line. If so, then fill the space with a new block, and replace the block right next to you with yourself.

## Phases of Completion

#### phase-3
- Creating a grid in html and css with a beast character, the diamond character, the moveable blocks character and the fixed block character.

- filling of 2 dimensional array with characters, then having the html/css generated in the format discovered and designed in the previous step.

#### phase-2
- generating the random layout based on varying percentages of objects (most likely 1 dimensional array shuffle to populate the 2 dimensional array)
enable diamond to move blocks

#### phase-1
- beast crushing logic
- getting beasts to move at timed intervals
#### phase-0
- integrating more game state in the form of score and lives
- winning and losing states



## Links and Resources

(https://www.youtube.com/watch?v=kimPRQTDX6M)
