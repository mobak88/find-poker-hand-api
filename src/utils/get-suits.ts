import { CardDeckType } from "../types/types";

export const getSuits = (cards: CardDeckType) => {
  return cards.map((card) => card.suit);
};
