import express from "express";
import { dealCardsController } from "../controllers/deal-card-controller";
import { determineWinnerController } from "../controllers/determine-winner-controller";
import { getPreviousHandsController } from "../controllers/hand-history-controller";

const router = express.Router();

router.route("/deal-cards").get(dealCardsController);

router.route("/hands/history").get(getPreviousHandsController);

router.route("/hands/winner").post(determineWinnerController);

export default router;
