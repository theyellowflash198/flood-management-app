// Mock flood data
const floodData = [
  {
    id: 1,
    city: "Chennai",
    floodLevel: 2.5,
    affectedAreas: 15,
    evacuated: 5000,
    date: new Date("2024-10-15"),
    severity: "High",
  },
  {
    id: 2,
    city: "Bangalore",
    floodLevel: 1.2,
    affectedAreas: 8,
    evacuated: 2000,
    date: new Date("2024-10-10"),
    severity: "Medium",
  },
]

export const getFloodData = (req: any, res: any) => {
  const { city } = req.query
  const data = city ? floodData.filter((d) => d.city.toLowerCase() === city.toLowerCase()) : floodData
  res.json(data)
}

export const getFloodHistory = (req: any, res: any) => {
  res.json(floodData)
}

export const updateFloodData = (req: any, res: any) => {
  const { city, floodLevel, affectedAreas, evacuated, severity } = req.body

  if (!city) {
    return res.status(400).json({ error: "City is required" })
  }

  const existingData = floodData.find((d) => d.city.toLowerCase() === city.toLowerCase())

  if (existingData) {
    existingData.floodLevel = floodLevel || existingData.floodLevel
    existingData.affectedAreas = affectedAreas || existingData.affectedAreas
    existingData.evacuated = evacuated || existingData.evacuated
    existingData.severity = severity || existingData.severity
    existingData.date = new Date()
  } else {
    floodData.push({
      id: floodData.length + 1,
      city,
      floodLevel: floodLevel || 0,
      affectedAreas: affectedAreas || 0,
      evacuated: evacuated || 0,
      date: new Date(),
      severity: severity || "Low",
    })
  }

  res.json({ message: "Flood data updated", data: existingData || floodData[floodData.length - 1] })
}
