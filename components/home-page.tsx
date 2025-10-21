"use client"

import { useEffect, useState } from "react"
import FloodStats from "./flood-stats"
import StormTimeline from "./storm-timeline"
import MapView from "./map-view"
import InfoCards from "./info-cards"

interface HomePageProps {
  user: any
}

export default function HomePage({ user }: HomePageProps) {
  const [floodData, setFloodData] = useState<any[]>([])
  const [weatherData, setWeatherData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [floodRes, weatherRes] = await Promise.all([
          fetch("/api/flood-data/current"),
          fetch("/api/weather/current"),
        ])

        const floodJson = await floodRes.json()
        const weatherJson = await weatherRes.json()

        setFloodData(floodJson)
        setWeatherData(weatherJson)
      } catch (error) {
        console.error("Error fetching data:", error)
        // Use mock data on error
        setFloodData([
          {
            id: 1,
            city: "Chennai",
            floodLevel: 2.5,
            affectedAreas: 15,
            evacuated: 5000,
            severity: "High",
          },
        ])
        setWeatherData({
          temperature: 28,
          humidity: 75,
          windSpeed: 45,
          rainfall: 120,
          condition: "Heavy Rain",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading flood data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome, {user?.name}!</h1>
        <p className="text-gray-600 mt-2">Real-time flood monitoring and management system</p>
      </div>

      <InfoCards weatherData={weatherData} />
      <FloodStats floodData={floodData} />
      <StormTimeline />
      <MapView floodData={floodData} />
    </div>
  )
}
