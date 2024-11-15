import { Request, Response } from "express";
import { cardDeck } from "..";
import { dealCards } from "../services/deal-cards";
import { generateRandomNumber } from "../utils/generate-random-number";
import { evaluateHand } from "../services/evaluate-hand";

export const getCards = async (req: Request, res: Response) => {
  try {
    const numberOfCards = 5;
    const cards = [...cardDeck];

    const dealtCards = dealCards(cards, generateRandomNumber, numberOfCards);

    const evaluatedHand = evaluateHand(dealtCards);

    res.send({ dealtCards, evaluatedHand });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Serverfeil" });
  }
};
