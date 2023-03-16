import { Actor, Sprite, vec, Vector } from 'excalibur';
import { Card } from './models/card';
import { PlayerType } from './models/player-type';
import { SeatType } from './models/seat-type';
import { resources } from './resources';

export class Player extends Actor {
    private _hand: Sprite[] = [];
    private _ready = false;

    constructor(public playerType: PlayerType, public seat: SeatType) {
        super();
    }

    addCardToHand(card: Card) {}

    private getPosition(): Vector {
        switch (this.seat) {
            case SeatType.left:
                this.positionCardToLeft(card);
                break;
            case SeatType.partner:
                this.positionCardAcross(card);
                break;
            case SeatType.right:
                this.positionCardToRight(card);
                break;
            case SeatType.self:
                this.positionCardToSelf(card);
                card.inputEnabled = true;
                card.events.onInputDown.add(() => this.clickCard(card), this);
                break;
        }
    }

    private getLeftPosition(): Vector {
        var game = card.game;
        var lastCard = _(this._hand).last();
        card.perspective = SeatType.Left;

        if (lastCard != null) {
            card.x = lastCard.x;
            card.y = lastCard.y + lastCard.height / 2;

            game.add.existing(card);
        } else {
            card.x = 80;
            card.y = 190;

            game.add.existing(card);
        }
    }

    private positionCardAcross(card: CardSprite) {
        var game = card.game;
        var lastCard = _(this._hand).last();
        card.perspective = SeatType.Partner;

        if (lastCard != null) {
            card.x = lastCard.x + lastCard.width / 1.3;
            card.y = lastCard.y;

            game.add.existing(card);
        } else {
            card.x = 270;
            card.y = 80;

            game.add.existing(card);
        }
    }

    private positionCardToRight(card: CardSprite) {
        var game = card.game;
        var lastCard = _(this._hand).last();
        card.perspective = SeatType.Right;

        if (lastCard != null) {
            card.x = lastCard.x;
            card.y = lastCard.y + lastCard.height / 2;

            game.add.existing(card);
        } else {
            card.x = game.width - 80;
            card.y = 190;

            game.add.existing(card);
        }
    }

    private positionCardToSelf(card: CardSprite) {
        var game = card.game;
        var lastCard = _(this._hand).last();
        card.perspective = SeatType.Self;

        if (lastCard != null) {
            card.x = lastCard.x + lastCard.width / 1.3;
            card.y = lastCard.y;

            game.add.existing(card);
        } else {
            card.x = 270;
            card.y = game.height - 80;

            game.add.existing(card);
        }
    }
}
