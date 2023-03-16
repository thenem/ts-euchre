import { Card } from './card';
import { Rank } from './rank';
import { Suit } from './suit';

export class EuchreDeck {
    private cards: Card[] = [];

    constructor() {
        this.buildDeck();
        this.shuffle();
    }

    dealCard(): Card | undefined {
        return this.cards.shift();
    }

    private buildDeck() {
        for (const suit in Suit) {
            for (const rank in Rank) {
                this.cards.push({
                    rank: (Rank as any)[rank],
                    suit: (Suit as any)[suit]
                });
            }
        }
    }

    private shuffle() {
        let currentIndex = this.cards.length;
        let randomIndex: number;

        // while elements remain, shuffle
        while (currentIndex != 0) {
            // pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // swap it with the current element
            [this.cards[currentIndex], this.cards[randomIndex]] = [
                this.cards[randomIndex],
                this.cards[currentIndex]
            ];
        }
    }
}
