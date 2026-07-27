import { CONTAINER } from "../../layouts/layout";

import TechnologyHeader from "./TechnologyHeader";
import TechnologyArchitecture from "./TechnologyArchitecture";
import TechnologyGrid from "./TechnologyGrid";

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#0F172A] py-28"
    >
      <div className={CONTAINER}>
        <TechnologyHeader />

        <TechnologyArchitecture />

        <TechnologyGrid />
      </div>
    </section>
  );
}