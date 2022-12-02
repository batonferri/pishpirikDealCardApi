import express from "express";
import { card } from "../controllers/card.js";

const router = express.Router();

router.get("/", card);

export default router;
