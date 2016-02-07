
module Euchre {
    
    export class GameBoard extends Phaser.State {
        
        background: Phaser.Sprite;
        deck: EuchreDeck;
        
        create() {
            
            this.background = this.add.sprite(0, 0, 'background');
            this.background.width = this.game.width;
            this.background.height = this.game.height;
            
            this.deck = new EuchreDeck();
            var card = new CardSprite(this.deck.dealCard(), this.game, this.game.world.centerX, this.game.world.centerY);
        }
    }
}