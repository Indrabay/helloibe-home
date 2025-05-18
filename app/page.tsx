import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="px-10 lg:px-24 sm:px-5 md:px-10 w-full justify-center items-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
    >
      <Navbar/>
      <Hero/>
      <div className="mt-20 space-y-32">
        <About />
        <Portfolio />
      </div>
      <Footer/>
    </div>
  );
}
