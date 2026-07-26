import { Wifi, Clock3, Activity } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col gap-5 border-b border-slate-700/60 pb-6 lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}
      <div>
        <div className="flex items-center gap-2 text-green-400">
          <Activity size={18} />
          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
            Live Dashboard
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-bold text-white">
          Farm Environment Monitoring
        </h3>

        <p className="mt-2 text-slate-400">
          Real-time monitoring of environmental conditions, safety alerts,
          and sensor health.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-3">

        <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
          <Wifi size={16} className="text-green-400" />
          <span className="text-sm font-medium text-green-400">
            System Online
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
          <Activity size={16} className="text-cyan-400" />
          <span className="text-sm font-medium text-cyan-400">
            ESP32 Connected
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Clock3 size={15} />
          Updated 2 sec ago
        </div>

      </div>
    </div>
  );
}