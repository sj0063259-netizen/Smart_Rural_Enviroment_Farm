import { Activity } from "lucide-react";

export default function DashboardChart() {
  const values = [32, 48, 40, 60, 52, 68, 58];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="mt-8 border-t border-slate-700/60 pt-8">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <div>
          <div className="flex items-center gap-2 text-green-400">
            <Activity size={18} />
            <span className="text-sm font-semibold uppercase tracking-[0.18em]">
              Sensor Analytics
            </span>
          </div>

          <h4 className="mt-3 text-2xl font-bold text-white">
            Live Sensor Trends
          </h4>

          <p className="mt-2 text-slate-400">
            Environmental monitoring over the last 7 days.
          </p>
        </div>

        <div className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
          LIVE
        </div>

      </div>

      {/* Chart */}
      <div className="flex h-64 items-end justify-between gap-5 rounded-3xl bg-[#0F172A] p-6">

        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col items-center justify-end"
          >

            <span className="mb-3 text-xs text-slate-500">
              {value}%
            </span>

            <div
              className="w-full rounded-t-2xl bg-gradient-to-t from-green-700 via-green-500 to-green-300 transition-all duration-300 hover:scale-y-105"
              style={{
                height: `${value}%`,
              }}
            />

            <span className="mt-4 text-xs text-slate-500">
              {labels[index]}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}