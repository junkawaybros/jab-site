import Image from "next/image";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowWeWork from "./components/HowWeWork";
import Items from "./components/Items";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Benefits />
      <HowWeWork />
      <Items />
      <Services />
    </main>
  );
}
