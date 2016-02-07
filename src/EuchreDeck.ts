
module Euchre {
    
    export class EuchreDeck extends Deck {
        
        constructor() {
            
            super();
            
            var euchreCards = [
                CardType.NineOfClubs, CardType.NineOfDiamonds, CardType.NineOfHearts, CardType.NineOfSpades,
                CardType.TenOfClubs, CardType.TenOfDiamonds, CardType.TenOfHearts, CardType.TenOfSpades,
                CardType.JackOfClubs, CardType.JackOfDiamonds, CardType.JackOfHearts, CardType.JackOfSpades,
                CardType.QueenOfClubs, CardType.QueenOfDiamonds, CardType.QueenOfHearts, CardType.QueenOfSpades,
                CardType.KingOfClubs, CardType.KingOfDiamonds, CardType.KingOfHearts, CardType.KingOfSpades,
                CardType.AceOfClubs, CardType.AceOfDiamonds, CardType.AceOfHearts, CardType.AceOfSpades,
            ];
            
            this._cards = _(this._cards).filter(x => _(euchreCards).any(c => c == x.cardType));
        }
    }
}