import express from "express";
import { getCards } from "../controllers/deal-card-controller";

const router = express.Router();

router.route("/deal-cards").get(getCards);

export default router;
