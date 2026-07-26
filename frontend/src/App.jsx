import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Temporary content so you can see the navbar */}
      <main className="pt-20 flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white">
          Smart Rural Environment & Farm Safety Platform
        </h1>
      </main>
    </div>
  );
}

export default App;