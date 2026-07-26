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
} from "lucide-react";

import {
  CONTAINER,
  SECTION_Y,
  CARD,
  BG_PRIMARY,
  TILE,
} from "../../layouts/layout";

import SectionHeader from "../common/SectionHeader";

const SENSOR_CARDS = [
  { icon: Thermometer, label: "Temperature", value: "24.6°C" },
  { icon: Droplets, label: "Humidity", value: "62%" },
  { icon: Sprout, label: "Soil Moisture", value: "48%" },
  { icon: Flame, label: "Fire", value: "Clear" },
  { icon: BatteryFull, label: "Battery", value: "92%" },
];

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
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-white font-medium text-sm sm:text-base">
                3 Nodes Online
              </span>
            </div>

            <span className="text-xs sm:text-sm text-[#94A3B8]">
              Last Sync: Just Now
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

            <span className="text-sm sm:text-base font-semibold text-green-500">
              Operational
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;