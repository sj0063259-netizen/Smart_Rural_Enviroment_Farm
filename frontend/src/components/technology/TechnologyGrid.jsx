import {
  Atom,
  Cpu,
  Wifi,
  Server,
  Database,
  Palette,
} from "lucide-react";

import TechnologyCard from "./TechnologyCard";

const technologies = [
  {
    icon: Atom,
    name: "React",
    category: "Frontend",
    color: "bg-cyan-500/10",
    description:
      "Builds a fast, modern, and responsive user interface for monitoring sensors and managing the FarmSafe dashboard.",
  },
  {
    icon: Cpu,
    name: "ESP32",
    category: "IoT",
    color: "bg-green-500/10",
    description:
      "Collects environmental data from sensors and transmits it wirelessly for real-time monitoring.",
  },
  {
    icon: Wifi,
    name: "WebSocket",
    category: "Communication",
    color: "bg-sky-500/10",
    description:
      "Streams live sensor values instantly between the backend and dashboard without refreshing the page.",
  },
  {
    icon: Server,
    name: "Backend API",
    category: "Server",
    color: "bg-violet-500/10",
    description:
      "Processes sensor readings, manages system logic, and delivers secure APIs to the frontend.",
  },
  {
    icon: Database,
    name: "Database",
    category: "Storage",
    color: "bg-emerald-500/10",
    description:
      "Stores historical environmental data, enabling trend analysis and long-term monitoring.",
  },
 {
  icon: Palette,
  name: "Tailwind CSS",
  category: "UI Framework",
  color: "bg-cyan-500/10",
  description:
    "Creates a responsive, modern, and accessible user interface with utility-first styling and rapid development.",
},
];

export default function TechnologyGrid() {
  return (
    <div className="mt-20">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.name}
            icon={tech.icon}
            name={tech.name}
            category={tech.category}
            description={tech.description}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  );
}