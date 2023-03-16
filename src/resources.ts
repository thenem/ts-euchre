import { ImageSource, SpriteSheet } from 'excalibur';
import cards from './images/cards.png';

export const resources = {
    cardsSpriteSheet: SpriteSheet.fromImageSource({
        image: new ImageSource(cards),
        grid: {
            rows: 5,
            columns: 13,
            spriteWidth: 79,
            spriteHeight: 123
        }
    })
};
