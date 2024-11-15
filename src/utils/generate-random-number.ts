import { CardDeckType } from "../types/types";

export const generateRandomNumber = (cardDeck: CardDeckType): number => {
  return Math.floor(Math.random() * (cardDeck.length - 1));
};
