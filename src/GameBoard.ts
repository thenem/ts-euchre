
module Euchre {
    
    export class GameBoard extends Phaser.State {
        
        background: Phaser.Sprite;
        
        create() {
            
            this.background = this.add.sprite(0, 0, 'background');
            this.background.width = this.game.width;
            this.background.height = this.game.height;
            
            var card = new CardSprite(new Card(CardType.AceOfClubs), this.game, this.game.world.centerX, this.game.world.centerY);
        }
    }
}