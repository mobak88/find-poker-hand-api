import express, { Request, Response } from "express";
import { dealCardsController } from "../controllers/deal-card-controller";
import { determineWinnerController } from "../controllers/determine-winner-controller";

const router = express.Router();

router.route("/deal-cards").get(dealCardsController);

router.route("/hands/history").get((req: Request, res: Response) => {
  res.send("Express + TypeScript");
});

router.route("/hands/winner").post(determineWinnerController);

export default router;
