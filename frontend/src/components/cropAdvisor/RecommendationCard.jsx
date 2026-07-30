function RecommendationCard({
  title,
  icon,
  color,
  recommendation,
  value,
  footer
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6">

      <div className="flex items-center gap-3 mb-5">

        <div
          className="h-12 w-12 rounded-xl flex items-center justify-center text-xl"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

      </div>

      <p className="text-slate-300 leading-relaxed">
        {recommendation}
      </p>

      <div className="mt-6 rounded-xl bg-[#0F172A] p-4">

        <p className="text-sm text-slate-400">
          Recommendation
        </p>

        <h4 className="mt-1 text-xl font-bold text-green-400">
          {value}
        </h4>

      </div>

      <p className="mt-4 text-sm text-slate-500">
        {footer}
      </p>

    </div>
  );
}

export default RecommendationCard;