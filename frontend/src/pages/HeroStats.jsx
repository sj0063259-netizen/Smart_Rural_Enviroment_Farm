import {
  Activity,
  ShieldCheck,
  Cpu,
  Sprout,
} from "lucide-react";

const stats = [
  {
    icon: Activity,
    value: "24/7",
    title: "Live Monitoring",
    color: "text-green-400",
  },
  {
    icon: Sprout,
    value: "4+",
    title: "Smart Sensors",
    color: "text-emerald-400",
  },
  {
    icon: Cpu,
    value: "ESP32",
    title: "Powered",
    color: "text-cyan-400",
  },
  {
    icon: ShieldCheck,
    value: "Instant",
    title: "Safety Alerts",
    color: "text-orange-400",
  },
];

export default function HeroStats() {
  return (
    <section className="pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-slate-900/70"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 ${item.color}`}
              >
                <Icon size={30} />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-sm tracking-wide text-slate-400">
                {item.title}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}