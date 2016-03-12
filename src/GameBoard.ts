
module Euchre {

    export class GameBoard extends Phaser.State {

        private _blueScore: Phaser.Text;
        private _redScore: Phaser.Text;
        private _blueTricks: Phaser.Text;
        private _redTricks: Phaser.Text;
        private _redLeftBadge: Phaser.Text;
        private _redRightBadge: Phaser.Text;
        private _bluePartnerBadge: Phaser.Text;
        private _blueSelfBadge: Phaser.Text;
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
            this.renderTeamNames();
            this.updateDealerBadges();
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
        
        private renderTeamNames() {
            
            var redLeftName = this.game.add.text(20, 120, 'Computer', null);
            redLeftName.scale.setTo(0.5);
            redLeftName.font = 'Segoe UI';
            redLeftName.fontSize = 30;
            redLeftName.fontWeight = 'bold';
            redLeftName.stroke = 'white';
            redLeftName.strokeThickness = 3;
            redLeftName.fill = 'red';
            
            this._redLeftBadge = this.game.add.text(redLeftName.x + redLeftName.width + 4, redLeftName.y, '', null);
            this._redLeftBadge.scale.setTo(0.5);
            this._redLeftBadge.font = 'Segoe UI';
            this._redLeftBadge.fontSize = 30;
            this._redLeftBadge.fontWeight = 'bold';
            this._redLeftBadge.stroke = 'white';
            this._redLeftBadge.strokeThickness = 3;
            this._redLeftBadge.fill = 'red';
            
            var redRightName = this.game.add.text(this.game.width - 140, 120, 'Computer', null);
            redRightName.scale.setTo(0.5);
            redRightName.font = 'Segoe UI';
            redRightName.fontSize = 30;
            redRightName.fontWeight = 'bold';
            redRightName.stroke = 'white';
            redRightName.strokeThickness = 3;
            redRightName.fill = 'red';
            
            this._redRightBadge = this.game.add.text(redRightName.x + redRightName.width + 4, redRightName.y, '', null);
            this._redRightBadge.scale.setTo(0.5);
            this._redRightBadge.font = 'Segoe UI';
            this._redRightBadge.fontSize = 30;
            this._redRightBadge.fontWeight = 'bold';
            this._redRightBadge.stroke = 'white';
            this._redRightBadge.strokeThickness = 3;
            this._redRightBadge.fill = 'red';
            
            var bluePartnerName = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 140, 'Partner', null);
            bluePartnerName.scale.setTo(0.5);
            bluePartnerName.anchor.setTo(0.5);
            bluePartnerName.font = 'Segoe UI';
            bluePartnerName.fontSize = 30;
            bluePartnerName.fontWeight = 'bold';
            bluePartnerName.stroke = 'white';
            bluePartnerName.strokeThickness = 3;
            bluePartnerName.fill = 'blue';
            
            this._bluePartnerBadge = this.game.add.text(bluePartnerName.x + bluePartnerName.width + 4, bluePartnerName.y, '', null);
            this._bluePartnerBadge.scale.setTo(0.5);
            this._bluePartnerBadge.anchor.setTo(0.5);
            this._bluePartnerBadge.font = 'Segoe UI';
            this._bluePartnerBadge.fontSize = 30;
            this._bluePartnerBadge.fontWeight = 'bold';
            this._bluePartnerBadge.stroke = 'white';
            this._bluePartnerBadge.strokeThickness = 3;
            this._bluePartnerBadge.fill = 'blue';
            
            var blueSelfName = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 140, 'You', null);
            blueSelfName.scale.setTo(0.5);
            blueSelfName.anchor.setTo(0.5);
            blueSelfName.font = 'Segoe UI';
            blueSelfName.fontSize = 30;
            blueSelfName.fontWeight = 'bold';
            blueSelfName.stroke = 'white';
            blueSelfName.strokeThickness = 3;
            blueSelfName.fill = 'blue';
            
            this._blueSelfBadge = this.game.add.text(blueSelfName.x + blueSelfName.width + 4, blueSelfName.y, '', null);
            this._blueSelfBadge.scale.setTo(0.5);
            this._blueSelfBadge.anchor.setTo(0.5);
            this._blueSelfBadge.font = 'Segoe UI';
            this._blueSelfBadge.fontSize = 30;
            this._blueSelfBadge.fontWeight = 'bold';
            this._blueSelfBadge.stroke = 'white';
            this._blueSelfBadge.strokeThickness = 3;
            this._blueSelfBadge.fill = 'blue';
        }

        resetScores() {

            this._blueScore.text = '0';
            this._redScore.text = '0';
            this._blueTricks.text = '0';
            this._redTricks.text = '0';
        }
        
        private updateDealerBadges() {
            
            this.clearBadges();
            
            switch (this._dealer.seat) {
                case SeatType.Left:
                    this._redLeftBadge.text = '(D)';
                    break;
                case SeatType.Right:
                    this._redRightBadge.text = '(D)';
                    break;
                case SeatType.Partner:
                    this._bluePartnerBadge.text = '(D)';
                    break;
                case SeatType.Self:
                    this._blueSelfBadge.text = '(D)';
                    break;
            }
        }
        
        private clearBadges() {
            this._redRightBadge.text = '';
            this._redLeftBadge.text = '';
            this._bluePartnerBadge.text = '';
            this._blueSelfBadge.text = '';
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