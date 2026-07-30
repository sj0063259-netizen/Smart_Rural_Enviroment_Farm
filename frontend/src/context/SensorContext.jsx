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
    lastUpdated: null,

    // Stores last 20 readings for charts
    history: [],
  });

  useEffect(() => {
    async function loadLatestData() {
      const response = await getLatestData();

      if (response && response.success) {
        const currentTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        setSensorData({
          ...response.data,
          connected: true,
          lastUpdated: currentTime,

          history: [
            {
              ...response.data,
              time: currentTime,
            },
          ],
        });
      }
    }

    loadLatestData();

    // Listen for live ESP32 data
    socket.on("sensorData", (data) => {
      console.log("📡 Live Sensor Data:", data);

      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setSensorData((prev) => ({
        ...data,

        connected: true,
        lastUpdated: currentTime,

        history: [
          ...prev.history,
          {
            ...data,
            time: currentTime,
          },
        ].slice(-20),
      }));
    });

    socket.on("connect", () => {
      console.log("🟢 Connected to Backend");
    });

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