import {
  Cpu,
  Wifi,
  Server,
  Database,
  MonitorSmartphone,
  BellRing,
  ArrowRight,
} from "lucide-react";

const architecture = [
  {
    icon: Cpu,
    title: "ESP32",
    subtitle: "IoT Sensors",
  },
  {
    icon: Wifi,
    title: "Wi-Fi",
    subtitle: "Wireless Network",
  },
  {
    icon: Server,
    title: "Backend",
    subtitle: "API Processing",
  },
  {
    icon: Database,
    title: "Database",
    subtitle: "Store Sensor Data",
  },
  {
    icon: MonitorSmartphone,
    title: "Dashboard",
    subtitle: "Real-Time Monitoring",
  },
  {
    icon: BellRing,
    title: "Alerts",
    subtitle: "Instant Notification",
  },
];

export default function TechnologyArchitecture() {
  return (
    <div className="mt-24">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-10 backdrop-blur-xl">

        <div className="mb-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            FarmSafe System Architecture
          </h3>

          <p className="mt-3 text-slate-400">
            From sensor data collection to intelligent monitoring and
            instant farmer notifications.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {architecture.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center"
              >
                <div className="group w-44 rounded-2xl border border-slate-800 bg-[#111827]/70 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.subtitle}
                  </p>
                </div>

                {index !== architecture.length - 1 && (
                  <ArrowRight
                    size={26}
                    className="mx-4 hidden text-cyan-400 xl:block"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}