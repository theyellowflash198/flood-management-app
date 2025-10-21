export async function fetchWeatherData(city: string, apiKey: string) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    )
    const data = await response.json()

    if (!data.main) {
      throw new Error("Invalid city or API response")
    }

    return {
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      rainfall: data.rain?.["1h"] || 0,
      condition: data.weather[0].main,
      city: data.name,
      timestamp: new Date(),
    }
  } catch (error) {
    console.error("Error fetching weather data:", error)
    return null
  }
}

export async function fetchStormData(lat: number, lon: number, apiKey: string) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
    )
    const data = await response.json()

    const stormTimeline = data.list.slice(0, 5).map((item: any, index: number) => ({
      stage: ["Formation", "Intensification", "Landfall", "Weakening", "Dissipation"][index],
      date: new Date(item.dt * 1000).toISOString().split("T")[0],
      windSpeed: Math.round(item.wind.speed * 3.6),
      rainfall: item.rain?.["3h"] || 0,
      temperature: Math.round(item.main.temp),
    }))

    return stormTimeline
  } catch (error) {
    console.error("Error fetching storm data:", error)
    return null
  }
}
