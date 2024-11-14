// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { createCardDeck } from "./utils/create-cards";
import { cards, suits } from "./variables/card-deck";
import { dealCards } from "./services/deal-cards";
import { generateRandomNumber } from "./utils/generate-random-number";

dotenv.config();

const app: Express = express();
const url = process.env.URL || "localhost";
const port = process.env.PORT || 3000;

const cardDeck = createCardDeck(suits, cards);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript");
});

app.get("/deal-cards", (req: Request, res: Response) => {
  const numberOfCards = 5;
  const cards = [...cardDeck];

  const dealtCards = dealCards(cards, generateRandomNumber, numberOfCards);

  res.send({ dealtCards });
});

app.listen(port, () => {
  console.log(`App running on: http://${url}:${port}`);
});
