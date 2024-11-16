import { Request, Response } from "express";
import { cardDeck } from "..";
import { dealCards } from "../services/deal-cards";
import { generateRandomNumber } from "../utils/generate-random-number";
import { evaluateHand } from "../services/evaluate-hand";
import { ResultSetHeader } from "mysql2";
import db from "../config/db";

export const dealCardsController = async (req: Request, res: Response) => {
  try {
    const numberOfCards = 5;
    const cards = [...cardDeck];

    const dealtCards = dealCards(cards, generateRandomNumber, numberOfCards);

    const evaluatedHand = evaluateHand(dealtCards);

    const [result] = await db.query<ResultSetHeader>(
      "INSERT INTO hands (hand_rank, hand_description) VALUES (?, ?)",
      [evaluatedHand.rank, evaluatedHand.hand]
    );

    const handId = result.insertId;

    for (let i = 0; i < dealtCards.length; i++) {
      await db.query(
        "INSERT INTO cards (card, value, suit, hand_id) VALUES (?, ?, ?, ?)",
        [dealtCards[i].card, dealtCards[i].value, dealtCards[i].suit, handId]
      );
    }

    res.send({ dealtCards, hand: evaluatedHand.hand });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
