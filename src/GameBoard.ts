
module Euchre {

    export class GameBoard extends Phaser.State {

        private _blueScore: Phaser.Text;
        private _redScore: Phaser.Text;
        private _blueTricks: Phaser.Text;
        private _redTricks: Phaser.Text;
        private _leftPlayer: Player;
        private _partnerPlayer: Player;
        private _rightPlayer: Player;
        private _selfPlayer: Player;
        private _currentPlayer: Player;
        private _dealer: Player;
        private _currentHand: Hand;
        private _redPlayerBox: Phaser.Rectangle;
        private _bluePlayerBox: Phaser.Rectangle;

        background: Phaser.Sprite;
        deck: EuchreDeck;

        create() {

            this.background = this.add.sprite(0, 0, 'background');
            this.background.width = this.game.width;
            this.background.height = this.game.height;

            this.deck = new EuchreDeck();

            this.setupPlayers();
            this.dealCards();
        }

        render() {
            this.renderTeamScores();
            this.renderTeamTrickScores();
            this.renderTeamBoxes();
        }

        update() {


        }
        
        playCard(player: Player, card: CardSprite) {

            //this._currentPlayer.takeTurn(this);
            //this.setNextPlayer();
        }

        private setNextPlayer() {

            if (this._currentPlayer == this._leftPlayer) {

                this._currentPlayer = this._partnerPlayer;

            } else if (this._currentPlayer == this._partnerPlayer) {

                this._currentPlayer = this._rightPlayer;

            } else if (this._currentPlayer == this._rightPlayer) {

                this._currentPlayer = this._selfPlayer;

            } else if (this._currentPlayer == this._selfPlayer) {

                this._currentPlayer = this._leftPlayer;
            }
        }

        private renderTeamScores() {

            var blueText = this.game.add.text(this.game.width - 120, 10, 'Blue:', null);
            blueText.scale.setTo(0.5);
            blueText.font = 'Segoe UI';
            blueText.fontSize = 50;
            blueText.fontWeight = 'bold';
            blueText.stroke = 'white';
            blueText.strokeThickness = 6;
            blueText.fill = 'blue';

            this._blueScore = this.game.add.text(blueText.x + blueText.width + 4, blueText.y, '0', null);
            this._blueScore.scale.setTo(0.5);
            this._blueScore.font = 'Segoe UI';
            this._blueScore.fontSize = 50;
            this._blueScore.stroke = 'white';
            this._blueScore.strokeThickness = 6;
            this._blueScore.fill = 'blue';

            var redText = this.game.add.text(this.game.width - 120, 40, ' Red:', null);
            redText.scale.setTo(0.5);
            redText.font = 'Segoe UI';
            redText.fontSize = 50;
            redText.fontWeight = 'bold';
            redText.stroke = 'white';
            redText.strokeThickness = 6;
            redText.fill = 'red';

            this._redScore = this.game.add.text(redText.x + redText.width + 4, redText.y, '0', null);
            this._redScore.scale.setTo(0.5);
            this._redScore.font = 'Segoe UI';
            this._redScore.fontSize = 50;
            this._redScore.stroke = 'white';
            this._redScore.strokeThickness = 6;
            this._redScore.fill = 'red';
        }

        private renderTeamTrickScores() {

            var blueTricks = this.game.add.text(this.game.width - 120, this.game.height - 40, 'Tricks:', null);
            blueTricks.scale.setTo(0.5);
            blueTricks.font = 'Segoe UI';
            blueTricks.fontSize = 50;
            blueTricks.fontWeight = 'bold';
            blueTricks.stroke = 'white';
            blueTricks.strokeThickness = 6;
            blueTricks.fill = 'blue';

            this._blueTricks = this.game.add.text(blueTricks.x + blueTricks.width + 4, blueTricks.y, '0', null);
            this._blueTricks.scale.setTo(0.5);
            this._blueTricks.font = 'Segoe UI';
            this._blueTricks.fontSize = 50;
            this._blueTricks.stroke = 'white';
            this._blueTricks.strokeThickness = 6;
            this._blueTricks.fill = 'blue';

            var redTricks = this.game.add.text(20, 10, 'Tricks:', null);
            redTricks.scale.setTo(0.5);
            redTricks.font = 'Segoe UI';
            redTricks.fontSize = 50;
            redTricks.fontWeight = 'bold';
            redTricks.stroke = 'white';
            redTricks.strokeThickness = 6;
            redTricks.fill = 'red';

            this._redTricks = this.game.add.text(redTricks.x + redTricks.width + 4, redTricks.y, '0', null);
            this._redTricks.scale.setTo(0.5);
            this._redTricks.font = 'Segoe UI';
            this._redTricks.fontSize = 50;
            this._redTricks.stroke = 'white';
            this._redTricks.strokeThickness = 6;
            this._redTricks.fill = 'red';
        }
        
