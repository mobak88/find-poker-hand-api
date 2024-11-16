import { Request, Response } from "express";
import db from "../config/db";
import { HandsRow } from "../types/types";
import { FieldPacket } from "mysql2";
import { groupeHands } from "../utils/group-hands";

export const getPreviousHandsController = async (
  req: Request,
  res: Response
) => {
  try {
    const [rows]: [HandsRow[], FieldPacket[]] = await db.query<HandsRow[]>(
      "SELECT hands.id, hands.created_at, hands.hand_description, cards.card, cards.value, cards.suit FROM hands JOIN cards ON cards.hand_id = hands.id"
    );

    if (Array.isArray(rows) && rows.length < 1) {
      res.status(404).json({ message: "No hands found" });
    }

    const handsArray = groupeHands(rows);

    res.status(200).json(handsArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
