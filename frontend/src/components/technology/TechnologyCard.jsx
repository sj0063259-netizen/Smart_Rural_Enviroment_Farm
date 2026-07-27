export default function TechnologyCard({
  icon: Icon,
  name,
  category,
  description,
  color,
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl ${color}`}
        />
      </div>

      {/* Category */}
      <span className="relative inline-flex rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
        {category}
      </span>

      {/* Icon */}
      <div className="relative mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
        <Icon size={30} />
      </div>

      {/* Name */}
      <h3 className="relative mt-6 text-2xl font-bold text-white">
        {name}
      </h3>

      {/* Description */}
      <p className="relative mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
}