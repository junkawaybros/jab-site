import Image from "next/image";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowWeWork from "./components/HowWeWork";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Benefits />
      <HowWeWork />
    </main>
  );
}
