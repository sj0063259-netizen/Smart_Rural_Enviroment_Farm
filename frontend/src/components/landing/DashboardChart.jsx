import { useState } from "react";
import { Activity } from "lucide-react";
import { useSensor } from "../../context/SensorContext";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const sensors = [
  {
    key: "temperature",
    label: "Temperature",
    color: "#fb923c",
    unit: "°C",
  },
  {
    key: "humidity",
    label: "Humidity",
    color: "#22d3ee",
    unit: "%",
  },
  {
    key: "soil",
    label: "Soil Moisture",
    color: "#22c55e",
    unit: "%",
  },
  {
    key: "airQuality",
    label: "Air Quality",
    color: "#ef4444",
    unit: "",
  },
];

export default function DashboardChart() {
  const sensorData = useSensor();

  const [selectedSensor, setSelectedSensor] = useState(sensors[0]);

  const chartData = sensorData.history;

  return (
    <div className="mt-8 border-t border-slate-700/60 pt-8">

      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex items-center gap-2 text-green-400">
            <Activity size={18} />

            <span className="text-sm font-semibold uppercase tracking-[0.18em]">
              Sensor Analytics
            </span>

          </div>

          <h4 className="mt-3 text-2xl font-bold text-white">
            Live Environmental Trends
          </h4>

          <p className="mt-2 text-slate-400">
            Real-time visualization of environmental sensor readings.
          </p>

        </div>

        <div className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
          LIVE
        </div>

      </div>

      {/* Sensor Selection */}

      <div className="mt-8 flex flex-wrap gap-3">

        {sensors.map((sensor) => (

          <button
            key={sensor.key}
            onClick={() => setSelectedSensor(sensor)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              selectedSensor.key === sensor.key
                ? "bg-green-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {sensor.label}
          </button>

        ))}

      </div>

      {/* Chart */}

      <div className="mt-8 h-80 rounded-3xl bg-[#0F172A] p-6">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={chartData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #374151",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey={selectedSensor.key}
              stroke={selectedSensor.color}
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
              animationDuration={400}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}