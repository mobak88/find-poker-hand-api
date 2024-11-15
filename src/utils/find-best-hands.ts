import { WinnerType } from "../types/types";

export const findBestHands = (
  score: number,
  handsRanks: Array<WinnerType>
): Array<WinnerType> => {
  let winners: Array<WinnerType> = [];

  for (let i = 0; i < handsRanks.length; i++) {
    if (handsRanks[i].rank < score) {
      score = handsRanks[i].rank;
      winners = [handsRanks[i]];
    } else if (handsRanks[i].rank === score) {
      winners = [...winners, handsRanks[i]];
    }
  }

  return winners;
};
