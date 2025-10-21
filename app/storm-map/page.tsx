"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MapView from "@/components/map-view"
import { Cloud, Wind, Droplets, AlertTriangle } from "lucide-react"

export default function StormMapPage() {
  const [floodData, setFloodData] = useState<any[]>([])
  const [stormData, setStormData] = useState<any>(null)
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
        setStormData(weatherJson)
      } catch (error) {
        console.error("Error fetching data:", error)
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
        setStormData({
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
        <Navbar isLoggedIn={true} user={{ name: "User" }} onLogout={() => {}} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading storm data...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
      <Navbar isLoggedIn={true} user={{ name: "User" }} onLogout={() => {}} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Storm Tracking & Analysis</h1>
          <p className="text-gray-600 mt-2">Real-time storm movement and flood risk assessment</p>
        </div>

        {stormData && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Condition</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{stormData.condition}</p>
                </div>
                <Cloud className="text-blue-500" size={32} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Wind Speed</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{stormData.windSpeed} km/h</p>
                </div>
                <Wind className="text-orange-500" size={32} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-cyan-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Rainfall</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{stormData.rainfall} mm</p>
                </div>
                <Droplets className="text-cyan-500" size={32} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Risk Level</p>
                  <p className="text-2xl font-bold text-red-600 mt-1">High</p>
                </div>
                <AlertTriangle className="text-red-500" size={32} />
              </div>
            </div>
          </div>
        )}

        <MapView floodData={floodData} />

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Storm Zones</h2>
          <div className="space-y-4">
            {floodData.map((data) => (
              <div
                key={data.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div>
                  <h3 className="font-bold text-gray-800">{data.city}</h3>
                  <p className="text-sm text-gray-600">Last updated: Just now</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-600">Flood Level</p>
                  <p className="text-2xl font-bold text-red-600">{data.floodLevel}m</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
