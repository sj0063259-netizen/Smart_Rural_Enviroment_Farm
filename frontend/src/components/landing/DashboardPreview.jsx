/**
 * DashboardPreview.jsx
 */

import {
  Thermometer,
  Droplets,
  Sprout,
  Flame,
  BatteryFull,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Bot,
  Power,
  Clock,
} from "lucide-react";

import {
  CONTAINER,
  SECTION_Y,
  CARD,
  BG_PRIMARY,
  TILE,
} from "../../layouts/layout";

import SectionHeader from "../common/SectionHeader";
import { useSensor } from "../../context/SensorContext";

const CHART_BARS = [40, 65, 50, 80, 60, 90, 70];

const ALERTS = [
  {
    icon: CheckCircle2,
    message: "Soil moisture returned to optimal range",
    tone: "text-green-500",
    time: "2m ago",
  },
  {
    icon: AlertTriangle,
    message: "Humidity trending above normal on Node-03",
    tone: "text-yellow-500",
    time: "18m ago",
  },
  {
    icon: CheckCircle2,
    message: "All nodes reported successfully",
    tone: "text-green-500",
    time: "1h ago",
  },
];

function DashboardPreview() {
  const sensorData = useSensor();
// -------------------------------------
// Smart Irrigation Status
// -------------------------------------

const pumpStatus = sensorData.pumpStatus ?? false;

const automationMode = sensorData.mode ?? "AUTO";

const soilCondition =
  sensorData.soil == null
    ? "Waiting..."
    : sensorData.soil < 35
    ? "Dry"
    : "Optimal";

const irrigationAction =
  !sensorData.connected
    ? "Waiting for Sensor Data"
    : pumpStatus
    ? "Irrigation Running"
    : "Monitoring Soil Moisture";

const lastUpdated =
  sensorData.lastUpdated ?? "--:--:--";
  const SENSOR_CARDS = [
    {
      icon: Thermometer,
      label: "Temperature",
      value:
        sensorData.temperature !== null
          ? `${sensorData.temperature}°C`
          : "--",
    },
    {
      icon: Droplets,
      label: "Humidity",
      value:
        sensorData.humidity !== null
          ? `${sensorData.humidity}%`
          : "--",
    },
    {
      icon: Sprout,
      label: "Soil Moisture",
      value:
        sensorData.soil !== null
          ? `${sensorData.soil}%`
          : "--",
    },
    {
      icon: Flame,
      label: "Air Quality",
      value:
        sensorData.airQuality !== null
          ? sensorData.airQuality
          : "--",
    },
    {
      icon: BatteryFull,
      label: "Battery",
      value:
        sensorData.battery !== null
          ? `${sensorData.battery}%`
          : "--",
    },
  ];

  return (
    <section className={`${BG_PRIMARY} ${SECTION_Y}`}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Dashboard Preview"
          headingId="dashboard-preview-heading"
          title="Everything Visible, At a Glance"
          subtitle="A single dashboard showing node health, sensor readings and alerts."
        />

        <div className={`${CARD} mt-16 p-6 sm:p-8`}>
          {/* Node Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#334155] pb-6">
            <div className="flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  sensorData.connected
                    ? "bg-green-500 animate-pulse"
                    : "bg-red-500"
                }`}
              ></span>

              <span className="text-white font-medium text-sm sm:text-base">
                {sensorData.connected
                  ? "ESP32 Connected"
                  : "Waiting for ESP32..."}
              </span>
            </div>

            <span className="text-xs sm:text-sm text-[#94A3B8]">
              {sensorData.connected
                ? "Live Data"
                : "No Sensor Data"}
            </span>
          </div>

          {/* Sensor Cards */}
          <div className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-3 lg:grid-cols-5">
            {SENSOR_CARDS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className={`${TILE} p-4 flex flex-col justify-between`}
              >
                <Icon
                  size={20}
                  className="text-green-500 shrink-0"
                />

                <div className="mt-3">
                  <p className="text-xl font-semibold text-white">
                    {value}
                  </p>

                  <p className="text-sm text-[#94A3B8]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
{/* Smart Irrigation Automation */}

<div className={`${TILE} mt-2 p-6`}>

  <div className="flex items-center justify-between">

    <div className="flex items-center gap-3">

      <Bot size={22} className="text-green-500" />

      <div>

        <h3 className="text-white font-semibold text-lg">

          Smart Irrigation Automation

        </h3>

        <p className="text-sm text-[#94A3B8]">

          Automatic irrigation based on real-time soil moisture.

        </p>

      </div>

    </div>

    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        automationMode === "AUTO"
          ? "bg-blue-500/20 text-blue-400"
          : "bg-yellow-500/20 text-yellow-400"
      }`}
    >

      {automationMode}

    </span>

  </div>

  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

    {/* Pump */}

    <div className="rounded-xl bg-[#0F172A] p-4">

      <div className="flex items-center gap-2">

        <Power
          size={18}
          className={
            pumpStatus
              ? "text-green-500"
              : "text-gray-500"
          }
        />

        <span className="text-sm text-[#CBD5E1]">

          Water Pump

        </span>

      </div>

      <p
        className={`mt-3 text-lg font-bold ${
          pumpStatus
            ? "text-green-400"
            : "text-gray-400"
        }`}
      >

        {pumpStatus ? "🟢 ON" : "⚪ OFF"}

      </p>

    </div>

    {/* Soil */}

    <div className="rounded-xl bg-[#0F172A] p-4">

      <div className="flex items-center gap-2">

        <Sprout
          size={18}
          className="text-green-500"
        />

        <span className="text-sm text-[#CBD5E1]">

          Soil Status

        </span>

      </div>

      <p className="mt-3 text-lg font-bold text-white">

        {soilCondition}

      </p>

    </div>

    {/* Action */}

    <div className="rounded-xl bg-[#0F172A] p-4">

      <div className="flex items-center gap-2">

        <Droplets
          size={18}
          className="text-cyan-400"
        />

        <span className="text-sm text-[#CBD5E1]">

          Current Action

        </span>

      </div>

      <p className="mt-3 text-lg font-bold text-white">

        {irrigationAction}

      </p>

    </div>

    {/* Last Update */}

    <div className="rounded-xl bg-[#0F172A] p-4">

      <div className="flex items-center gap-2">

        <Clock
          size={18}
          className="text-yellow-400"
        />

        <span className="text-sm text-[#CBD5E1]">

          Last Update

        </span>

      </div>

      <p className="mt-3 text-lg font-bold text-white">

        {lastUpdated}

      </p>

    </div>

  </div>

</div>
          {/* Chart */}
          <div className={`${TILE} p-5`}>
            <p className="text-sm text-[#94A3B8]">
              Sensor Trends
            </p>

            <div className="mt-4 flex h-32 items-end gap-2">
              {CHART_BARS.map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className="flex-1 rounded-t bg-green-600/40 transition-all duration-300 hover:bg-green-500/60"
                />
              ))}
            </div>

            <p className="mt-3 text-xs text-[#94A3B8]">
              Live charts will appear here after ESP32 connection.
            </p>
          </div>

          {/* Alerts */}
          <div className="mt-6 space-y-3">
            {ALERTS.map(
              ({ icon: Icon, message, tone, time }) => (
                <div
                  key={message}
                  className={`${TILE} flex items-center justify-between gap-4 p-4`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon
                      size={18}
                      className={`${tone} shrink-0`}
                    />

                    <span className="text-sm text-[#CBD5E1] truncate sm:whitespace-normal">
                      {message}
                    </span>
                  </div>

                  <span className="text-xs text-[#94A3B8] shrink-0">
                    {time}
                  </span>
                </div>
              )
            )}
          </div>

          {/* Status */}
          <div
            className={`${TILE} mt-6 flex items-center justify-between p-4`}
          >
            <div className="flex items-center gap-2">
              <Activity
                size={18}
                className="text-green-500 shrink-0"
              />

              <span className="text-sm sm:text-base text-white">
                System Status
              </span>
            </div>

            <span
              className={`text-sm sm:text-base font-semibold ${
                sensorData.connected
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {sensorData.connected
                ? "Operational"
                : "Waiting"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;