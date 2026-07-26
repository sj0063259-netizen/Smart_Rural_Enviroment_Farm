import { CONTAINER } from "../../layouts/layout";

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#0F172A] pt-32 pb-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[180px]" />
        <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-emerald-500/5 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[180px]" />
      </div>

      <div className={CONTAINER}>
        <HeroBadge />
        <HeroHeading />
        <HeroButtons />
        <HeroDashboard />
      </div>
    </section>
  );
}