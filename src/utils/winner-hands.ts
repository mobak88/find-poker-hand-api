import { WinnerType } from "../types/types";

export const sequencialWinner = (winners: Array<WinnerType>) => {
  const cardValues = winners.map((winner) =>
    winner.cards.map((card) => card.value)
  );

  const highCards = cardValues.map((cards) => Math.max(...cards));

  const maxHighCard = Math.max(...highCards);

  const newWinners = winners.filter(
    (_, index) => highCards[index] === maxHighCard
  );

  return newWinners;
};

export const highCardWinner = (winners: Array<WinnerType>) => {
  let cardValues = winners.map((winner) =>
    winner.cards.map((card) => card.value).sort((a, b) => b - a)
  );

  let newWinners = [...winners];

  while (newWinners.length > 1 && cardValues[0].length > 0) {
    const highCards = cardValues.map((cards) => cards[0]);
    const maxHighCard = Math.max(...highCards);

    newWinners = newWinners.filter(
      (_, index) => highCards[index] === maxHighCard
    );

    cardValues = cardValues.map((cards) => cards.slice(1));
  }

  return newWinners;
};

export const sameCardValuesWinner = (
  winners: Array<WinnerType>,
  numberOfSameCards: number
) => {
  const evaluatedWinners = winners.map((winner, index) => {
    const cardCounts: Record<number, number> = {};
    winner.cards.forEach((card) => {
      cardCounts[card.value] = (cardCounts[card.value] || 0) + 1;
    });

    const sameCardValues = Number(
      Object.keys(cardCounts).find(
        (key) => cardCounts[Number(key)] === numberOfSameCards
      )
    );
    return { sameCardValues, index };
  });

  evaluatedWinners.sort((a, b) => b.sameCardValues - a.sameCardValues);
  return [winners[evaluatedWinners[0].index]];
};

export const pairWinner = (winners: Array<WinnerType>) => {
  const evaluatedWinners = winners.map((winner, index) => {
    const cardCounts: Record<number, number> = {};
    winner.cards.forEach((card) => {
      cardCounts[card.value] = (cardCounts[card.value] || 0) + 1;
    });

    const pairs = Object.keys(cardCounts)
      .filter((key) => cardCounts[Number(key)] === 2)
      .map(Number)
      .sort((a, b) => b - a);

    const kickers = winner.cards
      .filter((card) => cardCounts[card.value] !== 2)
      .map((card) => card.value)
      .sort((a, b) => b - a);

    return { pairs, kickers, index };
  });

  evaluatedWinners.sort((a, b) => {
    for (let i = 0; i < Math.max(a.pairs.length, b.pairs.length); i++) {
      if ((a.pairs[i] || 0) !== (b.pairs[i] || 0)) {
        return (b.pairs[i] || 0) - (a.pairs[i] || 0);
      }
    }

    for (let i = 0; i < Math.max(a.kickers.length, b.kickers.length); i++) {
      if ((a.kickers[i] || 0) !== (b.kickers[i] || 0)) {
        return (b.kickers[i] || 0) - (a.kickers[i] || 0);
      }
    }
    return 0;
  });

  const bestEvaluation = evaluatedWinners[0];
  const tiedWinners = evaluatedWinners.filter(
    (winner) =>
      winner.pairs[0] === bestEvaluation.pairs[0] &&
      JSON.stringify(winner.kickers) === JSON.stringify(bestEvaluation.kickers)
  );

  return tiedWinners.map((winner) => winners[winner.index]);
};
