# BEAST
remake of the classic DOS game Beast

** Robert Provine 4/16/2017 **

## What is Beast?

Beast is a classic text/grid based DOS game where the user (a diamond shape) tries to crush beasts ('H' shapes) between blocks. The blocks can be fixed or moveable depending on the color. The user has the ability to crush a beast if there is a beast directly snuggled within blocks, or if a beast is directly between a wall and a block.

## Technologies Used

I used DOM (Document Object Model) manipulation with javascript to render the game in the browser.

## Approach Taken

I wrote out some game logic in my notebook prior to implementing any code. I first took notes on how I wanted to use a class to create a reusable interface to pixel perfect DOM grid manipulation. I essentially made an HTML and CSS free interface that only uses Javascript to generate the grid through the DOM and appending it to the body upon a call of its show() method. Prior to coding the Grid class, I manually played with CSS and HTML to figure out the perfect way to style the type of grid layout that I wanted the class to express. I only interface with the class using its changeElementColor method which changes the color of a grid element given its row and column coordinates and a color. My original version prior to indroducing the diamond shape and the H character only used background color changes to the grid elements to represent the entities in the game. After implementing the class, I figured out how I could shuffle an array of all the right proportions of green blocks, yellow ones, the player and beasts. The shuffled array is rendered piece by piece into the inner portion of the grid inside the walls. Arrow logic followed, in order to navigate the player to traverse through blank space and not hit a wall or block. Afterwards, the logic to move green blocks became the focus. I spent Saturday figuring out the Beast traversal which was rather challenging. This was finally followed by getting all of the beasts to work in sync, one by one. Lastly, I implemented the diamond and H characters to replace simple unique background colors. I did this by hacking the changeElementColor method in my Grid class to change an incoming argument of 'red' to transform into a red H beast and an 'aqua' color argument into the diamond character.

## User Stories

As a user, I want to be able to experience the nostalgia of playing BEAST with a modern edge in a web browser, the classic DOS game that my father introduced me to at a young age. I had such great memories of it trying to crush the beasts. I want to watch the H characters try to chase me while I maneuver blocks to squish them.

## Wireframes

(http://i.imgur.com/ugrgSGw.jpg)
(http://i.imgur.com/KyA17ZW.jpg)
(http://i.imgur.com/2HES8lf.jpg)
(http://i.imgur.com/PYUfcmU.jpg)

## How To Use Instructions

Press space bar to start. After 3 seconds, the beasts (H characters) start moving. Try to squish the beasts between blocks. Navigate with the arrow keys to maneuver through the forest of green and yellow blocks. Green blocks are moveable and yellow blocks are stationary hard blocks. Beasts can only be squished directly between green blocks or against a yellow block. Avoid getting eaten by a beast! They are hungry and will chase you and eat you if you don't squish them.

## Unsolved Problems

I need refactoring and better code organization going forward if I were to continue to work on the project. I feel that as logic becomes more complex, even small bits of code that solve problems in a seemingly short but not perfectly DRY fashion exponentially increases in size as the project grows and features are added which need to be injected everywhere where an instance of the new feature is needed. I believe that having an ability to envision a much more vast scope of future features and knowing how to set up a good strong foundation of structure to enable scalable growth is key. Unsolved problems include implementing a more optimal beast traversal to find the player. It is very good already, but a more optimal solution could be fun to try and hack.

