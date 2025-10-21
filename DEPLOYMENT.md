# Deployment Guide

## Frontend Deployment (Vercel)

### Step 1: Prepare Repository
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the project root directory

### Step 3: Environment Variables
In Vercel dashboard, add:
\`\`\`
NEXT_PUBLIC_API_URL=https://your-backend-url.com
\`\`\`

### Step 4: Deploy
Click "Deploy" - Vercel will automatically build and deploy

## Backend Deployment (Render)

### Step 1: Create Render Account
Go to [render.com](https://render.com) and sign up

### Step 2: Create New Web Service
1. Click "New +"
2. Select "Web Service"
3. Connect GitHub repository
4. Select the repository

### Step 3: Configure Service
- **Name**: flood-manager-api
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `node backend/server.ts`

### Step 4: Add Environment Variables
\`\`\`
PORT=5000
NODE_ENV=production
JWT_SECRET=your_secure_secret
OPENWEATHER_API_KEY=your_api_key
MONGO_URI=your_mongodb_connection_string
\`\`\`

### Step 5: Deploy
Click "Create Web Service" - Render will deploy automatically

## Database Setup (MongoDB Atlas)

### Step 1: Create Account
Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)

### Step 2: Create Cluster
1. Click "Create a Deployment"
2. Select "M0 Free" tier
3. Choose cloud provider and region
4. Click "Create Deployment"

### Step 3: Get Connection String
1. Click "Connect"
2. Select "Drivers"
3. Copy connection string
4. Replace `<password>` with your database password

### Step 4: Update Backend
Add to `.env`:
\`\`\`
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/flood-manager
\`\`\`

## Environment Variables Checklist

### Frontend (.env.local)
- [ ] `NEXT_PUBLIC_API_URL` - Backend API URL

### Backend (.env)
- [ ] `PORT` - Server port (default: 5000)
- [ ] `NODE_ENV` - Environment (development/production)
- [ ] `JWT_SECRET` - JWT signing secret
- [ ] `OPENWEATHER_API_KEY` - OpenWeatherMap API key
- [ ] `MONGO_URI` - MongoDB connection string

## Monitoring & Maintenance

### Vercel
- Check deployment logs in Vercel dashboard
- Monitor performance metrics
- Set up error tracking with Sentry

### Render
- View logs in Render dashboard
- Monitor CPU and memory usage
- Set up alerts for downtime

### MongoDB
- Monitor database performance
- Set up automated backups
- Review security settings

## Troubleshooting

### API Connection Issues
1. Verify `NEXT_PUBLIC_API_URL` is correct
2. Check CORS settings in backend
3. Ensure backend is running

### Weather API Errors
1. Verify OpenWeatherMap API key is valid
2. Check API rate limits
3. Ensure city names are correct

### Database Connection Issues
1. Verify MongoDB connection string
2. Check IP whitelist in MongoDB Atlas
3. Ensure database user has correct permissions

## Performance Optimization

### Frontend
- Enable image optimization
- Use dynamic imports for large components
- Implement code splitting

### Backend
- Add caching for weather data
- Implement database indexing
- Use connection pooling

### Database
- Create indexes on frequently queried fields
- Archive old flood data
- Optimize query performance
