import { useState } from "react";

import cropsData from "../../data/crops.json";
import { useSensor } from "../../context/SensorContext";

import CropSelector from "./CropSelector";
import CropOverview from "./CropOverview";
import RecommendationCard from "./RecommendationCard";
import ActionPlan from "./ActionPlan";

import { analyzeCrop } from "../../utils/cropAnalysis";

function CropAdvisor() {
  const sensor = useSensor();

  const [selectedCrop, setSelectedCrop] = useState(
    cropsData.crops[0]
  );

  const handleCropChange = (cropName) => {
    const crop = cropsData.crops.find(
      (c) => c.name === cropName
    );

    if (crop) {
      setSelectedCrop(crop);
    }
  };

  // ==========================
  // Smart Crop Analysis
  // ==========================

  const analysis = analyzeCrop(sensor, selectedCrop);

  return (
    <section className="bg-[#0F172A] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
            🌱 Smart Farming
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-white leading-tight">
            Crop Advisory &
            <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Irrigation Recommendation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400 leading-8">
            Monitor live environmental conditions, compare them with ideal crop
            requirements and receive intelligent irrigation, fertilizer and crop
            health recommendations powered by FarmSafe.
          </p>

        </div>

        {/* ================= FEATURE CARDS ================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-700 bg-[#111827] p-6 text-center">

            <div className="text-5xl">🌾</div>

            <h3 className="mt-5 text-xl font-bold text-white">
              {cropsData.crops.length} Supported Crops
            </h3>

            <p className="mt-3 text-slate-400">
              Rice, Wheat, Maize, Potato and Tomato
            </p>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-[#111827] p-6 text-center">

            <div className="text-5xl">📡</div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Live Sensor Monitoring
            </h3>

            <p className="mt-3 text-slate-400">
              Temperature, Humidity, Soil Moisture and Air Quality
            </p>

          </div>

          <div className="rounded-2xl border border-slate-700 bg-[#111827] p-6 text-center">

            <div className="text-5xl">💧</div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Smart Recommendations
            </h3>

            <p className="mt-3 text-slate-400">
              AI-powered irrigation and crop management guidance.
            </p>

          </div>

        </div>

        {/* ================= CROP SELECTOR ================= */}

        <CropSelector
          crops={cropsData.crops}
          selectedCrop={selectedCrop}
          connected={sensor.connected}
          onChange={handleCropChange}
        />

        {/* ================= OVERVIEW ================= */}

        <CropOverview
          crop={selectedCrop}
          sensor={sensor}
          analysis={analysis}
        />

        {/* ================= AI SUMMARY ================= */}

        <div className="mt-10 rounded-3xl border border-green-500/20 bg-[#111827] p-8">

          <h3 className="text-2xl font-bold text-white">
            🤖 FarmSafe AI Analysis
          </h3>

          <p className="mt-4 text-slate-300 leading-8">
            {analysis.summary}
          </p>

        </div>

        {/* ================= RECOMMENDATIONS ================= */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          <RecommendationCard
            title="💧 Irrigation Recommendation"
            icon="💧"
            color="#2563eb33"
            recommendation={analysis.irrigation.message}
            value={analysis.irrigation.value}
            footer={`Best irrigation time: ${selectedCrop.water.bestTime}`}
          />

          <RecommendationCard
            title="🌱 Fertilizer Recommendation"
            icon="🌱"
            color="#22c55e33"
            recommendation={analysis.fertilizer.message}
            value={selectedCrop.fertilizer.nitrogen}
            footer="Apply fertilizer only when soil moisture is sufficient."
          />

        </div>

        {/* ================= ACTION PLAN ================= */}

        <div className="mt-10">

          <ActionPlan actions={analysis.actions} />

        </div>

        {/* ================= IDEAL CONDITIONS ================= */}

        <div className="mt-10 rounded-3xl border border-slate-700 bg-[#111827] p-8">

          <h3 className="mb-8 text-2xl font-bold text-white">
            🌡 Ideal Growing Conditions
          </h3>

          <div className="grid gap-6 md:grid-cols-4">

            {/* Temperature */}

            <div className="rounded-2xl bg-[#1E293B] p-6 text-center">

              <h4 className="text-slate-400">
                Temperature
              </h4>

              <p className="mt-3 text-3xl font-bold text-green-400">
                {selectedCrop.idealConditions.temperature.min}°C -
                {selectedCrop.idealConditions.temperature.max}°C
              </p>

            </div>

            {/* Humidity */}

            <div className="rounded-2xl bg-[#1E293B] p-6 text-center">

              <h4 className="text-slate-400">
                Humidity
              </h4>

              <p className="mt-3 text-3xl font-bold text-cyan-400">
                {selectedCrop.idealConditions.humidity.min}% -
                {selectedCrop.idealConditions.humidity.max}%
              </p>

            </div>

            {/* Soil */}

            <div className="rounded-2xl bg-[#1E293B] p-6 text-center">

              <h4 className="text-slate-400">
                Soil Moisture
              </h4>

              <p className="mt-3 text-3xl font-bold text-yellow-400">
                {selectedCrop.idealConditions.soilMoisture.min}% -
                {selectedCrop.idealConditions.soilMoisture.max}%
              </p>

            </div>

            {/* Air */}

            <div className="rounded-2xl bg-[#1E293B] p-6 text-center">

              <h4 className="text-slate-400">
                Air Quality
              </h4>

              <p className="mt-3 text-3xl font-bold text-green-400">
                AQI &lt; {selectedCrop.idealConditions.airQuality.max}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CropAdvisor;