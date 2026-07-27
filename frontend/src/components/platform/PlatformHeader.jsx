export default function PlatformHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Section Badge */}
      <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 backdrop-blur-md">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
          Platform
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
        One Intelligent Platform
        <br />
        <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
          For Smarter & Safer Farming
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
        FarmSafe integrates affordable{" "}
        <span className="font-semibold text-green-400">ESP32-powered IoT sensors</span>,
        real-time environmental monitoring, fire detection, and intelligent
        analytics into a single platform—helping farmers protect crops, livestock,
        and rural communities with instant insights and alerts.
      </p>

      {/* Stats */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
        <div>
          <h3 className="text-3xl font-black text-green-400">24/7</h3>
          <p className="mt-2 text-sm text-slate-400">
            Continuous Monitoring
          </p>
        </div>

        <div className="hidden h-10 w-px bg-slate-700 md:block"></div>

        <div>
          <h3 className="text-3xl font-black text-green-400">Real-Time</h3>
          <p className="mt-2 text-sm text-slate-400">
            Instant Alerts
          </p>
        </div>

        <div className="hidden h-10 w-px bg-slate-700 md:block"></div>

        <div>
          <h3 className="text-3xl font-black text-green-400">ESP32</h3>
          <p className="mt-2 text-sm text-slate-400">
            IoT Powered
          </p>
        </div>
      </div>
    </div>
  );
}