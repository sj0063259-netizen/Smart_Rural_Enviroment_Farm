import { createContext, useContext, useEffect, useState } from "react";
import { getLatestData } from "../services/api";
import socket from "../services/socket";

const SensorContext = createContext();

export function SensorProvider({ children }) {
  const [sensorData, setSensorData] = useState({
    temperature: null,
    humidity: null,
    soil: null,
    airQuality: null,
    battery: null,
    connected: false,
  });

  useEffect(() => {
    // Load latest data from backend
    async function loadLatestData() {
      const response = await getLatestData();

      if (response && response.success) {
        setSensorData({
          ...response.data,
          connected: true,
        });
      }
    }

    loadLatestData();

    // Listen for live ESP32 data
    socket.on("sensorData", (data) => {
      console.log("📡 Live Sensor Data:", data);

      setSensorData({
        ...data,
        connected: true,
      });
    });

    // Socket connected
    socket.on("connect", () => {
      console.log("🟢 Connected to Backend");
    });

    // Socket disconnected
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