import {
  Thermometer,
  Droplets,
  Sprout,
  Flame,
  TrendingUp,
} from "lucide-react";

import { useSensor } from "../../context/SensorContext";

export default function SensorCards() {
  const sensorData = useSensor();

  // --------------------------
  // Status Functions
  // --------------------------

  const getTemperatureStatus = () => {
    if (sensorData.temperature == null) return "Waiting...";
    if (sensorData.temperature < 20) return "Low";
    if (sensorData.temperature <= 35) return "Normal";
    return "High";
  };

  const getHumidityStatus = () => {
    if (sensorData.humidity == null) return "Waiting...";
    if (sensorData.humidity < 40) return "Dry Air";
    if (sensorData.humidity <= 70) return "Optimal";
    return "High Humidity";
  };

  const getSoilStatus = () => {
    if (sensorData.soil == null) return "Waiting...";
    if (sensorData.soil < 35) return "Dry";
    if (sensorData.soil <= 70) return "Optimal";
    return "Wet";
  };

  const getAirStatus = () => {
    if (sensorData.airQuality == null) return "Waiting...";
    if (sensorData.airQuality < 150) return "Good";
    if (sensorData.airQuality <= 300) return "Moderate";
    return "Poor";
  };

  const sensors = [
    {
      icon: Thermometer,
      title: "Temperature",
      value:
        sensorData.temperature != null
          ? `${sensorData.temperature}°C`
          : "--",
      status: getTemperatureStatus(),
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      icon: Droplets,
      title: "Humidity",
      value:
        sensorData.humidity != null
          ? `${sensorData.humidity}%`
          : "--",
      status: getHumidityStatus(),
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      icon: Sprout,
      title: "Soil Moisture",
      value:
        sensorData.soil != null
          ? `${sensorData.soil}%`
          : "--",
      status: getSoilStatus(),
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      icon: Flame,
      title: "Air Quality",
      value:
        sensorData.airQuality != null
          ? sensorData.airQuality
          : "--",
      status: getAirStatus(),
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {sensors.map((sensor) => {
        const Icon = sensor.icon;

        return (
          <div
            key={sensor.title}
            className="group rounded-3xl border border-slate-700/60 bg-[#0F172A]/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div className="flex items-center justify-between">

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${sensor.bg}`}
              >
                <Icon
                  className={`${sensor.color} transition-transform duration-300 group-hover:scale-110`}
                  size={28}
                />
              </div>

              <div
                className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                  sensorData.connected
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                <TrendingUp
                  size={12}
                  className={sensorData.connected ? "animate-pulse" : ""}
                />
                {sensorData.connected ? "Live" : "Offline"}
              </div>

            </div>

            <p className="mt-6 text-sm text-slate-400">
              {sensor.title}
            </p>

            <h3 className="mt-2 text-4xl font-bold text-white">
              {sensor.value}
            </h3>

            <p className="mt-4 text-sm font-medium text-slate-500">
              {sensor.status}
            </p>

          </div>
        );
      })}
    </div>
  );
}