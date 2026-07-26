import { ShieldCheck } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="flex justify-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-400 backdrop-blur-md">
        <ShieldCheck size={16} />
        Affordable ESP32 Powered IoT Platform
      </span>
    </div>
  );
}