import {
  Wifi,
  Clock3,
  Activity,
  Bot,
  CheckCircle2,
} from "lucide-react";

import { useSensor } from "../../context/SensorContext";

export default function DashboardHeader() {
  const sensorData = useSensor();

  const lastUpdated = sensorData.lastUpdated ?? "Waiting...";
  const connected = sensorData.connected;

  return (
    <div className="flex flex-col gap-6 border-b border-slate-700/60 pb-6 lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}
      <div>
        <div className="flex items-center gap-2 text-green-400">
          <Activity size={18} />
          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
            Live Dashboard
          </span>
        </div>

        <h3 className="mt-3 text-3xl font-bold text-white">
          Farm Environment Monitoring
        </h3>

        <p className="mt-2 max-w-xl text-slate-400">
          Real-time monitoring of environmental conditions,
          smart irrigation, and IoT device health.
        </p>
      </div>

      {/* Right */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

        {/* System Status */}
        <div
          className={`flex items-center gap-2 rounded-xl border px-4 py-3 ${
            connected
              ? "border-green-500/20 bg-green-500/10"
              : "border-red-500/20 bg-red-500/10"
          }`}
        >
          <Wifi
            size={18}
            className={
              connected ? "text-green-400" : "text-red-400"
            }
          />

          <div>
            <p className="text-xs text-slate-400">
              System
            </p>

            <p
              className={`font-semibold ${
                connected
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {connected ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* ESP32 */}
        <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">

          <Activity
            size={18}
            className="text-cyan-400"
          />

          <div>
            <p className="text-xs text-slate-400">
              Controller
            </p>

            <p className="font-semibold text-cyan-400">
              {connected
                ? "ESP32 Connected"
                : "Waiting..."}
            </p>
          </div>
        </div>

        {/* Automation */}
        <div className="flex items-center gap-2 rounded-xl border border-violet-500/20 bg-violet-500/10 px-4 py-3">

          <Bot
            size={18}
            className="text-violet-400"
          />

          <div>
            <p className="text-xs text-slate-400">
              Automation
            </p>

            <p className="font-semibold text-violet-400">
              AUTO MODE
            </p>
          </div>
        </div>

        {/* Last Update */}
        <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3">

          <Clock3
            size={18}
            className="text-yellow-400"
          />

          <div>
            <p className="text-xs text-slate-400">
              Last Update
            </p>

            <p className="font-semibold text-white">
              {lastUpdated}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}