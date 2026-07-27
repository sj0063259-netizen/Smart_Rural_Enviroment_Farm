require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");

const {
    saveSensorData,
    getLatestData
} = require("./database");

const {
    validateSensorData
} = require("./utils");
const {
    initializeSocket,
    sendSensorData
} = require("./socket");
const app = express();
const server = http.createServer(app);
initializeSocket(server);
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());

// ============================
// Health Check
// ============================
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "FarmSafe Backend is Running 🚀"
    });
});

// ============================
// Receive Sensor Data
// ============================
app.post("/api/sensor", (req, res) => {

    const sensorData = req.body;

    // Validate input
    const error = validateSensorData(sensorData);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error
        });
    }

    saveSensorData(sensorData, function(err) {

        if (err) {
            console.error(err);

            return res.status(500).json({
                success: false,
                message: "Failed to save sensor data."
            });
        }

        console.log("📡 Sensor Data Received:");
        console.table(sensorData);
sendSensorData(sensorData);
        res.status(201).json({
            success: true,
            message: "Sensor data saved successfully."
        });

    });

});

// ============================
// Get Latest Sensor Data
// ============================
app.get("/api/latest", (req, res) => {

    getLatestData((err, row) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (!row) {
            return res.status(404).json({
                success: false,
                message: "No sensor data available."
            });
        }

        res.json({
            success: true,
            data: row
        });

    });

});

// ============================
// Home Route
// ============================
app.get("/", (req, res) => {

    res.send("🌱 FarmSafe Backend Running");

});

// ============================
// Start Server
// ============================
server.listen(PORT, () => {

    console.log("===================================");
    console.log("🌱 FarmSafe Backend Started");
    console.log(`🚀 Server : http://localhost:${PORT}`);
    console.log("===================================");

});