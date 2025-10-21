"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { AlertTriangle, Users, MapPin } from "lucide-react"

interface FloodStatsProps {
  floodData: any[]
}

export default function FloodStats({ floodData }: FloodStatsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Flood Statistics</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {floodData.map((data) => (
          <div
            key={data.id}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border border-red-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">{data.city}</p>
                <p className="text-3xl font-bold text-red-600 mt-2">{data.floodLevel}m</p>
                <p className="text-gray-600 text-sm mt-1">Flood Level</p>
              </div>
              <AlertTriangle className="text-red-600" size={32} />
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-600" />
                <span>{data.affectedAreas} areas affected</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-orange-600" />
                <span>{data.evacuated.toLocaleString()} evacuated</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={floodData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="floodLevel" fill="#ef4444" name="Flood Level (m)" />
          <Bar dataKey="affectedAreas" fill="#f97316" name="Affected Areas" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
