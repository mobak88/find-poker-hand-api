import { CardDeckType, WinnerType } from "../types/types";
import { getSuits } from "../utils/get-suits";
import {
  countSameCardOccurrences,
  isFlush,
  isStraight,
  isStraightFlush,
} from "../utils/hand-evaluators";
import { handRankings } from "../variables/possible-hands";

export const evaluateHand = (cards: CardDeckType): WinnerType => {
  const hasStraight = isStraight(cards);
  const hasFlush = isFlush(getSuits(cards));

  const hasStraightFlush = isStraightFlush(hasStraight, hasFlush);

  if (hasStraightFlush) {
    return { ...handRankings.straightFlush, cards };
  } else if (hasFlush) {
    return { ...handRankings.flush, cards };
  } else if (hasStraight) {
    return { ...handRankings.straight, cards };
  }

  const { pairs, threeOfAKind, fourOfAKind } = countSameCardOccurrences(cards);

  if (fourOfAKind) {
    return { ...handRankings.fourOfAKind, cards };
  } else if (pairs === 1 && threeOfAKind === 1) {
    return { ...handRankings.fullHouse, cards };
  } else if (threeOfAKind === 1) {
    return { ...handRankings.threeOfAKind, cards };
  } else if (pairs === 2) {
    return { ...handRankings.twoPairs, cards };
  } else if (pairs === 1) {
    return { ...handRankings.pair, cards };
  } else {
    return { ...handRankings.highCard, cards };
  }
};
