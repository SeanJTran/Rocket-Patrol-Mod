/*
Sean Tran
DragonStrike
6/27/2021
Project Completion Time: 11-13 hours

Point Breakdown
Finishing the Tutorial: an automatic 20 points.
I finished the tutorial.

Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60):
I redesigned the game's theme/aesthetic to fantasy with original sounds and drawings that I made.

Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20):
I created new sprites for the rocket and spaceships. I also made a new explosion animation.

TOTAL POINTS: 20 + 60 + 20 = 100
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Gameover ]
}
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;