/**
 * Features.jsx
 */

import {
  Thermometer,
  Droplets,
  Sprout,
  Flame,
  Cpu,
  BrainCircuit,
} from "lucide-react";

import {
  CONTAINER,
  SECTION_Y,
  CARD,
  BG_PRIMARY,
} from "../../layouts/layout";

import SectionHeader from "../common/SectionHeader";

const FEATURES = [
  {
    icon: Thermometer,
    title: "Temperature Monitoring",
    description:
      "Continuous field temperature readings with configurable high-heat thresholds.",
  },
  {
    icon: Droplets,
    title: "Humidity Tracking",
    description:
      "Real-time humidity data to help anticipate crop stress and disease risk.",
  },
  {
    icon: Sprout,
    title: "Soil Moisture",
    description:
      "Ground moisture levels to guide irrigation decisions and prevent water waste.",
  },
  {
    icon: Flame,
    title: "Fire Detection",
    description:
      "Smoke sensors trigger instant alerts the moment a hazard is detected.",
  },
  {
    icon: Cpu,
    title: "ESP32 Connectivity",
    description:
      "Lightweight sensor nodes report over HTTP today, with MQTT support planned.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analytics",
    description:
      "Predictive insights from historical sensor data.",
    future: true,
  },
];

function Features() {
  return (
    <section
      id="features"
      className={`${BG_PRIMARY} ${SECTION_Y}`}
    >
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Features"
          headingId="features-heading"
          title="Everything your farm needs to stay safe"
          subtitle="One platform covering every environmental signal that matters for rural safety, from live readings to hazard alerts."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(
            ({
              icon: Icon,
              title,
              description,
              future,
            }) => (
              <div
                key={title}
                className={`${CARD} flex flex-col justify-between p-6 transition-transform hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between min-h-[44px]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600/10 shrink-0">
                      <Icon
                        size={22}
                        className="text-green-500"
                      />
                    </span>

                    {future && (
                      <span className="rounded-full border border-[#334155] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[#94A3B8]">
                        Future
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Features;