import { CardDeckType } from "../types/types";

export const isFlush = (suits: Array<string>): boolean => {
  return suits.every((suit) => suit === suits[0]);
};

export const isStraight = (cards: CardDeckType) => {
  let sortedCards = cards.sort((a, b) => a.value - b.value);

  if (
    sortedCards[0].value === 2 &&
    sortedCards[sortedCards.length - 1].value === 14
  ) {
    sortedCards = [
      {
        card: sortedCards[sortedCards.length - 1].card,
        value: 1,
        suit: sortedCards[sortedCards.length - 1].suit,
      },
      ...sortedCards,
    ];

    sortedCards.pop();
  }

  for (let i = 1; i < sortedCards.length; i++) {
    if (sortedCards[i].value != sortedCards[i - 1].value + 1) {
      return false;
    }
  }

  return true;
};

export const isStraightFlush = (isStraight: boolean, isFlush: boolean) => {
  return isStraight && isFlush ? true : false;
};

export const countSameCardOccurrences = (cards: CardDeckType) => {
  const valueCounts: Record<number, number> = {};

  cards.forEach((card) => {
    valueCounts[card.value] = (valueCounts[card.value] || 0) + 1;
  });

  let pairs = 0;
  let threeOfAKind = 0;
  let fourOfAKind = 0;

  for (const value in valueCounts) {
    if (valueCounts[value] === 2) {
      pairs++;
    } else if (valueCounts[value] === 3) {
      threeOfAKind++;
    } else if (valueCounts[value] === 4) {
      fourOfAKind++;
    }
  }

  return { pairs, threeOfAKind, fourOfAKind };
};

export const findHighCard = (cards: CardDeckType) => {
  const cardNumbers = cards.map((card) => card.value);
  return Math.max(...cardNumbers);
};
