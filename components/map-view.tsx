"use client"
import { MapPin, Wind, Droplets } from "lucide-react"
import dynamic from "next/dynamic"

interface MapViewProps {
  floodData: any[]
}

// Dynamic import for Leaflet to avoid SSR issues
const DynamicMap = dynamic(() => import("./leaflet-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-2"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
})

export default function MapView({ floodData }: MapViewProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Storm Map & Tracking</h2>

      <DynamicMap floodData={floodData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {floodData.map((data) => (
          <div key={data.id} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{data.city}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Severity: <span className="font-semibold text-red-600">{data.severity}</span>
              </p>
              <p className="text-sm text-gray-600">Status: Active monitoring</p>
              <div className="mt-3 flex gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Wind size={14} />
                  <span>45 km/h</span>
                </div>
                <div className="flex items-center gap-1">
                  <Droplets size={14} />
                  <span>120 mm</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
