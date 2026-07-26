import Navbar from "./components/common/Navbar";
import Hero from "./components/landing/Hero";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white antialiased">
      <Navbar />

      <main className="pt-20">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default App;