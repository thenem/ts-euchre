
module Euchre {
    
    export class MainMenu extends Phaser.State {
        
        background: Phaser.Sprite;
        
        create() {
            
            this.background = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'titlepage');
            this.background.anchor.setTo(0.5);
            this.background.alpha = 0;
            
            this.add.tween(this.background).to({ alpha: 1 }, 1000, Phaser.Easing.Bounce.InOut, true);
            
            this.input.onDown.addOnce(this.fadeOut, this);
        }
        
        fadeOut() {
            
            var tween = this.add.tween(this.background).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        }
        
        startGame() {
            
            this.game.state.start('GameBoard', true, false);
        }
    }
}