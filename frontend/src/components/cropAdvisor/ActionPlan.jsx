import { CheckCircle2 } from "lucide-react";

const tasks = [
  "Inspect crop condition",
  "Monitor soil moisture",
  "Irrigate if required",
  "Review sensor readings"
];

function ActionPlan() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6">

      <h3 className="text-xl font-semibold text-white mb-6">
        📋 Today's Action Plan
      </h3>

      <div className="space-y-5">

        {tasks.map((task) => (
          <div
            key={task}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={20}
              className="text-green-500"
            />

            <span className="text-slate-300">
              {task}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ActionPlan;