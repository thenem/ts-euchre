var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Euchre;
(function (Euchre) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'images/loader.png');
        };
        Boot.prototype.create = function () {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                this.game.scale.pageAlignHorizontally = true;
            }
            else {
            }
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    Euchre.Boot = Boot;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    var CardSprite = (function (_super) {
        __extends(CardSprite, _super);
        function CardSprite(card, seatType, game, x, y) {
            _super.call(this, game, x, y, 'cards', Euchre.CardType.Back);
            this._card = card;
            this._seatType = seatType;
            this.anchor.setTo(0.5);
            this.animations.add('flip', [this._card.cardType]);
            game.add.existing(this);
        }
        Object.defineProperty(CardSprite.prototype, "perspective", {
            get: function () {
                return this._seatType;
            },
            set: function (value) {
                if (this._seatType != value) {
                    switch (value) {
                        case Euchre.SeatType.Left:
                            this.angle = 90;
                            break;
                        case Euchre.SeatType.Partner:
                            this.angle = 180;
                            break;
                        case Euchre.SeatType.Right:
                            this.angle = 270;
                            break;
                        case Euchre.SeatType.Self:
                            this.angle = 0;
                            break;
                        default:
                            this.angle = 0;
                            break;
                    }
                    this._seatType = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        CardSprite.prototype.flipCard = function () {
            this.animations.play('flip');
        };
        return CardSprite;
    })(Phaser.Sprite);
    Euchre.CardSprite = CardSprite;
    var Card = (function () {
        function Card(cardType) {
            var cardTypeString = Euchre.CardType[cardType];
            var cardTypeSplit = cardTypeString.split('Of', 2);
            this._cardType = cardType;
            this._rank = Euchre.Suit[cardTypeSplit[0]];
            this._suit = Euchre.Rank[cardTypeSplit[1]];
        }
        Object.defineProperty(Card.prototype, "cardType", {
            get: function () {
                return this._cardType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Card.prototype, "suit", {
            get: function () {
                return this._suit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Card.prototype, "rank", {
            get: function () {
                return this._rank;
            },
            enumerable: true,
            configurable: true
        });
        return Card;
    })();
    Euchre.Card = Card;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    (function (CardType) {
        CardType[CardType["AceOfClubs"] = 0] = "AceOfClubs";
        CardType[CardType["TwoOfClubs"] = 1] = "TwoOfClubs";
        CardType[CardType["ThreeOfClubs"] = 2] = "ThreeOfClubs";
        CardType[CardType["FourOfClubs"] = 3] = "FourOfClubs";
        CardType[CardType["FiveOfClubs"] = 4] = "FiveOfClubs";
        CardType[CardType["SixOfClubs"] = 5] = "SixOfClubs";
        CardType[CardType["SevenOfClubs"] = 6] = "SevenOfClubs";
        CardType[CardType["EightOfClubs"] = 7] = "EightOfClubs";
        CardType[CardType["NineOfClubs"] = 8] = "NineOfClubs";
        CardType[CardType["TenOfClubs"] = 9] = "TenOfClubs";
        CardType[CardType["JackOfClubs"] = 10] = "JackOfClubs";
        CardType[CardType["QueenOfClubs"] = 11] = "QueenOfClubs";
        CardType[CardType["KingOfClubs"] = 12] = "KingOfClubs";
        CardType[CardType["AceOfDiamonds"] = 13] = "AceOfDiamonds";
        CardType[CardType["TwoOfDiamonds"] = 14] = "TwoOfDiamonds";
        CardType[CardType["ThreeOfDiamonds"] = 15] = "ThreeOfDiamonds";
        CardType[CardType["FourOfDiamonds"] = 16] = "FourOfDiamonds";
        CardType[CardType["FiveOfDiamonds"] = 17] = "FiveOfDiamonds";
        CardType[CardType["SixOfDiamonds"] = 18] = "SixOfDiamonds";
        CardType[CardType["SevenOfDiamonds"] = 19] = "SevenOfDiamonds";
        CardType[CardType["EightOfDiamonds"] = 20] = "EightOfDiamonds";
        CardType[CardType["NineOfDiamonds"] = 21] = "NineOfDiamonds";
        CardType[CardType["TenOfDiamonds"] = 22] = "TenOfDiamonds";
        CardType[CardType["JackOfDiamonds"] = 23] = "JackOfDiamonds";
        CardType[CardType["QueenOfDiamonds"] = 24] = "QueenOfDiamonds";
        CardType[CardType["KingOfDiamonds"] = 25] = "KingOfDiamonds";
        CardType[CardType["AceOfHearts"] = 26] = "AceOfHearts";
        CardType[CardType["TwoOfHearts"] = 27] = "TwoOfHearts";
        CardType[CardType["ThreeOfHearts"] = 28] = "ThreeOfHearts";
        CardType[CardType["FourOfHearts"] = 29] = "FourOfHearts";
        CardType[CardType["FiveOfHearts"] = 30] = "FiveOfHearts";
        CardType[CardType["SixOfHearts"] = 31] = "SixOfHearts";
        CardType[CardType["SevenOfHearts"] = 32] = "SevenOfHearts";
        CardType[CardType["EightOfHearts"] = 33] = "EightOfHearts";
        CardType[CardType["NineOfHearts"] = 34] = "NineOfHearts";
        CardType[CardType["TenOfHearts"] = 35] = "TenOfHearts";
        CardType[CardType["JackOfHearts"] = 36] = "JackOfHearts";
        CardType[CardType["QueenOfHearts"] = 37] = "QueenOfHearts";
        CardType[CardType["KingOfHearts"] = 38] = "KingOfHearts";
        CardType[CardType["AceOfSpades"] = 39] = "AceOfSpades";
        CardType[CardType["TwoOfSpades"] = 40] = "TwoOfSpades";
        CardType[CardType["ThreeOfSpades"] = 41] = "ThreeOfSpades";
        CardType[CardType["FourOfSpades"] = 42] = "FourOfSpades";
        CardType[CardType["FiveOfSpades"] = 43] = "FiveOfSpades";
        CardType[CardType["SixOfSpades"] = 44] = "SixOfSpades";
        CardType[CardType["SevenOfSpades"] = 45] = "SevenOfSpades";
        CardType[CardType["EightOfSpades"] = 46] = "EightOfSpades";
        CardType[CardType["NineOfSpades"] = 47] = "NineOfSpades";
        CardType[CardType["TenOfSpades"] = 48] = "TenOfSpades";
        CardType[CardType["JackOfSpades"] = 49] = "JackOfSpades";
        CardType[CardType["QueenOfSpades"] = 50] = "QueenOfSpades";
        CardType[CardType["KingOfSpades"] = 51] = "KingOfSpades";
        CardType[CardType["Back"] = 52] = "Back";
    })(Euchre.CardType || (Euchre.CardType = {}));
    var CardType = Euchre.CardType;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    (function (CardValue) {
        CardValue[CardValue["NineNoTrump"] = 1] = "NineNoTrump";
        CardValue[CardValue["TenNoTrump"] = 2] = "TenNoTrump";
        CardValue[CardValue["JackNoTrump"] = 3] = "JackNoTrump";
        CardValue[CardValue["QueenNoTrump"] = 4] = "QueenNoTrump";
        CardValue[CardValue["KingNoTrump"] = 5] = "KingNoTrump";
        CardValue[CardValue["AceNoTrump"] = 10] = "AceNoTrump";
        CardValue[CardValue["NineTrump"] = 12] = "NineTrump";
        CardValue[CardValue["TenTrump"] = 15] = "TenTrump";
        CardValue[CardValue["QueenTrump"] = 20] = "QueenTrump";
        CardValue[CardValue["KingTrump"] = 25] = "KingTrump";
        CardValue[CardValue["AceTrump"] = 30] = "AceTrump";
        CardValue[CardValue["LeftBower"] = 31] = "LeftBower";
        CardValue[CardValue["RightBower"] = 35] = "RightBower";
        CardValue[CardValue["NoValue"] = -1] = "NoValue";
    })(Euchre.CardValue || (Euchre.CardValue = {}));
    var CardValue = Euchre.CardValue;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    var Deck = (function () {
        function Deck() {
            this._cards = [];
            this.buildDeck();
            this.shuffle();
        }
        Deck.prototype.buildDeck = function () {
            for (var type in Euchre.CardType) {
                if (type != Euchre.CardType.Back) {
                    this._cards.push(new Euchre.Card(type));
                }
            }
        };
        Deck.prototype.shuffle = function () {
            this._cards = _(this._cards).shuffle();
        };
        Deck.prototype.dealCard = function () {
            if (this._cards.length == 0) {
                throw new Error('There are no cards to deal.');
            }
            return this._cards.shift();
        };
        return Deck;
    })();
    Euchre.Deck = Deck;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    var EuchreDeck = (function (_super) {
        __extends(EuchreDeck, _super);
        function EuchreDeck() {
            _super.call(this);
            var euchreCards = [
                Euchre.CardType.NineOfClubs, Euchre.CardType.NineOfDiamonds, Euchre.CardType.NineOfHearts, Euchre.CardType.NineOfSpades,
                Euchre.CardType.TenOfClubs, Euchre.CardType.TenOfDiamonds, Euchre.CardType.TenOfHearts, Euchre.CardType.TenOfSpades,
                Euchre.CardType.JackOfClubs, Euchre.CardType.JackOfDiamonds, Euchre.CardType.JackOfHearts, Euchre.CardType.JackOfSpades,
                Euchre.CardType.QueenOfClubs, Euchre.CardType.QueenOfDiamonds, Euchre.CardType.QueenOfHearts, Euchre.CardType.QueenOfSpades,
                Euchre.CardType.KingOfClubs, Euchre.CardType.KingOfDiamonds, Euchre.CardType.KingOfHearts, Euchre.CardType.KingOfSpades,
                Euchre.CardType.AceOfClubs, Euchre.CardType.AceOfDiamonds, Euchre.CardType.AceOfHearts, Euchre.CardType.AceOfSpades,
            ];
            this._cards = _(this._cards).filter(function (x) { return _(euchreCards).any(function (c) { return c == x.cardType; }); });
        }
        return EuchreDeck;
    })(Euchre.Deck);
    Euchre.EuchreDeck = EuchreDeck;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Euchre.Boot, false);
            this.state.add('Preloader', Euchre.Preloader, false);
            this.state.add('MainMenu', Euchre.MainMenu, false);
            this.state.add('GameBoard', Euchre.GameBoard, false);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    Euchre.Game = Game;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    var GameBoard = (function (_super) {
        __extends(GameBoard, _super);
        function GameBoard() {
            _super.apply(this, arguments);
        }
        GameBoard.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'background');
            this.background.width = this.game.width;
            this.background.height = this.game.height;
            this.deck = new Euchre.EuchreDeck();
            this.setupTeamScores();
            this.setupTeamTrickScores();
            this.setupPlayers();
            this.dealCards();
        };
        GameBoard.prototype.update = function () {
            if (this._currentPlayer.ready) {
                this._currentPlayer.takeTurn(this);
                if (this._currentPlayer == this._leftPlayer) {
                    this._currentPlayer = this._partnerPlayer;
                }
                else if (this._currentPlayer == this._partnerPlayer) {
                    this._currentPlayer = this._rightPlayer;
                }
                else if (this._currentPlayer == this._rightPlayer) {
                    this._currentPlayer = this._selfPlayer;
                }
                else if (this._currentPlayer == this._selfPlayer) {
                    this._currentPlayer = this._leftPlayer;
                }
            }
        };
        GameBoard.prototype.playCard = function (player, card) {
        };
        GameBoard.prototype.setupTeamScores = function () {
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
        };
        GameBoard.prototype.setupTeamTrickScores = function () {
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
        };
        GameBoard.prototype.resetScores = function () {
            this._blueScore.text = '0';
            this._redScore.text = '0';
            this._blueTricks.text = '0';
            this._redTricks.text = '0';
        };
        GameBoard.prototype.setupPlayers = function () {
            this._leftPlayer = new Euchre.Player(Euchre.PlayerType.Computer, Euchre.SeatType.Left);
            this._partnerPlayer = new Euchre.Player(Euchre.PlayerType.Computer, Euchre.SeatType.Partner);
            this._rightPlayer = new Euchre.Player(Euchre.PlayerType.Computer, Euchre.SeatType.Right);
            this._selfPlayer = new Euchre.Player(Euchre.PlayerType.Human, Euchre.SeatType.Self);
            this._dealer = this._selfPlayer;
            this._currentPlayer = this._leftPlayer;
        };
        GameBoard.prototype.dealCards = function () {
            if (this._dealer == this._leftPlayer) {
                this.dealSomeCards(3, this._partnerPlayer);
                this.dealSomeCards(2, this._rightPlayer);
                this.dealSomeCards(3, this._selfPlayer);
                this.dealSomeCards(2, this._leftPlayer);
                this.dealSomeCards(3, this._partnerPlayer);
                this.dealSomeCards(2, this._rightPlayer);
                this.dealSomeCards(3, this._selfPlayer);
                this.dealSomeCards(2, this._leftPlayer);
            }
            else if (this._dealer == this._partnerPlayer) {
                this.dealSomeCards(3, this._rightPlayer);
                this.dealSomeCards(2, this._selfPlayer);
                this.dealSomeCards(3, this._leftPlayer);
                this.dealSomeCards(2, this._partnerPlayer);
                this.dealSomeCards(3, this._rightPlayer);
                this.dealSomeCards(2, this._selfPlayer);
                this.dealSomeCards(3, this._leftPlayer);
                this.dealSomeCards(2, this._partnerPlayer);
            }
            else if (this._dealer == this._rightPlayer) {
                this.dealSomeCards(3, this._selfPlayer);
                this.dealSomeCards(2, this._leftPlayer);
                this.dealSomeCards(3, this._partnerPlayer);
                this.dealSomeCards(2, this._rightPlayer);
                this.dealSomeCards(3, this._selfPlayer);
                this.dealSomeCards(2, this._leftPlayer);
                this.dealSomeCards(3, this._partnerPlayer);
                this.dealSomeCards(2, this._rightPlayer);
            }
            else if (this._dealer == this._selfPlayer) {
                this.dealSomeCards(3, this._leftPlayer);
                this.dealSomeCards(2, this._partnerPlayer);
                this.dealSomeCards(3, this._rightPlayer);
                this.dealSomeCards(2, this._selfPlayer);
                this.dealSomeCards(3, this._leftPlayer);
                this.dealSomeCards(2, this._partnerPlayer);
                this.dealSomeCards(3, this._rightPlayer);
                this.dealSomeCards(2, this._selfPlayer);
            }
            throw new Error("Dealer is not set.");
        };
        GameBoard.prototype.dealSomeCards = function (numberOfCards, player) {
            for (var i = 0; i < 3; i++) {
                player.addCardToHand(this.deck.dealCard(), this.game);
            }
        };
        Object.defineProperty(GameBoard.prototype, "currentHand", {
            get: function () {
                return this._currentHand;
            },
            enumerable: true,
            configurable: true
        });
        return GameBoard;
    })(Phaser.State);
    Euchre.GameBoard = GameBoard;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    var Hand = (function () {
        function Hand(trumpSuit) {
            this._trumpSuit = trumpSuit;
            switch (trumpSuit) {
                case Euchre.Suit.Clubs:
                    this._leftBowerSuit = Euchre.Suit.Spades;
                    break;
                case Euchre.Suit.Diamonds:
                    this._leftBowerSuit = Euchre.Suit.Hearts;
                    break;
                case Euchre.Suit.Hearts:
                    this._leftBowerSuit = Euchre.Suit.Diamonds;
                    break;
                case Euchre.Suit.Spades:
                    this._leftBowerSuit = Euchre.Suit.Clubs;
                    break;
            }
        }
        Object.defineProperty(Hand.prototype, "leadCard", {
            get: function () {
                return this._leadCard;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Hand.prototype, "leadPlayer", {
            get: function () {
                return this._leadPlayer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Hand.prototype, "leftCard", {
            get: function () {
                return this._leftCard;
            },
            set: function (value) {
                this._leftCard = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Hand.prototype, "partnerCard", {
            get: function () {
                return this._partnerCard;
            },
            set: function (value) {
                this._partnerCard = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Hand.prototype, "rightCard", {
            get: function () {
                return this._rightCard;
            },
            set: function (value) {
                this._rightCard = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Hand.prototype, "selfCard", {
            get: function () {
                return this._selfCard;
            },
            set: function (value) {
                this._selfCard = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Hand.prototype, "leftBowerSuit", {
            get: function () {
                return this._leftBowerSuit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Hand.prototype, "trumpSuit", {
            get: function () {
                return this._trumpSuit;
            },
            enumerable: true,
            configurable: true
        });
        Hand.prototype.addLead = function (card, player) {
            this._leadCard = card;
            this._leadPlayer = player;
        };
        return Hand;
    })();
    Euchre.Hand = Hand;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'titlepage');
            this.background.anchor.setTo(0.5);
            this.background.alpha = 0;
            this.add.tween(this.background).to({ alpha: 1 }, 1000, Phaser.Easing.Bounce.InOut, true);
            this.input.onDown.addOnce(this.fadeOut, this);
        };
        MainMenu.prototype.fadeOut = function () {
            var tween = this.add.tween(this.background).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            this.game.state.start('GameBoard', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    Euchre.MainMenu = MainMenu;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    var Player = (function () {
        function Player(playerType, seat) {
            this.playerType = playerType;
            this.seat = seat;
            this._hand = [];
            this._ready = false;
        }
        Player.prototype.addCardToHand = function (card, game) {
            if (this._hand.length == 5)
                throw new Error('Player hand is full.');
            var newCard = new Euchre.CardSprite(card, this.seat, game);
            this.setCardPosition(newCard);
            this._hand.push(newCard);
        };
        Player.prototype.takeTurn = function (gameBoard) {
            if (this.seat == Euchre.SeatType.Self) {
                gameBoard.game.paused = true;
            }
            gameBoard.playCard(this, this.determineCardToPlay(gameBoard.currentHand));
            this._ready = true;
        };
        Object.defineProperty(Player.prototype, "ready", {
            get: function () {
                return this._ready;
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype.setCardPosition = function (card) {
            var _this = this;
            switch (this.seat) {
                case Euchre.SeatType.Left:
                    this.positionCardToLeft(card);
                    break;
                case Euchre.SeatType.Partner:
                    this.positionCardAcross(card);
                    break;
                case Euchre.SeatType.Right:
                    this.positionCardToRight(card);
                    break;
                case Euchre.SeatType.Self:
                    this.positionCardToSelf(card);
                    card.inputEnabled = true;
                    card.events.onInputDown.add(function () { return _this.clickCard(card); }, this);
                    break;
            }
        };
        Player.prototype.clickCard = function (card) {
            if (this.seat == Euchre.SeatType.Self) {
                card.game.paused = false;
                card.position.setTo(card.game.world.centerX, card.game.world.centerY + 30);
                if (card.animations.frame == Euchre.CardType.Back) {
                    card.flipCard();
                }
            }
        };
        Player.prototype.positionCardToLeft = function (card) {
            var game = card.game;
            var lastCard = _(this._hand).last();
            if (lastCard != null) {
                card.x = lastCard.x;
                card.y = lastCard.y + lastCard.height;
                game.add.existing(card);
            }
            else {
                card.x = 5;
                card.y = 100;
                game.add.existing(card);
            }
        };
        Player.prototype.positionCardAcross = function (card) {
            var game = card.game;
            var lastCard = _(this._hand).last();
            if (lastCard != null) {
                card.x = lastCard.x + lastCard.width;
                card.y = lastCard.y;
                game.add.existing(card);
            }
            else {
                card.x = 100;
                card.y = 5;
                game.add.existing(card);
            }
        };
        Player.prototype.positionCardToRight = function (card) {
            var game = card.game;
            var lastCard = _(this._hand).last();
            if (lastCard != null) {
                card.x = lastCard.x;
                card.y = lastCard.y + lastCard.height;
                game.add.existing(card);
            }
            else {
                card.x = game.width - 100;
                card.y = 300;
                game.add.existing(card);
            }
        };
        Player.prototype.positionCardToSelf = function (card) {
            var game = card.game;
            var lastCard = _(this._hand).last();
            if (lastCard != null) {
                card.x = lastCard.x + lastCard.width;
                card.y = lastCard.y;
                game.add.existing(card);
            }
            else {
                card.x = 100;
                card.y = game.height - 100;
                game.add.existing(card);
            }
        };
        Player.prototype.determineCardToPlay = function (hand) {
            if (this.seat == Euchre.SeatType.Self) {
            }
            else {
                return null;
            }
        };
        return Player;
    })();
    Euchre.Player = Player;
    (function (PlayerType) {
        PlayerType[PlayerType["Human"] = 0] = "Human";
        PlayerType[PlayerType["Computer"] = 1] = "Computer";
    })(Euchre.PlayerType || (Euchre.PlayerType = {}));
    var PlayerType = Euchre.PlayerType;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            this.load.image('titlepage', 'images/titlepage.jpg');
            this.load.image('background', 'images/background.jpg');
            this.load.spritesheet('cards', 'images/cards.png', 79, 123, 53);
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    })(Phaser.State);
    Euchre.Preloader = Preloader;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    (function (SeatType) {
        SeatType[SeatType["Left"] = 0] = "Left";
        SeatType[SeatType["Partner"] = 1] = "Partner";
        SeatType[SeatType["Right"] = 2] = "Right";
        SeatType[SeatType["Self"] = 3] = "Self";
    })(Euchre.SeatType || (Euchre.SeatType = {}));
    var SeatType = Euchre.SeatType;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    (function (Suit) {
        Suit[Suit["Clubs"] = 0] = "Clubs";
        Suit[Suit["Diamonds"] = 1] = "Diamonds";
        Suit[Suit["Hearts"] = 2] = "Hearts";
        Suit[Suit["Spades"] = 3] = "Spades";
    })(Euchre.Suit || (Euchre.Suit = {}));
    var Suit = Euchre.Suit;
    (function (Rank) {
        Rank[Rank["Nine"] = 0] = "Nine";
        Rank[Rank["Ten"] = 1] = "Ten";
        Rank[Rank["Jack"] = 2] = "Jack";
        Rank[Rank["Queen"] = 3] = "Queen";
        Rank[Rank["King"] = 4] = "King";
        Rank[Rank["Ace"] = 5] = "Ace";
    })(Euchre.Rank || (Euchre.Rank = {}));
    var Rank = Euchre.Rank;
})(Euchre || (Euchre = {}));
window.onload = function () {
    var game = new Euchre.Game();
};
