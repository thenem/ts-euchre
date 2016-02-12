
module Euchre {

    export class Hand {

        private _leadCard: CardSprite;
        private _leadPlayer: Player;
        private _leftCard: CardSprite;
        private _partnerCard: CardSprite;
        private _rightCard: CardSprite;
        private _selfCard: CardSprite;

        addLeadCard(card: CardSprite, player: Player) {

            this._leadCard = card;
            this._leadPlayer = player;
        }
    }
}