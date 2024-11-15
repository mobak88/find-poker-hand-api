import { CardDeckType } from "../types/types";
import { getSuits } from "../utils/get-suits";
import {
  countSameCardOccurrences,
  isFlush,
  isStraight,
  isStraightFlush,
} from "../utils/hand-evaluators";
import { handRankings } from "../variables/possible-hands";

export const evaluateHand = (cards: CardDeckType): string => {
  const hasStraight = isStraight(cards);
  const hasFlush = isFlush(getSuits(cards));

  const hasStraightFlush = isStraightFlush(hasStraight, hasFlush);

  if (hasStraightFlush) {
    return handRankings.straightFlush;
  } else if (hasFlush) {
    return handRankings.flush;
  } else if (hasStraight) {
    return handRankings.straight;
  }

  const { pairs, threeOfAKind, fourOfAKind } = countSameCardOccurrences(cards);

  if (fourOfAKind) {
    return handRankings.fourOfAKind;
  } else if (pairs === 1 && threeOfAKind === 1) {
    return handRankings.fullHouse;
  } else if (threeOfAKind === 1) {
    return handRankings.threeOfAKind;
  } else if (pairs === 2) {
    return handRankings.twoPairs;
  } else if (pairs === 1) {
    return handRankings.pair;
  } else {
    return handRankings.highCard;
  }
};
