import { CardDeckType } from "../types/types";

export const dealCards = (
  cardDeck: CardDeckType,
  randNumber: (cards: CardDeckType) => number,
  numberOfCards: number
): CardDeckType => {
  let dealtCards = 0;
  let playerCards: CardDeckType = [];

  do {
    const number = randNumber(cardDeck);
    playerCards = [...playerCards, cardDeck[number]];
    cardDeck.splice(number, 1);
    dealtCards++;
  } while (dealtCards < numberOfCards);

  return playerCards;
};
