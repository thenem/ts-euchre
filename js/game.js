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
    var Card = (function () {
        function Card(cardType) {
            this.cardType = cardType;
        }
        return Card;
    })();
    Euchre.Card = Card;
})(Euchre || (Euchre = {}));
var Euchre;
(function (Euchre) {
    var CardSprite = (function (_super) {
        __extends(CardSprite, _super);
        function CardSprite(card, game, x, y) {
            _super.call(this, game, x, y, 'cards', Euchre.CardType.Back);
            this.card = card;
            this.anchor.setTo(0.5);
            this.animations.add('flip', [card.cardType]);
            game.add.existing(this);
        }
        CardSprite.prototype.flipCard = function () {
            this.animations.play('flip').stop();
        };
        return CardSprite;
    })(Phaser.Sprite);
    Euchre.CardSprite = CardSprite;
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
            var card = new Euchre.CardSprite(this.deck.dealCard(), this.game, this.game.world.centerX, this.game.world.centerY);
        };
        return GameBoard;
    })(Phaser.State);
    Euchre.GameBoard = GameBoard;
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
        function Player() {
        }
        return Player;
    })();
    Euchre.Player = Player;
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
window.onload = function () {
    var game = new Euchre.Game();
};
