import { Card } from './card';
import { SeatType } from './seat-type';

export class CardSprite extends Phaser.GameObjects.Sprite {
    private NUM_CARDS_IN_ROW = 13;
    private _flipAnimation: Phaser.Animations.Animation;

    constructor(
        card: Card,
        seatType: SeatType,
        scene: Phaser.Scene,
        x: number,
        y: number
    ) {
        super(scene, x, y, 'cards', 53);

        this.setOrigin(0.5);
        this._flipAnimation = this.anims.create({
            key: 'flip',
            frames: [{ frame: this.getCardFrame(card) }]
        }) as Phaser.Animations.Animation;
    }

    private getCardFrame(card?: Card): number {
        if (!card) {
            return 53;
        }

        const frame = this.NUM_CARDS_IN_ROW * card.suit + card.rank;
        return frame;
    }
}
