import { Activity, ArrowRight, GitBranch } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-5">
      <a
        href="#dashboard"
        className="group inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-xl hover:shadow-green-500/30"
      >
        <Activity size={18} />

        Launch Dashboard

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      <a
        href="https://github.com/sj0063259-netizen/Smart_Rural_Enviroment_Farm"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-green-500 hover:bg-slate-800"
      >
        <GitBranch size={18} />

        GitHub Repository
      </a>
    </div>
  );
}