import express from "express"
import { getWeatherData, getStormTimeline } from "../controllers/weatherController"

const router = express.Router()

router.get("/current", getWeatherData)
router.get("/storm-timeline", getStormTimeline)

export default router
