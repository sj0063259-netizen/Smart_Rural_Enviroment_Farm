import {
  Thermometer,
  Droplets,
  Flame,
  Wifi,
  Cpu,
  LayoutDashboard,
} from "lucide-react";

import PlatformCard from "./PlatformCard";

const platformFeatures = [
  {
    icon: Thermometer,
    title: "Environment Monitoring",
    description:
      "Track real-time temperature, humidity, and climate conditions to ensure a safe and healthy farming environment.",
  },
  {
    icon: Droplets,
    title: "Soil Moisture Analysis",
    description:
      "Monitor soil moisture levels continuously to optimize irrigation and improve crop productivity.",
  },
  {
    icon: Flame,
    title: "Fire Hazard Detection",
    description:
      "Receive instant alerts when abnormal heat or fire risks are detected, helping prevent major losses.",
  },
  {
    icon: Wifi,
    title: "IoT Connectivity",
    description:
      "ESP32-powered wireless communication enables seamless sensor integration and reliable real-time monitoring.",
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description:
      "Automate monitoring processes and enable future AI-powered decision support for precision farming.",
  },
  {
    icon: LayoutDashboard,
    title: "Live Dashboard",
    description:
      "Visualize sensor data, system health, and alerts through an intuitive dashboard built for real-time insights.",
  },
];

export default function PlatformGrid() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {platformFeatures.map((feature, index) => (
        <PlatformCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}