import {
  Sprout,
  Thermometer,
  Droplets,
  Wind,
} from "lucide-react";

function CropOverview({ crop, sensor }) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">

      {/* Crop Card */}
      <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6">

        <h3 className="text-xl font-semibold text-white">
          🌾 Selected Crop
        </h3>

        <h2 className="mt-6 text-3xl font-bold text-green-400">
          {crop.name}
        </h2>

        <div className="mt-6 space-y-4">

          <div className="flex justify-between">
            <span className="text-slate-400">Season</span>
            <span className="text-white">{crop.season}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Duration</span>
            <span className="text-white">{crop.duration}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Soil</span>
            <span className="text-white">{crop.soilType}</span>
          </div>

        </div>

      </div>

      {/* Sensor Card */}
      <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6">

        <h3 className="text-xl font-semibold text-white">
          📡 Live Farm Sensors
        </h3>

        <div className="mt-6 space-y-5">

          <div className="flex justify-between">
            <span className="flex items-center gap-2 text-slate-300">
              <Thermometer size={18} />
              Temperature
            </span>

            <span className="text-green-400">
              {sensor.connected ? `${sensor.temperature} °C` : "--"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="flex items-center gap-2 text-slate-300">
              <Droplets size={18} />
              Humidity
            </span>

            <span className="text-green-400">
              {sensor.connected ? `${sensor.humidity}%` : "--"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="flex items-center gap-2 text-slate-300">
              <Sprout size={18} />
              Soil Moisture
            </span>

            <span className="text-green-400">
              {sensor.connected ? `${sensor.soil}%` : "--"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="flex items-center gap-2 text-slate-300">
              <Wind size={18} />
              Air Quality
            </span>

            <span className="text-green-400">
              {sensor.connected ? sensor.airQuality : "--"}
            </span>
          </div>

        </div>

      </div>

      {/* Health Card */}
      <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6 text-center">

        <h3 className="text-xl font-semibold text-white">
          📈 Crop Suitability
        </h3>

        {!sensor.connected ? (
          <>
            <div className="mt-10 text-6xl">📡</div>

            <h2 className="mt-6 text-2xl font-bold text-yellow-400">
              Waiting...
            </h2>

            <p className="mt-3 text-slate-400">
              Waiting for live sensor data
            </p>
          </>
        ) : (
          <>
            <div className="mt-10 text-6xl">🌱</div>

            <h2 className="mt-6 text-5xl font-bold text-green-400">
              91%
            </h2>

            <p className="mt-3 text-green-400">
              Excellent Conditions
            </p>
          </>
        )}

      </div>

    </div>
  );
}

export default CropOverview;