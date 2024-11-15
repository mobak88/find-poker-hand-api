import { CardDeckType, WinnerType } from "../types/types";
import { findBestHands } from "../utils/find-best-hands";
import { handRankings } from "../variables/possible-hands";
import { evaluateHand } from "./evaluate-hand";

// if its the same rank check if pair etc is equal
// Check if pair or tres is equal
// If they are equal check highcard
// Else check high card

export const determineWinner = (
  hands: Array<CardDeckType>
): Array<WinnerType> => {
  const handsRanks = hands.map((hand) => evaluateHand(hand));

  let score = 10;
  const winners = findBestHands(score, handsRanks);

  if (winners.length > 1) {
    if (winners[0].hand === handRankings.straightFlush.hand) {
      const cardValues = winners.map((winner) =>
        winner.cards.map((card) => card.value)
      );

      const highCards = cardValues.map((cards) => Math.max(...cards));

      const maxHighCard = Math.max(...highCards);

      const newWinners = winners.filter(
        (winner, index) => highCards[index] === maxHighCard
      );

      return newWinners;
    }
  }

  return winners;
};
