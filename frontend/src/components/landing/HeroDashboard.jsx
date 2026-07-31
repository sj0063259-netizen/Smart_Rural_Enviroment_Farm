import DashboardHeader from "./DashboardHeader";
import DashboardChart from "./DashboardChart";
import SensorCards from "./SensorCards";

import {
  Bot,
  Power,
  Clock,
  BatteryCharging,
  Sprout,
} from "lucide-react";

import { useSensor } from "../../context/SensorContext";

export default function HeroDashboard() {
  const sensorData = useSensor();

  const pumpStatus = sensorData.pumpStatus;
  const automationMode = sensorData.mode;
  const battery = sensorData.battery;

  const soilCondition =
    sensorData.soil == null
      ? "Waiting..."
      : sensorData.soil < 35
      ? "Dry"
      : sensorData.soil <= 70
      ? "Optimal"
      : "Wet";

  const irrigationAction =
    !sensorData.connected
      ? "Waiting for Sensor Data"
      : pumpStatus
      ? "Irrigation Running"
      : "Monitoring Soil";

  const lastUpdated =
    sensorData.lastUpdated ?? "--:--:--";

  return (
    <section
      id="dashboard"
      className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-[32px] border border-slate-700/80 bg-[#111827]/90 backdrop-blur-2xl shadow-[0_25px_80px_rgba(34,197,94,0.12)]"
    >
      <div className="p-6 lg:p-8">
        <DashboardHeader />

        <div className="mt-6">
          <SensorCards />
        </div>

        {/* Smart Irrigation Controller */}

        <div className="mt-8 rounded-3xl border border-slate-700 bg-[#0F172A] p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="text-green-400" size={22} />

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Smart Irrigation Controller
                </h3>

                <p className="text-sm text-slate-400">
                  Automated irrigation monitoring
                </p>
              </div>
            </div>

            <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm font-semibold text-violet-400">
              {automationMode}
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Pump */}

            <div className="rounded-2xl bg-slate-800/40 p-4">
              <div className="flex items-center gap-2">
                <Power
                  className={
                    pumpStatus
                      ? "text-green-400"
                      : "text-slate-500"
                  }
                  size={20}
                />

                <span className="text-slate-300">
                  Pump Status
                </span>
              </div>

              <p
                className={`mt-3 text-xl font-bold ${
                  pumpStatus
                    ? "text-green-400"
                    : "text-slate-400"
                }`}
              >
                {pumpStatus ? "Running" : "Standby"}
              </p>
            </div>

            {/* Soil */}

            <div className="rounded-2xl bg-slate-800/40 p-4">
              <div className="flex items-center gap-2">
                <Sprout
                  className="text-green-400"
                  size={20}
                />

                <span className="text-slate-300">
                  Soil Condition
                </span>
              </div>

              <p className="mt-3 text-xl font-bold text-white">
                {soilCondition}
              </p>
            </div>

            {/* Action */}

            <div className="rounded-2xl bg-slate-800/40 p-4">
              <div className="flex items-center gap-2">
                <Bot
                  className="text-cyan-400"
                  size={20}
                />

                <span className="text-slate-300">
                  Current Action
                </span>
              </div>

              <p className="mt-3 text-lg font-semibold text-cyan-400">
                {irrigationAction}
              </p>
            </div>

            {/* Battery */}

            <div className="rounded-2xl bg-slate-800/40 p-4">
              <div className="flex items-center gap-2">
                <BatteryCharging
                  className="text-yellow-400"
                  size={20}
                />

                <span className="text-slate-300">
                  Battery
                </span>
              </div>

              <p className="mt-3 text-xl font-bold text-white">
                {battery ?? 91}%
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <Clock size={16} />
            Last Updated : {lastUpdated}
          </div>
        </div>

        <div className="mt-8">
          <DashboardChart />
        </div>
      </div>
    </section>
  );
}