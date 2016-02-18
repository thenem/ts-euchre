
module TsEuchre {

    export class Hand {

        private _leadCard: CardSprite;
        private _leadPlayer: Player;
        private _leftCard: CardSprite;
        private _partnerCard: CardSprite;
        private _rightCard: CardSprite;
        private _selfCard: CardSprite;
        private _trumpSuit: Suit;
        private _leftBowerSuit: Suit;

        constructor(trumpSuit: Suit) {

            this._trumpSuit = trumpSuit;
            switch (trumpSuit) {
                case Suit.Clubs:
                    this._leftBowerSuit = Suit.Spades;
                    break;
                case Suit.Diamonds:
                    this._leftBowerSuit = Suit.Hearts;
                    break;
                case Suit.Hearts:
                    this._leftBowerSuit = Suit.Diamonds;
                    break;
                case Suit.Spades:
                    this._leftBowerSuit = Suit.Clubs;
                    break;
            }
        }

        get leadCard(): CardSprite {
            return this._leadCard;
        }

        get leadPlayer(): Player {
            return this._leadPlayer;
        }

        get leftCard(): CardSprite {
            return this._leftCard;
        }

        set leftCard(value: CardSprite) {
            this._leftCard = value;
        }

        get partnerCard(): CardSprite {
            return this._partnerCard;
        }

        set partnerCard(value: CardSprite) {
            this._partnerCard = value;
        }

        get rightCard(): CardSprite {
            return this._rightCard;
        }

        set rightCard(value: CardSprite) {
            this._rightCard = value;
        }

        get selfCard(): CardSprite {
            return this._selfCard;
        }

        set selfCard(value: CardSprite) {
            this._selfCard = value;
        }

        get leftBowerSuit(): Suit {
            return this._leftBowerSuit;
        }

        get trumpSuit(): Suit {
            return this._trumpSuit;
        }

        addLead(card: CardSprite, player: Player) {
            this._leadCard = card;
            this._leadPlayer = player;
        }
    }
}