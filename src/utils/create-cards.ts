import { CardDeckType, CardsType, SuitsType } from "../types/types";

export const createCardDeck = (
  suits: SuitsType,
  cards: CardsType
): CardDeckType => {
  const cardDeck: CardDeckType = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      cardDeck.push({
        card: cards[j].symbol + suits[i].symbol,
        value: cards[j].value,
        suit: suits[i].suit,
      });
    }
  }

  return cardDeck;
};
