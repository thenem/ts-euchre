export class BootScene extends Phaser.Scene {
    constructor() {
        super('boot');
    }

    preload() {}

    create() {
        this.game.scene.start('preloader');
    }
}
