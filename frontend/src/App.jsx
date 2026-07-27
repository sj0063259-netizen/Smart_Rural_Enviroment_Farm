import Navbar from "./components/common/Navbar";
import Hero from "./components/landing/Hero";
import Platform from "./components/platform/Platform";
import Technology from "./components/technology/Technology";
import Team from "./components/team/Team";
import Footer from "./components/common/Footer";

import { SensorProvider } from "./context/SensorContext";

function App() {
  return (
    <SensorProvider>
      <div className="min-h-screen bg-[#0F172A] text-white antialiased">
        <Navbar />

        <main>
          <Hero />
          <Platform />
          <Technology />
          <Team />
        </main>

        <Footer />
      </div>
    </SensorProvider>
  );
}

export default App;