import { CardDeckType } from "../types/types";

export const getSuits = (cards: CardDeckType): Array<string> => {
  return cards.map((card) => card.suit);
};
