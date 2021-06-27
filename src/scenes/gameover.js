class Gameover extends Phaser.Scene {
    constructor() {
        super("gameScene");
    }
    preload() {
        // load audio
        this.load.image('sofield', './assets/Landscape2.png');
    }
    create() {
        this.sofield = this.add.tileSprite(0, 0, 640, 480, 'sofield').setOrigin(0, 0);
        // show menu text
        //this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'DragonStrike', menuConfig).setOrigin(0.5);
        //this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        //menuConfig.backgroundColor = '#00FF00';
        //menuConfig.color = '#000';
        //this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start('menuScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('playScene');    
        }
      }
}