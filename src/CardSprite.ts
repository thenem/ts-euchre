
module Euchre {
    
    export class CardSprite extends Phaser.Sprite {
        
        constructor(public card: Card, game: Phaser.Game, x: number, y: number) {
            
            super(game, x, y, 'cards', CardType.Back);
            
            this.anchor.setTo(0.5);
            this.bringToTop();
            
            game.add.existing(this);
        }
        
        update() {
            
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) ||
                this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            
                if (this.frame == CardType.Back) {
                    
                    this.frame = this.card.cardType;
                } else {
                    
                    this.frame = CardType.Back;
                }
            }
        }
    }
}