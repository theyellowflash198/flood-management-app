"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DigitalTwin from "@/components/digital-twin"
import { Play, Pause, RotateCcw } from "lucide-react"

export default function SimulationPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [simulationSpeed, setSimulationSpeed] = useState(1)
  const [floodLevel, setFloodLevel] = useState(0)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setFloodLevel(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
      <Navbar isLoggedIn={true} user={{ name: "User" }} onLogout={() => {}} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">3D City Flood Simulation</h1>
          <p className="text-gray-600 mt-2">
            Interactive digital twin showing flood progression and water stagnation zones
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <DigitalTwin isPlaying={isPlaying} floodLevel={floodLevel} setFloodLevel={setFloodLevel} />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Simulation Controls</label>
                <div className="flex gap-2">
                  <button
                    onClick={handlePlayPause}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <RotateCcw size={18} />
                    Reset
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Simulation Speed</label>
                <select
                  value={simulationSpeed}
                  onChange={(e) => setSimulationSpeed(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={0.5}>0.5x (Slow)</option>
                  <option value={1}>1x (Normal)</option>
                  <option value={2}>2x (Fast)</option>
                  <option value={4}>4x (Very Fast)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Flood Level</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={floodLevel}
                    onChange={(e) => setFloodLevel(Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-lg font-bold text-gray-800 w-12">{floodLevel}%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-600">Water Level</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{(floodLevel * 0.03).toFixed(2)}m</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <p className="text-sm text-gray-600">Affected Area</p>
                <p className="text-2xl font-bold text-orange-600 mt-1">{Math.round(floodLevel * 1.5)}%</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <p className="text-sm text-gray-600">Risk Level</p>
                <p className="text-2xl font-bold text-red-600 mt-1">
                  {floodLevel > 70 ? "Critical" : floodLevel > 40 ? "High" : floodLevel > 20 ? "Medium" : "Low"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Simulation Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Real-time 3D visualization of city terrain and buildings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Dynamic water level animation showing flood progression</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Identification of water stagnation zones and vulnerable areas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Interactive controls for speed and flood level adjustment</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">How It Works</h2>
            <ol className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </span>
                <span>Click Play to start the flood simulation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </span>
                <span>Watch water levels rise in the 3D city model</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </span>
                <span>Adjust speed or flood level manually with controls</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  4
                </span>
                <span>Identify critical zones and plan evacuation routes</span>
              </li>
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
