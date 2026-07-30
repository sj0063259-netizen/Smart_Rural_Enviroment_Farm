import { ChevronDown } from "lucide-react";

function CropSelector({
  crops,
  selectedCrop,
  onChange,
  connected,
}) {
  return (
    <div className="mt-14 rounded-3xl border border-slate-700 bg-[#111827] p-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm uppercase tracking-widest text-green-400">
            Crop Selection
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            Start Crop Analysis
          </h3>

          <p className="mt-2 text-slate-400">
            Select a crop to compare live environmental
            conditions with ideal growing requirements.
          </p>

        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

          <div
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              connected
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {connected
              ? "🟢 Sensor Connected"
              : "🔴 Sensor Offline"}
          </div>

          <div className="relative">

            <select
              value={selectedCrop.name}
              onChange={(e) => onChange(e.target.value)}
              className="appearance-none rounded-xl border border-slate-600 bg-[#0F172A] px-6 py-4 pr-12 text-white outline-none transition focus:border-green-500"
            >
              {crops.map((crop) => (
                <option key={crop.name} value={crop.name}>
                  {crop.name}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default CropSelector;