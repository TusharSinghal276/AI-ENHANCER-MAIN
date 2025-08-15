import express from "express";
import { generateText } from "../Controller/ai.controller.js"; // Must include .js extension

const router = express.Router();
router.post("/generate", generateText);

export default router; // ES Modules default export