import { EuchreDeck } from '../models/euchre-deck';

export class GameBoard extends Phaser.Scene {
    deck!: EuchreDeck;

    constructor() {
        super('game-board');
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        const background = this.add.image(0, 0, 'background');
        background.setDisplaySize(width * 2, height * 2);

        this.deck = new EuchreDeck();

        this.setupPlayers();
        this.deal;
    }
}
