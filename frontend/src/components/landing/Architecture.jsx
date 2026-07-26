/**
 * Architecture.jsx
 */

import {
  Gauge,
  Cpu,
  Share2,
  Server,
  Database,
  LayoutDashboard,
  BellRing,
  ArrowRight,
} from "lucide-react";

import {
  CONTAINER,
  SECTION_Y,
  CARD,
  BG_PRIMARY,
  TILE,
} from "../../layouts/layout";

import SectionHeader from "../common/SectionHeader";

const FLOW_NODES = [
  {
    icon: Gauge,
    label: "Sensors",
  },
  {
    icon: Cpu,
    label: "ESP32",
  },
  {
    icon: Share2,
    label: "MQTT",
  },
  {
    icon: Server,
    label: "Backend",
  },
  {
    icon: Database,
    label: "Database",
  },
  {
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    icon: BellRing,
    label: "Alerts",
  },
];

function Architecture() {
  return (
    <section
      id="architecture"
      className={`${BG_PRIMARY} ${SECTION_Y}`}
    >
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Architecture"
          headingId="architecture-heading"
          title="How Data Moves Through the Platform"
          subtitle="A straightforward, modular pipeline from field sensor to farmer alert."
        />

        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${CARD} p-6 sm:p-8`}
        >
          {FLOW_NODES.map(({ icon: Icon, label }, index) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
            >
              <div
                className={`${TILE} flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-4 shrink-0`}
              >
                <Icon
                  size={18}
                  className="text-green-500 shrink-0"
                />

                <span className="text-sm font-medium text-white whitespace-nowrap">
                  {label}
                </span>
              </div>

              {index < FLOW_NODES.length - 1 && (
                <ArrowRight
                  size={18}
                  className="rotate-90 text-[#475569] sm:rotate-0 shrink-0 my-1 sm:my-0"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Architecture;