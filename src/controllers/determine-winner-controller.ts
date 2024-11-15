import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";
import db from "../config/db";
import { determineWinner } from "../services/determine-winner";
import { CardDeckArrayType } from "../types/types";

export const determineWinnerController = async (
  req: Request<{}, {}, CardDeckArrayType>,
  res: Response
) => {
  try {
    if (req.body?.hands.length < 2 || !req.body?.hands)
      res
        .status(400)
        .send({ message: "Please input two or more arrays of hands" });

    const handRanks = determineWinner(req.body.hands);

    res.send({ handRanks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Serverfeil" });
  }
};
