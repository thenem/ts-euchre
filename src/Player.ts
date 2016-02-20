
module Euchre {

    export class Player {

        private _hand: CardSprite[] = [];
        private _ready: boolean = false;

        constructor(public playerType: PlayerType, public seat: SeatType) { }

        addCardToHand(card: Card, game: Game) {

            if (this._hand.length >= 5)
                throw new Error('Player hand is full.');

            var newCard = new CardSprite(card, this.seat, game);
            this.setCardPosition(newCard);

            this._hand.push(newCard);
        }

        takeTurn(gameBoard: GameBoard) {

            if (this.seat == SeatType.Self) {
                gameBoard.game.paused = true;
            }

            gameBoard.playCard(this, this.determineCardToPlay(gameBoard.currentHand));
            this._ready = true;
        }

        get ready(): boolean {
            return this._ready;
        }

        private setCardPosition(card: CardSprite) {

            switch (this.seat) {

                case SeatType.Left:
                    this.positionCardToLeft(card);
                    break;
                case SeatType.Partner:
                    this.positionCardAcross(card);
                    break;
                case SeatType.Right:
                    this.positionCardToRight(card);
                    break;
                case SeatType.Self:
                    this.positionCardToSelf(card);
                    card.inputEnabled = true;
                    card.events.onInputDown.add(() => this.clickCard(card), this);
                    break;
            }
        }

        private clickCard(card: CardSprite) {

            if (this.seat == SeatType.Self) {

                card.game.paused = false;
                card.position.setTo(card.game.world.centerX, card.game.world.centerY + 30);

                if (card.animations.frame == CardType.Back) {
                    card.flipCard();
                }
            }
        }

        private positionCardToLeft(card: CardSprite) {

            var game = card.game;
            var lastCard = _(this._hand).last();
            if (lastCard != null) {

                card.x = lastCard.x;
                card.y = lastCard.y + lastCard.height;

                game.add.existing(card);

            } else {

                card.x = 5;
                card.y = 100;

                game.add.existing(card);
            }
        }

        private positionCardAcross(card: CardSprite) {

            var game = card.game;
            var lastCard = _(this._hand).last();
            if (lastCard != null) {

                card.x = lastCard.x + lastCard.width;
                card.y = lastCard.y;

                game.add.existing(card);

            } else {

                card.x = 100;
                card.y = 5;

                game.add.existing(card);
            }
        }

        private positionCardToRight(card: CardSprite) {

            var game = card.game;
            var lastCard = _(this._hand).last();
            if (lastCard != null) {

                card.x = lastCard.x;
                card.y = lastCard.y + lastCard.height;

                game.add.existing(card);

            } else {

                card.x = game.width - 100;
                card.y = 300;

                game.add.existing(card);
            }
        }

        private positionCardToSelf(card: CardSprite) {

            var game = card.game;
            var lastCard = _(this._hand).last();
            if (lastCard != null) {

                card.x = lastCard.x + lastCard.width;
                card.y = lastCard.y;

                game.add.existing(card);

            } else {

                card.x = 100;
                card.y = game.height - 100;

                game.add.existing(card);
            }
        }

        private determineCardToPlay(hand: Hand): CardSprite {

            if (this.seat == SeatType.Self) {
                return null;
            } else {
                return null;
            }
        }
    }

    export enum PlayerType {

        Human,
        Computer
    }
}