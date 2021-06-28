/*
Sean Tran
DragonStrike
6/27/2021
Project Completion Time: 13-14 hours

Point Breakdown:
Finishing the Tutorial: an automatic 20 points.

Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60):
I redesigned the game's theme/aesthetic to fantasy with original sounds and drawings that I made.

Display the time remaining (in seconds) on the screen (10)
I created a timer on the top right of the screen.

TOTAL POINTS: 20 + 60 + 10 = 90

Credits:
Pixel Font: Made in https://fontmeme.com/pixel-fonts/
Sounds: Made in https://beepbox.co
Pixel Sprites: Made in https://www.piskelapp.com
Referenced Website for Timer: https://stackoverflow.com/questions/63870145/phaser-3-create-a-game-clock-with-minutes-and-seconds
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