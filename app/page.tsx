import Image from "next/image";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowWeWork from "./components/HowWeWork";
import Items from "./components/Items";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <HowWeWork />
      <Items />
      <Services />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
