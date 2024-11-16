// src/index.ts
import express, { Express } from "express";
import dotenv from "dotenv";
import { createCardDeck } from "./utils/create-cards";
import { cards, suits } from "./variables/card-deck";
import pokerHandRoutes from "./routes/poker-hand-routes";

dotenv.config();

const app: Express = express();
const url = process.env.URL || "localhost";
const port = process.env.PORT || 3000;

export const cardDeck = createCardDeck(suits, cards);
app.use(express.json());

app.use("/api", pokerHandRoutes);

app.listen(port, () => {
  console.log(`App running on: http://${url}:${port}`);
});
