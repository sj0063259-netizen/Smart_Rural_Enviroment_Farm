# 🛠 Technology Stack

## Project

Smart Rural Environment & Farm Safety Platform

---

# Purpose

This document defines every technology used in the project.

Claude must follow this stack unless explicitly instructed otherwise.

---

# Frontend

## Framework

React 19

Reason

- Component-based architecture
- Easy to maintain
- Industry standard
- Excellent for dashboards

---

## Build Tool

Vite

Reason

- Very fast
- Simple configuration
- Excellent developer experience

---

## Styling

Tailwind CSS

Reason

- Utility-first
- Responsive
- Fast development
- Consistent UI

Do NOT use

Bootstrap

Material UI

Bulma

Foundation

---

## Icons

Lucide React

Reason

- Lightweight
- Clean
- Modern

---

## Charts

Chart.js

Reason

- Easy integration
- Beautiful charts
- Responsive

Future

Apache ECharts

---

## Animation

Framer Motion

Reason

- Smooth animations
- Lightweight
- Modern UI

---

## HTTP Client

Axios

Reason

- Cleaner API calls
- Better error handling

---

## Routing

React Router

Reason

- Standard React routing

---

## Backend

Framework

FastAPI

Reason

- Very fast
- Async support
- Automatic API docs
- Modern Python

---

## Language

Python

---

## Database

Current

SQLite

Reason

- Lightweight
- Easy setup
- Perfect for hackathon

Future

PostgreSQL

---

## ORM

SQLAlchemy

Reason

- Clean database models
- Easy migration

---

## Validation

Pydantic

Reason

- Request validation
- Type safety

---

## Realtime

Socket.IO

Reason

- Dashboard updates instantly

Future

MQTT Broker

---

# Firmware

Controller

ESP32

Language

Arduino C++

Communication

Current

HTTP POST

Future

MQTT

LoRa

---

# Version Control

Git

GitHub

---

# Deployment

Current

Localhost

Future

Render

Railway

Docker

---

# Browser Support

Chrome

Edge

Firefox

---

# Architecture

ESP32

↓

FastAPI

↓

SQLite

↓

Socket.IO

↓

React Dashboard

---

# Folder Architecture

frontend/

backend/

firmware/

docs/

assets/

---

# Libraries

Frontend

React

Tailwind

Axios

Chart.js

Framer Motion

Lucide React

React Router

Backend

FastAPI

SQLAlchemy

Pydantic

Uvicorn

python-dotenv

---

# Libraries Not Allowed

jQuery

Bootstrap

Material UI

Inline CSS

Fake Sensor Data

---

# Future Upgrades

MQTT

LoRa

AI Prediction

Weather API

Cloud Database

Authentication

Role Management

Mobile App

Docker

CI/CD

---

# Development Principle

Always keep the project modular.

Every technology must have a clear purpose.

Never add unnecessary dependencies.

Keep the project lightweight and scalable.