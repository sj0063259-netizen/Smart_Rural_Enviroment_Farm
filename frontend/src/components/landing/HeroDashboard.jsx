import DashboardHeader from "./DashboardHeader";
import DashboardChart from "./DashboardChart";
import SensorCards from "./SensorCards";

export default function HeroDashboard() {
  return (
    <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[32px] border border-slate-700/80 bg-[#111827]/90 backdrop-blur-2xl shadow-[0_25px_80px_rgba(34,197,94,0.12)]">

      <div className="p-6 lg:p-8">

        <DashboardHeader />

        <div className="mt-6">
          <SensorCards />
        </div>

        <div className="mt-8">
          <DashboardChart />
        </div>

      </div>

    </div>
  );
}