import Phaser from 'phaser';
import { GameBoard } from './scenes/game-board';
import { MainMenu } from './scenes/main-menu';
// import { BootScene } from './scenes/boot';
import { Preloader } from './scenes/preloader';

class EuchreGame extends Phaser.Game {
    constructor() {
        super({
            type: Phaser.AUTO,
            parent: 'game',
            width: 800,
            height: 600
        });

        // this.scene.add('boot', BootScene, false);
        this.scene.add('preloader', Preloader, false);
        this.scene.add('main-menu', MainMenu, false);
        this.scene.add('game-board', GameBoard, false);

        this.scene.start('preloader');
    }
}

const game = new EuchreGame();
