# Flood Management Web Application

A comprehensive real-time flood monitoring and management system with interactive mapping, 3D city simulations, and weather data integration.

## Features

- **Real-time Flood Monitoring**: Live flood data and statistics for multiple cities
- **Interactive Storm Map**: Leaflet.js-based map with color-coded flood severity markers
- **3D Digital Twin Simulation**: Three.js visualization of city terrain with dynamic water level animation
- **Weather Integration**: OpenWeatherMap API for real-time weather and storm forecasts
- **User Authentication**: Secure login and registration system
- **Storm Timeline**: Visual timeline showing storm progression stages
- **Responsive Design**: Mobile-first design with TailwindCSS

## Tech Stack

### Frontend
- **React 18** - UI framework
- **Next.js 14** - Full-stack framework
- **TailwindCSS** - Styling
- **Leaflet.js** - Interactive mapping
- **Three.js** - 3D visualization
- **Recharts** - Data visualization
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **JWT** - Authentication
- **CORS** - Cross-origin requests

### APIs
- **OpenWeatherMap API** - Weather and storm data
- **Google Maps API** - (Optional) Enhanced mapping
- **NOAA Data** - (Optional) Real flood data

## Project Structure

\`\`\`
flood-management-app/
├── app/
│   ├── page.tsx              # Home page
│   ├── storm-map/page.tsx    # Storm tracking page
│   ├── simulation/page.tsx   # 3D simulation page
│   ├── about/page.tsx        # About page
│   └── layout.tsx            # Root layout
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── login-form.tsx        # Login/signup form
│   ├── home-page.tsx         # Dashboard
│   ├── flood-stats.tsx       # Flood statistics
│   ├── storm-timeline.tsx    # Storm timeline
│   ├── map-view.tsx          # Map container
│   ├── leaflet-map.tsx       # Leaflet map implementation
│   ├── digital-twin.tsx      # 3D simulation
│   ├── info-cards.tsx        # Weather info cards
│   └── footer.tsx            # Footer
├── backend/
│   ├── server.ts             # Express server
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── floodDataRoutes.ts
│   │   └── weatherRoutes.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── floodController.ts
│   │   └── weatherController.ts
│   └── utils/
│       └── fetchWeatherData.ts
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd flood-management-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Update `.env.local` with:
   - `OPENWEATHER_API_KEY`: Get from [OpenWeatherMap](https://openweathermap.org/api)
   - `JWT_SECRET`: Generate a secure random string
   - `NEXT_PUBLIC_API_URL`: Backend API URL

4. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open in browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Flood Data
- `GET /api/flood-data/current` - Get current flood data
- `GET /api/flood-data/history` - Get flood history
- `POST /api/flood-data/update` - Update flood data

### Weather
- `GET /api/weather/current` - Get current weather
- `GET /api/weather/storm-timeline` - Get storm forecast

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Backend (Render/Railway)
1. Create account on Render or Railway
2. Connect GitHub repository
3. Set environment variables
4. Deploy

### Database (MongoDB Atlas)
1. Create MongoDB Atlas account
2. Create cluster and database
3. Get connection string
4. Add to backend environment variables

## Usage

### Login
1. Click "Sign Up" to create account
2. Enter name, email, phone, city, and address
3. Agree to terms and create account

### Dashboard
- View real-time flood statistics
- Check weather conditions
- See affected areas and evacuation numbers

### Storm Map
- Interactive map showing flood zones
- Click markers for detailed information
- Real-time storm tracking

### 3D Simulation
- Play/pause flood simulation
- Adjust simulation speed
- Manually control flood level
- Watch water rise in 3D city model

## Future Enhancements

- AI-powered flood prediction models
- SMS/Email alert system (Twilio integration)
- Community help board with safe shelters
- Offline PWA support
- Voice guidance for accessibility
- Real-time satellite imagery integration
- Multi-language support

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues or questions:
- Email: help@floodmanager.com
- NDRF Helpline: 1-800-NDRF-911
- Emergency: 1-800-FLOOD-911

## Acknowledgments

- NDRF (National Disaster Response Force)
- OpenWeatherMap for weather data
- Leaflet.js for mapping
- Three.js for 3D visualization
- Vercel for hosting
