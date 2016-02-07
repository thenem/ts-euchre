
module Euchre {
    
    export class CardSprite extends Phaser.Sprite {
        
        constructor(public card: Card, game: Phaser.Game, x: number, y: number) {
            
            super(game, x, y, 'cards', CardType.Back);
            
            this.anchor.setTo(0.5);
            this.animations.add('flip', [ card.cardType ], 1, false, true);
            
            game.add.existing(this);
        }
        
        update() {
            
            //
        }
        
        flipCard() {
            
            this.animations.play('flip').stop();
        }
    }
}