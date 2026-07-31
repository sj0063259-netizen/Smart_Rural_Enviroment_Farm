import { createContext, useContext, useEffect, useState } from "react";
import { getLatestData } from "../services/api";
import socket from "../services/socket";

const SensorContext = createContext();

// ==============================
// Pump Configuration
// ==============================

const SOIL_THRESHOLD = 55;
const PUMP_MODE = "AUTO";

// ==============================
// Helper Function
// ==============================

function getPumpStatus(soil) {
  if (soil == null) return false;

  // Ignore invalid readings
  if (soil < 0 || soil > 100) return false;

  // Pump ON if soil is dry
  return soil < SOIL_THRESHOLD;
}

export function SensorProvider({ children }) {
  const [sensorData, setSensorData] = useState({
    temperature: null,
    humidity: null,
    soil: null,
    airQuality: null,
    battery: null,

    pumpStatus: false,
    mode: PUMP_MODE,

    connected: false,
    lastUpdated: null,

    history: [],
  });

  useEffect(() => {

    // ==============================
    // Load Latest Data
    // ==============================

    async function loadLatestData() {
      try {
        const response = await getLatestData();

        if (!response?.success) return;

        const latestData = response.data;

        const currentTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        setSensorData({
          ...latestData,

          pumpStatus: getPumpStatus(latestData.soil),
          mode: PUMP_MODE,

          connected: true,
          lastUpdated: currentTime,

          history: [
            {
              ...latestData,
              time: currentTime,
            },
          ],
        });

      } catch (error) {
        console.error("❌ Failed to load latest sensor data", error);
      }
    }

    loadLatestData();

    // ==============================
    // Live ESP32 Data
    // ==============================

    socket.on("sensorData", (data) => {

      console.log("📡 Live Sensor Data:", data);

      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setSensorData((prev) => {

        // Keep previous soil value if received value is invalid
        const soil =
          data.soil == null ||
          data.soil < 0 ||
          data.soil > 100
            ? prev.soil
            : data.soil;

        return {
          ...data,

          soil,

          pumpStatus: getPumpStatus(soil),

          mode: PUMP_MODE,

          connected: true,

          lastUpdated: currentTime,

          history: [
            ...prev.history,
            {
              ...data,
              soil,
              time: currentTime,
            },
          ].slice(-20),
        };
      });

    });

    // ==============================
    // Socket Connected
    // ==============================

    socket.on("connect", () => {
      console.log("🟢 Connected to Backend");
    });

    // ==============================
    // Socket Disconnected
    // ==============================

    socket.on("disconnect", () => {

      console.log("🔴 Backend Disconnected");

      setSensorData((prev) => ({
        ...prev,
        connected: false,
      }));

    });

    return () => {
      socket.off("sensorData");
      socket.off("connect");
      socket.off("disconnect");
    };

  }, []);

  return (
    <SensorContext.Provider value={sensorData}>
      {children}
    </SensorContext.Provider>
  );
}

export function useSensor() {
  return useContext(SensorContext);
}