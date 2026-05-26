# Vecopa - Vercel Deployment Guide

## Project Overview
Vecopa is a monorepo containing:
- **Web App**: React + Vite frontend (POS system for HORECA)
- **API**: NestJS backend with Firebase integration

## Vercel Deployment

### Prerequisites
- Install Vercel CLI: `npm i -g vercel`
- Account on Vercel platform

### Environment Variables
Set these environment variables in Vercel dashboard:

#### Web App Variables
- `VITE_API_URL` - Your API URL (e.g., `/api/v1`)
- `VITE_FIREBASE_API_KEY` - Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN` - Firebase auth domain
- `VITE_FIREBASE_PROJECT_ID` - Firebase project ID
- `VITE_FIREBASE_STORAGE_BUCKET` - Firebase storage bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID` - Firebase messaging sender ID
- `VITE_FIREBASE_APP_ID` - Firebase app ID
- `VITE_FIREBASE_MEASUREMENT_ID` - Firebase measurement ID

#### API Variables
- `DATABASE_URL` - PostgreSQL database URL
- `JWT_SECRET` - JWT secret key
- `JWT_EXPIRES_IN` - JWT expiration time
- `FIREBASE_PROJECT_ID` - Firebase project ID
- `FIREBASE_SERVICE_ACCOUNT` - Firebase service account JSON

### Deployment Steps

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy the project**
```bash
vercel
```

4. **For production deployment**
```bash
vercel --prod
```

### Project Structure
```
├── apps/
│   ├── web/          # React + Vite frontend
│   └── api/          # NestJS backend
├── vercel.json       # Vercel configuration
├── package.json      # Root workspace configuration
└── .env.example      # Environment variables template
```

### Build Commands
- Web app: `tsc -b && vite build`
- API: `nest build`

### Development
```bash
# Start web app
npm run dev:web

# Start API
npm run dev:api

# Start both
npm run dev
```

### Notes
- The monorepo structure is configured with workspaces
- Vercel automatically detects the React app in `apps/web/`
- API routes are configured to work as serverless functions
- Firebase integration is configured for both frontend and backend