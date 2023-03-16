import Phaser from 'phaser';

export class MainMenu extends Phaser.Scene {
    background!: Phaser.GameObjects.Image;

    constructor() {
        super('main-menu');
    }

    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.background = this.add.image(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'titlepage'
        );
        // this.background.anchor.setTo(0.5);
        this.background.setOrigin(0.5);
        this.background.alpha = 0;

        // this.add.tween(this.background).to({ alpha: 1 }, 1000, Phaser.Easing.Bounce.InOut, true);
        this.add.tween({
            targets: this.background,
            alpha: 1,
            duration: 1000,
            ease: 'Linear'
        });

        var playGameText = this.make.text({
            x: width / 2,
            y: height / 2 + 250,
            text: 'Press any key to play',
            style: {
                font: '18px monospace',
                color: '#ffffff'
            }
        });

        playGameText.setOrigin(0.5, 0.5);

        this.input.keyboard.on('keydown', () => {
            this.tweens
                .add({
                    targets: [this.background, playGameText],
                    alpha: 0,
                    duration: 1000,
                    ease: 'Linear'
                })
                .on('complete', () => {
                    playGameText.destroy();
                    this.background.destroy();
                    this.startGame();
                });
        });
    }

    startGame() {
        this.game.scene.start('game-board');
    }
}
