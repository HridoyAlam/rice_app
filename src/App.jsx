import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-10">
          <Hero />
        </main>
        <Footer
          source={"বাংলাদেশ ধান গবেষণা ইনস্টিটিউট (ব্রি)"}
          author={"Hridoy Alam"}
          github={"HridoyAlam"}
        />
      </div>
    </>
  );
}

export default App;
