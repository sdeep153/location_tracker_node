# Realtime Tracker

A real-time location tracking application using Node.js, Express, Socket.IO, and Leaflet.js.

## Steps to Push to GitHub

1. **Initialize Git Repository**:
   ```bash
   git init
   ```

2. **Add Remote Repository**:
   ```bash
   git remote add origin <your-repository-url>
   ```

3. **Stage Files**:
   ```bash
   git add .
   ```

4. **Commit Changes**:
   ```bash
   git commit -m "Initial commit"
   ```

5. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Project Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open the application in your browser at `http://localhost:3000`.

## Environment Variables

- `PORT`: The port on which the server runs (default: 3000).

## Features

- Real-time location tracking using WebSockets.
- Interactive map using Leaflet.js.
- Handles user disconnection gracefully.
