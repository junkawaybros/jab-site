import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Items from "./components/Items";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";

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
    </main>
  );
}
