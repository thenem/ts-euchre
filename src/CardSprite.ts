
module Euchre {

    export class CardSprite extends Phaser.Sprite {

        private _card: Card;
        private _seatType: SeatType;

        constructor(card: Card, seatType: SeatType, game: Phaser.Game, x?: number, y?: number) {

            super(game, x, y, 'cards', CardType.Back);

            this._card = card;
            this._seatType = seatType;

            this.anchor.setTo(0.5);
            this.animations.add('flip', [this._card.cardType]);

            game.add.existing(this);
        }

        get perspective(): SeatType {

            return this._seatType;
        }

        set perspective(value: SeatType) {

            if (this._seatType != value) {

                switch (value) {

                    case SeatType.Left:
                        this.angle = 90;
                        break;
                    case SeatType.Partner:
                        this.angle = 180;
                        break;
                    case SeatType.Right:
                        this.angle = 270;
                        break;
                    case SeatType.Self:
                        this.angle = 0;
                        break;
                    default:
                        this.angle = 0;
                        break;
                }

                this._seatType = value;
            }
        }

        flipCard() {

            this.animations.play('flip');
        }
    }

    export class Card {

        private _cardType: CardType;
        private _suit: Suit;
        private _rank: Rank;

        constructor(cardType: CardType) {

            var cardTypeString = CardType[cardType];
            var cardTypeSplit = cardTypeString.split('Of', 2);

            this._cardType = cardType;
            this._rank = Suit[cardTypeSplit[0]];
            this._suit = Rank[cardTypeSplit[1]];
        }

        get cardType(): CardType {

            return this._cardType;
        }

        get suit(): Suit {

            return this._suit;
        }

        get rank(): Rank {

            return this._rank;
        }
    }
}