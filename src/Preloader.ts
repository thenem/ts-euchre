
module Euchre {
    
    export class Preloader extends Phaser.State {
        
        preloadBar: Phaser.Sprite;
        
        preload() {
            
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            
            this.load.image('titlepage', 'images/titlepage.jpg');
            this.load.image('background', 'images/background.jpg');
            this.load.spritesheet('cards', 'images/cards.png', 79, 123, 53);
        }
        
        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }
        
        startMainMenu() {
            
            this.game.state.start('MainMenu', true, false);
        }
    }
}