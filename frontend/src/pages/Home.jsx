import Navbar from "../components/common/Navbar";
import Hero from "../components/landing/Hero";
import HeroStats from "../components/landing/HeroStats";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">

      <Navbar />

      <main className="pt-20">

        <Hero />

        <HeroStats />

      </main>

      <Footer />

    </div>
  );
}