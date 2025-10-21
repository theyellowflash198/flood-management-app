"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface LeafletMapProps {
  floodData: any[]
}

export default function LeafletMap({ floodData }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Initialize map centered on India
    const map = L.map(mapRef.current).setView([20.5937, 78.9629], 5)

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map)

    // City coordinates
    const cityCoords: Record<string, [number, number]> = {
      Chennai: [13.0827, 80.2707],
      Bangalore: [12.9716, 77.5946],
      Mumbai: [19.076, 72.8777],
      Delhi: [28.7041, 77.1025],
    }

    // Add markers for flood data
    floodData.forEach((data) => {
      const coords = cityCoords[data.city]
      if (coords) {
        const color = data.severity === "High" ? "red" : data.severity === "Medium" ? "orange" : "yellow"

        const customIcon = L.divIcon({
          html: `
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-${color}-500 border-4 border-white shadow-lg">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          `,
          className: "",
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40],
        })

        const marker = L.marker(coords, { icon: customIcon }).addTo(map)

        marker.bindPopup(`
          <div class="p-3">
            <h3 class="font-bold text-gray-800">${data.city}</h3>
            <p class="text-sm text-gray-600">Flood Level: ${data.floodLevel}m</p>
            <p class="text-sm text-gray-600">Severity: <span class="font-semibold text-red-600">${data.severity}</span></p>
            <p class="text-sm text-gray-600">Affected Areas: ${data.affectedAreas}</p>
            <p class="text-sm text-gray-600">Evacuated: ${data.evacuated.toLocaleString()}</p>
          </div>
        `)
      }
    })

    mapInstanceRef.current = map

    return () => {
      // Cleanup on unmount
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [floodData])

  return <div ref={mapRef} className="w-full h-96 rounded-lg overflow-hidden border border-gray-200" />
}