        private renderTeamBoxes() {
            var redRectangle = new Phaser.Rectangle(0, 0, 200, 100);
            this.game.debug.geom(redRectangle, 'Red')
        }

        resetScores() {

            this._blueScore.text = '0';
            this._redScore.text = '0';
            this._blueTricks.text = '0';
            this._redTricks.text = '0';
        }

        private setupPlayers() {

            this._leftPlayer = new Player(PlayerType.Computer, SeatType.Left);
            this._partnerPlayer = new Player(PlayerType.Computer, SeatType.Partner);
            this._rightPlayer = new Player(PlayerType.Computer, SeatType.Right);
            this._selfPlayer = new Player(PlayerType.Human, SeatType.Self);
            this._dealer = this._selfPlayer;
            this._currentPlayer = this._leftPlayer;
        }

        private dealCards() {

            if (this._dealer == this._leftPlayer) {

                this.dealSomeCards(3, this._partnerPlayer);
                this.dealSomeCards(2, this._rightPlayer);
                this.dealSomeCards(3, this._selfPlayer);
                this.dealSomeCards(2, this._leftPlayer);
                this.dealSomeCards(2, this._partnerPlayer);
                this.dealSomeCards(3, this._rightPlayer);
                this.dealSomeCards(2, this._selfPlayer);
                this.dealSomeCards(3, this._leftPlayer);
                
                return;
            } else if (this._dealer == this._partnerPlayer) {

                this.dealSomeCards(3, this._rightPlayer);
                this.dealSomeCards(2, this._selfPlayer);
                this.dealSomeCards(3, this._leftPlayer);
                this.dealSomeCards(2, this._partnerPlayer);
                this.dealSomeCards(2, this._rightPlayer);
                this.dealSomeCards(3, this._selfPlayer);
                this.dealSomeCards(2, this._leftPlayer);
                this.dealSomeCards(3, this._partnerPlayer);

                return;
            } else if (this._dealer == this._rightPlayer) {

                this.dealSomeCards(3, this._selfPlayer);
                this.dealSomeCards(2, this._leftPlayer);
                this.dealSomeCards(3, this._partnerPlayer);
                this.dealSomeCards(2, this._rightPlayer);
                this.dealSomeCards(2, this._selfPlayer);
                this.dealSomeCards(3, this._leftPlayer);
                this.dealSomeCards(2, this._partnerPlayer);
                this.dealSomeCards(3, this._rightPlayer);

                return;
            } else if (this._dealer == this._selfPlayer) {

                this.dealSomeCards(3, this._leftPlayer);
                this.dealSomeCards(2, this._partnerPlayer);
                this.dealSomeCards(3, this._rightPlayer);
                this.dealSomeCards(2, this._selfPlayer);
                this.dealSomeCards(2, this._leftPlayer);
                this.dealSomeCards(3, this._partnerPlayer);
                this.dealSomeCards(2, this._rightPlayer);
                this.dealSomeCards(3, this._selfPlayer);
                
                return;
            }

            throw new Error("Dealer is not set.");
        }

        private dealSomeCards(numberOfCards: number, player: Player) {

            for (var i = 0; i < numberOfCards; i++) {
                player.addCardToHand(this.deck.dealCard(), this.game);
            }
        }

        get currentHand(): Hand {
            return this._currentHand;
        }
    }
}