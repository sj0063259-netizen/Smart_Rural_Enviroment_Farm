import { ArrowUpRight } from "lucide-react";

export default function PlatformCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_0_35px_rgba(34,197,94,0.15)]">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-500/10 blur-3xl"></div>
      </div>

      {/* Icon */}
      <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 text-green-400 transition-colors duration-300 group-hover:bg-green-500 group-hover:text-white">
        <Icon size={30} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="relative text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative mt-4 leading-7 text-slate-400">
        {description}
      </p>

      {/* Learn More */}
      <div className="relative mt-8 flex items-center text-sm font-semibold text-green-400 transition-transform duration-300 group-hover:translate-x-1">
        Learn More
        <ArrowUpRight className="ml-2 h-4 w-4" />
      </div>
    </div>
  );
}