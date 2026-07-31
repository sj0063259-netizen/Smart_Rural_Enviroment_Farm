# 🌱 FarmSafe – Smart Agriculture Monitoring & Irrigation System

FarmSafe is an IoT-based Smart Agriculture Monitoring and Irrigation System designed to help farmers monitor field conditions in real-time and automate irrigation using soil moisture data.

The system combines **ESP32**, environmental sensors, a **React Dashboard**, **Express Backend**, **SQLite Database**, and **Socket.IO** to provide live monitoring and intelligent irrigation control.

---

# 🚀 Features

## 🌡 Real-Time Sensor Monitoring

- Temperature Monitoring
- Humidity Monitoring
- Soil Moisture Monitoring
- Air Quality Monitoring
- Battery Status Monitoring

---

## 💧 Smart Irrigation System

### AUTO Mode

- Automatically monitors soil moisture.
- Starts the water pump when soil moisture falls below the threshold.
- Stops irrigation once the soil moisture reaches the desired level.

### MANUAL Mode

- User can manually start the pump.
- User can manually stop the pump.
- Manual mode overrides automatic irrigation until switched back to AUTO.

---

## 📡 Live Dashboard

- Live Sensor Cards
- Pump Status
- Soil Condition
- Current Irrigation Action
- Battery Percentage
- Last Updated Time
- Live Sensor History Chart

---

## 🔄 Real-Time Communication

Uses **Socket.IO** for instant updates between:

- ESP32
- Backend
- React Dashboard

No page refresh required.

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Context API
- Socket.IO Client
- Lucide React Icons

---

## Backend

- Node.js
- Express.js
- Socket.IO
- SQLite

---

## Hardware

- ESP32
- Soil Moisture Sensor
- DHT11 / DHT22 Sensor
- MQ Air Quality Sensor
- Relay Module
- Water Pump
- Battery

---

# 📂 Project Structure

```
FarmSafe/
│
├── backend/
│   ├── database.js
│   ├── server.js
│   ├── socket.js
│   ├── utils.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │
│   ├── components/
│   │     ├── Dashboard/
│   │     ├── Hero/
│   │     ├── Navbar/
│   │     └── Footer/
│   │
│   ├── context/
│   │     └── SensorContext.jsx
│   │
│   ├── services/
│   │     ├── api.js
│   │     └── socket.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── .env
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/sj0063259-netizen/Smart_Rural_Enviroment_Farm.git
```

---

# Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Run server

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create

```
.env
```

```env
VITE_API_URL=http://localhost:5000
```

Run

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# API Endpoints

## Health Check

```
GET /api/health
```

---

## Receive Sensor Data

```
POST /api/sensor
```

Example

```json
{
  "temperature": 29,
  "humidity": 60,
  "soil": 42,
  "airQuality": 95,
  "battery": 82
}
```

---

## Get Latest Sensor Data

```
GET /api/latest
```

---

## Manual Pump Control

```
POST /api/pump
```

Example

```json
{
  "action": "ON",
  "mode": "MANUAL"
}
```

---

# Socket Events

## Server → Client

### sensorData

Sends live sensor updates.

### pumpCommand

Broadcasts manual pump commands.

---

# Dashboard Modules

- Live Sensor Cards
- Temperature
- Humidity
- Soil Moisture
- Air Quality
- Battery Status
- Pump Status
- Soil Condition
- Smart Irrigation Controller
- AUTO / MANUAL Switching
- Live Chart
- Last Updated Timestamp

---

# Smart Irrigation Logic

## AUTO Mode

```
IF Soil Moisture < Threshold

↓

Pump ON

ELSE

Pump OFF
```

---

## MANUAL Mode

```
User Controls Pump

↓

Pump ON

OR

Pump OFF

↓

AUTO Logic Disabled
```

---

# Future Improvements

- ESP32 Relay Integration
- Firebase Authentication
- Multi-Farm Monitoring
- Weather API Integration
- Crop Recommendation System
- SMS/Email Alerts
- Water Usage Analytics
- AI-Based Irrigation Prediction
- Mobile Application
- Solar Power Monitoring

---

# Deployment

Frontend

- Vercel

Backend

- Render

Database

- SQLite

---

# Screenshots

Add screenshots of:

- Dashboard
- Sensor Cards
- Smart Irrigation Controller
- Live Charts
- Manual Pump Controls

---

# Contributors

**Satyam Kumar Jha**

B.Tech Electrical Engineering

Central University of Karnataka
Aman chaudhary

---B.Tech Electrical Engineering

Central University of Karnataka
Aryan verma
B.Tech Electrical Engineering

Central University of Karnataka
Himanshu prajapati
B.Tech Electronics and communication enginerring 

Central University of Karnataka

# License

This project is licensed under the MIT License.

---

## ⭐ If you found this project helpful, consider giving it a Star on GitHub!
