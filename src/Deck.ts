
module Euchre {
    
    export abstract class Deck {
        
        protected _cards: Card[] = [];
        
        constructor() {
            
            for (var type in CardType) {
                
                if (type != CardType.Back) {
                    
                    this._cards.push(new Card(type));
                }
            }
            
            this._cards = _(this._cards).shuffle();
        }
        
        shuffle() {
            
            this._cards = _(this._cards).shuffle();
        }
        
        dealCard(): Card {
            
            return this._cards.shift();
        }
    }
}