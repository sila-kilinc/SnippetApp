import express from "express";
import { getSnippets } from "../controllers/snippets.js";

const router = express.Router();

router.get("/", getSnippets);

export default router;