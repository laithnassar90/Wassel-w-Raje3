# 🚀 Wassel Platform - Quick Start Guide

## Prerequisites
- Node.js 18+ installed
- Docker Desktop installed and running

## Installation & Launch

### 1. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### 2. Install Frontend Dependencies (if needed)
```bash
npm install
```

### 3. Start Database (PostgreSQL + Redis)
```bash
docker-compose up -d
```

### 4. Initialize Database
```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
cd ..
```

### 5. Start Backend Server
Open a new terminal:
```bash
cd backend
npm run dev
```
Backend will run on: http://localhost:3001

### 6. Start Frontend
Open another terminal:
```bash
npm run dev
```
Frontend will run on: http://localhost:5173

## Access Points
- **Frontend App**: http://localhost:5173
- **Backend API**: http://localhost:3001/api
- **Health Check**: http://localhost:3001/api/health

## Features Available
✅ Ride Search & Booking
✅ Offer Ride
✅ Bus Routes & Schedules
✅ Zakka Rewards System
✅ Real-time API Integration

## Troubleshooting
- If port 3001 is busy: Change PORT in backend/.env
- If port 5173 is busy: Vite will auto-assign another port
- Database issues: Run `docker-compose down -v` then restart

## Next Steps
1. Get Google Maps API key from https://console.cloud.google.com
2. Add it to .env.local: `VITE_GOOGLE_MAPS_API_KEY=your_key_here`
3. Customize branding and features as needed
