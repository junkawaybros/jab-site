import Image from "next/image";
import HeroJunk from "../../public/hero-junk.jpg";
import Benefits from "./Benefits";
import LearnMoreLink from "./LearnMoreLink";

const data = {
  title: "Quick and easy full-service junk removal with same-day service.",
  description: `We handle all the heavy lifting and responsibly dispose of items, so you don't have to.`,
  cta: "Get a free estimate",
};

export default function Hero() {
  return (
    <>
      <div id="hero"></div>
      <section className="bg-white">
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl pt-10 md:pt-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20 lg:pb-0">
            <div className="px-6 lg:px-0 lg:pt-4">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:mt-10 sm:text-3xl">
                    {data.title}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-900">
                    {data.description}
                  </p>

                  <div className="items-left mt-10 flex flex-row items-baseline gap-x-6 gap-y-6 sm:flex-row">
                    <a
                      href="tel:3038565791"
                      className="sm:text-md rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold uppercase text-white shadow-sm transition duration-300 ease-in-out hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 lg:text-lg"
                    >
                      {data.cta}
                    </a>
                    <div className="hidden lg:block">
                      <LearnMoreLink to={"how-we-work"} />
                    </div>

                    <div className="block lg:hidden">
                      <LearnMoreLink to={"benefits"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 sm:mt-20 md:mx-auto md:max-w-xl lg:mx-0 lg:mt-0 lg:w-screen">
              <Image
                className="md:rounded-lg"
                src={HeroJunk}
                alt="Need it done now? Quick and easy Full Service Junk Removal for Denver, Aurora & Centennial. Same-day service available."
                placeholder="blur"
                priority
              />
            </div>
          </div>
          <Benefits />
        </div>
      </section>
    </>
  );
}
