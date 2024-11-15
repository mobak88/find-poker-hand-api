import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";
import db from "../config/db";

export const getPreviousHandsController = async (
  req: Request,
  res: Response
) => {
  try {
    const [result] = await db.query<ResultSetHeader>(
      "INSERT INTO hands () VALUES ()"
    );

    const handId = result.insertId;

    res.send({ handId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Serverfeil" });
  }
};
