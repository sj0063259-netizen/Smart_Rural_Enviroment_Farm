export default function TechnologyHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-md">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Technology
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
        Powered by Modern
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-emerald-300 bg-clip-text text-transparent">
          IoT & Web Technologies
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
        FarmSafe combines reliable hardware, real-time communication,
        cloud-enabled processing, and an intuitive web dashboard to
        deliver continuous environmental monitoring and instant alerts
        for smarter farming.
      </p>

      {/* Highlights */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
        <div>
          <h3 className="text-3xl font-black text-cyan-400">ESP32</h3>
          <p className="mt-2 text-sm text-slate-400">
            Smart IoT Hardware
          </p>
        </div>

        <div className="hidden h-10 w-px bg-slate-700 md:block"></div>

        <div>
          <h3 className="text-3xl font-black text-cyan-400">WebSocket</h3>
          <p className="mt-2 text-sm text-slate-400">
            Live Data Stream
          </p>
        </div>

        <div className="hidden h-10 w-px bg-slate-700 md:block"></div>

        <div>
          <h3 className="text-3xl font-black text-cyan-400">React</h3>
          <p className="mt-2 text-sm text-slate-400">
            Interactive Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}