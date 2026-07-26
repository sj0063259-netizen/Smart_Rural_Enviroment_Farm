export default function HeroHeading() {
  return (
    <div className="mx-auto mt-12 max-w-5xl text-center">
      <h1 className="text-5xl md:text-6xl xl:text-7xl leading-none pb-3 font-black text-white">
        Farm<span className="text-green-400">Safe</span>
      </h1>

      <h2 className="mt-6 text-2xl font-semibold text-slate-200 md:text-3xl">
        Real-Time Rural Environment Monitoring Platform
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
        Protect farms and rural communities using affordable ESP32-powered IoT
        monitoring.
      </p>

      <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-500">
        Detect fire hazards • Monitor soil moisture • Track climate conditions •
        Receive instant alerts
      </p>
    </div>
  );
}