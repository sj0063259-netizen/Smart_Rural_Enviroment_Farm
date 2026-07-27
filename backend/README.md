# FarmSafe Backend

Simple Express + SQLite backend for the FarmSafe Smart Rural Environment & Farm Safety Platform.

## Features

- Receive sensor data from ESP32
- Store latest sensor data in SQLite
- REST API for dashboard
- Real-time updates with Socket.IO

## APIs

GET /api/health

GET /api/latest

POST /api/sensor