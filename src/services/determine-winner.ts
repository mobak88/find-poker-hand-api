import { CardDeckType, WinnerType } from "../types/types";
import { findBestHands } from "../utils/find-best-hands";
import {
  highCardWinner,
  pairWinner,
  sameCardValuesWinner,
  sequencialWinner,
} from "../utils/winner-hands";
import { handRankings } from "../variables/possible-hands";
import { evaluateHand } from "./evaluate-hand";

export const determineWinner = (
  hands: Array<CardDeckType>
): Array<WinnerType> => {
  const handsRanks = hands.map((hand) => evaluateHand(hand));

  let score = 10;
  const winners = findBestHands(score, handsRanks);

  if (winners.length === 1) return winners;

  if (
    winners[0].hand === handRankings.straightFlush.hand ||
    winners[0].hand === handRankings.straight.hand
  ) {
    return sequencialWinner(winners);
  } else if (
    winners[0].hand === handRankings.flush.hand ||
    winners[0].hand === handRankings.highCard.hand
  ) {
    return highCardWinner(winners);
  } else if (
    winners[0].hand === handRankings.fullHouse.hand ||
    winners[0].hand === handRankings.threeOfAKind.hand
  ) {
    return sameCardValuesWinner(winners, 3);
  } else if (winners[0].hand === handRankings.fourOfAKind.hand) {
    return sameCardValuesWinner(winners, 4);
  } else {
    return pairWinner(winners);
  }
};
