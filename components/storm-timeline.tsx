"use client"

import { useEffect, useState } from "react"
import { Cloud, CloudRain, Wind, Droplets } from "lucide-react"

export default function StormTimeline() {
  const [timeline, setTimeline] = useState<any[]>([])

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const res = await fetch("/api/weather/storm-timeline")
        const data = await res.json()
        setTimeline(data)
      } catch (error) {
        console.error("Error fetching timeline:", error)
        setTimeline([
          { stage: "Formation", date: "2024-10-12", windSpeed: 20, rainfall: 10 },
          { stage: "Intensification", date: "2024-10-13", windSpeed: 60, rainfall: 80 },
          { stage: "Landfall", date: "2024-10-14", windSpeed: 90, rainfall: 200 },
          { stage: "Weakening", date: "2024-10-15", windSpeed: 40, rainfall: 50 },
          { stage: "Dissipation", date: "2024-10-16", windSpeed: 15, rainfall: 5 },
        ])
      }
    }

    fetchTimeline()
  }, [])

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case "Formation":
        return <Cloud className="text-gray-500" size={24} />
      case "Intensification":
        return <CloudRain className="text-blue-500" size={24} />
      case "Landfall":
        return <Wind className="text-red-500" size={24} />
      case "Weakening":
        return <CloudRain className="text-orange-500" size={24} />
      case "Dissipation":
        return <Cloud className="text-gray-400" size={24} />
      default:
        return <Cloud size={24} />
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Storm Timeline</h2>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-gray-300"></div>

        <div className="space-y-8">
          {timeline.map((event, index) => (
            <div key={index} className="relative pl-24">
              <div className="absolute left-0 top-0 w-16 h-16 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center">
                {getStageIcon(event.stage)}
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-800">{event.stage}</h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
                <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Wind size={16} className="text-blue-600" />
                    <span>{event.windSpeed} km/h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets size={16} className="text-blue-600" />
                    <span>{event.rainfall} mm</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
