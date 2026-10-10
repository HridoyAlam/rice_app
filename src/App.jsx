import Footer from "./components/Footer";
import Home from "./pages/Home";
import Variety from "./pages/Variety";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full flex-1 max-w-5xl px-4 py-10">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/dhan/:id" element={<Variety />} />
            <Route path="*" element={<p>পাতাটি পাওয়া যায়নি।</p>} />
          </Routes>
        </main>
        <Footer
          source="বাংলাদেশ ধান গবেষণা ইনস্টিটিউট (ব্রি)"
          author="Hridoy Alam"
          github="HridoyAlam"
        />
      </div>
    </>
  );
}

export default App;
