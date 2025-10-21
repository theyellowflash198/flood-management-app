"use client"

import { Cloud, Droplets, Wind, Gauge } from "lucide-react"

interface InfoCardsProps {
  weatherData: any
}

export default function InfoCards({ weatherData }: InfoCardsProps) {
  if (!weatherData) return null

  const cards = [
    {
      icon: Cloud,
      label: "Condition",
      value: weatherData.condition,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: Gauge,
      label: "Temperature",
      value: `${weatherData.temperature}°C`,
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
    },
    {
      icon: Droplets,
      label: "Humidity",
      value: `${weatherData.humidity}%`,
      color: "bg-cyan-50 border-cyan-200",
      iconColor: "text-cyan-600",
    },
    {
      icon: Wind,
      label: "Wind Speed",
      value: `${weatherData.windSpeed} km/h`,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <div key={index} className={`${card.color} border rounded-lg p-6`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">{card.label}</p>
                <p className="text-2xl font-bold text-gray-800 mt-2">{card.value}</p>
              </div>
              <Icon className={`${card.iconColor}`} size={32} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
