import express from "express"
import { getFloodData, getFloodHistory, updateFloodData } from "../controllers/floodController"

const router = express.Router()

router.get("/current", getFloodData)
router.get("/history", getFloodHistory)
router.post("/update", updateFloodData)

export default router
