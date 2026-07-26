# 🌾 Smart Rural Environment & Farm Safety Platform

## Project Overview

Smart Rural Environment & Farm Safety Platform is an IoT-based monitoring system designed for rural farms and agricultural environments.

The system collects real-time environmental data using ESP32 sensor nodes and presents it through a modern web dashboard.

The platform helps farmers monitor environmental conditions, detect hazards, and make better farming decisions.

---

# Problem Statement

Farmers often face problems such as:

- High temperature
- Low soil moisture
- Smoke and fire hazards
- Unexpected rainfall
- Lack of continuous monitoring
- Limited internet connectivity
- No centralized monitoring dashboard

Our solution provides a low-cost smart monitoring platform that continuously monitors the environment and generates real-time alerts.

---

# Objectives

• Monitor environmental conditions

• Display live sensor data

• Detect dangerous conditions

• Generate alerts

• Store historical sensor data

• Provide graphical analytics

• Support multiple sensor nodes

• Easy to scale in future

---

# Hardware

Microcontroller

- ESP32

Sensors

- DHT22 (Temperature & Humidity)

- Soil Moisture Sensor

- MQ Smoke Sensor

- Rain Sensor

- Battery Voltage Monitor

Future Sensors

- Air Quality Sensor

- Light Sensor

- Wind Speed

- GPS

---

# Software Stack

Frontend

React

Vite

Tailwind CSS

Chart.js

React Router

Backend

FastAPI

Python

SQLite

Future

PostgreSQL

Communication

Current

HTTP POST

Future

MQTT

LoRa

WebSocket

---

# Data Flow

ESP32

↓

HTTP POST

↓

FastAPI Backend

↓

SQLite Database

↓

WebSocket

↓

React Dashboard

---

# Website Pages

Home

Dashboard

Analytics

Alerts

Documentation

Team

---

# Dashboard Features

Real-time Sensor Cards

Temperature

Humidity

Soil Moisture

Smoke Level

Rain Detection

Battery Status

Signal Status

Recent Alerts

Live Charts

Device Health

System Status

---

# Design Theme

Theme

Modern Industrial Dashboard

Inspiration

Tesla Dashboard

Grafana

AWS IoT

Color Palette

Primary

#16A34A

Secondary

#2563EB

Danger

#DC2626

Warning

#F59E0B

Background

#0F172A

Cards

#1E293B

Text

#FFFFFF

---

# API Endpoints

POST /sensor

Receive sensor data

GET /latest

Latest sensor values

GET /history

Historical readings

GET /alerts

Alert history

---

# Database

SQLite

Tables

SensorData

Alerts

Devices

---

# Coding Standards

Use reusable components.

Do not duplicate code.

Use clean folder structure.

Keep components small.

Use descriptive variable names.

Comment complex logic.

Responsive design is mandatory.

---

# Current Scope

Live monitoring

Real-time dashboard

Historical data

Alerts

Charts

Documentation

---

# Future Scope

MQTT

LoRa

AI Prediction

Weather API

Mobile Application

Cloud Deployment

Authentication

Role-based Dashboard

---

# Development Rules

Always keep code modular.

Never place all logic inside one file.

Separate UI, API, and business logic.

Frontend must never communicate directly with ESP32.

Backend is responsible for all communication.

Keep UI clean and responsive.

Do not use fake data.

Use replay mode with previously collected real sensor data when live hardware is unavailable.

---

# Goal

Build a professional IoT monitoring platform that looks like a commercial product rather than a typical college project.