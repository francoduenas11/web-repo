# JLabs Web (React + Vite)

A simple React app with Login, Register, and Home pages using the JLabs API.

## Features
- Login and Register forms
- Redirects on success
- Home shows authenticated user data
- Logout clears session

## Requirements
- Node 18.x

## Setup (local dev)
1. cp .env.example .env
2. npm install
3. npm run dev

.env
- VITE_API_URL=http://localhost:4000

## Build
- npm run build
- npm run preview

## Deployment (Vercel)
- Import repo to Vercel
- Set env: VITE_API_URL=https://your-api-host.com
- Build with Vite defaults
