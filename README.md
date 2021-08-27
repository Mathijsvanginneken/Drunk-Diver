Drunk Diver

Play me

https://mathijsvanginneken.github.io/Drunk-Diver/

Description

As the Drunk Diver you help cleaning the oceans while avoiding the sharks. For collecting the trash and special beers you receive points in order to get a high score. There are special beers floating around you can collect whom make you “drunk” and change the pictures in the game according to your “drunk level”. 


MVP 

- You can click on your mouse anywhere in the map and the player goes to that position
- The player moves horizontally and vertically
- The player gets 1 point when colliding with the trash 20 points when colliding with the special beers
- the player get "drunk" when colliding with the special beers and the "drunk level" increases
- When the "drunk level" increases the pictures in the game change
- When the player collides with a shark it's game over
- The sharks come in the screen from the leftside from different angles

script.js

- togglePlay() {}
- letsPlay(){}
- checkTrashCollisions() {}
- checkBeerCollisions() {}
- checkSharkCollisions() {}
- rawScore() {}
- drawScore2() {}
- drawScore3() {}
- startGameFromBegin() {}
- playerLost() {}
- startGameFromLosePage() {}

player.js

- Player{}

 update(){}
 
 draw(){}

obstacle_trash.js

- ObstacleTrash (canvasContext, positionX, positionY, width, height, speed){}

 draw() {}
 
 move() {}

obstacle_shark.js

- ObstacleShark (canvasContext, positionX, positionY, width, height, speed){}

 draw() {}
 
 move() {}

obstacle_beer.js

- ObstacleBeer (canvasContext, positionX, positionY, width, height, speed){}

 draw() {}
 
 move() {}

mouse_activity.js

background.js

- Background (canvasContext){}

 draw(){}
