// Mock weather data
const weatherData = {
  temperature: 28,
  humidity: 75,
  windSpeed: 45,
  rainfall: 120,
  condition: "Heavy Rain",
  city: "Chennai",
}

const stormTimeline = [
  { stage: "Formation", date: "2024-10-12", windSpeed: 20, rainfall: 10 },
  { stage: "Intensification", date: "2024-10-13", windSpeed: 60, rainfall: 80 },
  { stage: "Landfall", date: "2024-10-14", windSpeed: 90, rainfall: 200 },
  { stage: "Weakening", date: "2024-10-15", windSpeed: 40, rainfall: 50 },
  { stage: "Dissipation", date: "2024-10-16", windSpeed: 15, rainfall: 5 },
]

import { fetchWeatherData, fetchStormData } from "../utils/fetchWeatherData"

export const getWeatherData = async (req: any, res: any) => {
  const { city = "Chennai" } = req.query
  const apiKey = process.env.OPENWEATHER_API_KEY

  if (!apiKey) {
    return res.status(500).json({ error: "Weather API key not configured" })
  }

  const weatherData = await fetchWeatherData(city, apiKey)

  if (!weatherData) {
    return res.status(500).json({ error: "Failed to fetch weather data" })
  }

  res.json(weatherData)
}

export const getStormTimeline = async (req: any, res: any) => {
  const { lat = 13.0827, lon = 80.2707 } = req.query
  const apiKey = process.env.OPENWEATHER_API_KEY

  if (!apiKey) {
    return res.status(500).json({ error: "Weather API key not configured" })
  }

  const stormTimeline = await fetchStormData(Number(lat), Number(lon), apiKey)

  if (!stormTimeline) {
    return res.status(500).json({ error: "Failed to fetch storm data" })
  }

  res.json(stormTimeline)
}
