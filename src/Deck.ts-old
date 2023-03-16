
module Euchre {
    
    export abstract class Deck {
        
        protected _cards: Card[] = [];
        
        constructor() {
            
            this.buildDeck();
            this.shuffle();
        }
        
        private buildDeck() {
            
            for (var type in CardType) {
                
                if (type != CardType.Back) {
                    
                    this._cards.push(new Card(type));
                }
            }
        }
        
        private shuffle() {
            
            this._cards = _(this._cards).shuffle();
        }
        
        dealCard(): Card {
            
            if (this._cards.length == 0) {
                throw new Error('There are no cards to deal.');
            }
            
            return this._cards.shift();
        }
    }
}