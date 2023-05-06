import Image from "next/image";
import HeroJunk from "../../public/hero-junk.jpg";

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                  Breathe Easy: Your Path to a Clutter-Free Environment Starts
                  Here
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="items-left mt-10 flex flex-col items-baseline gap-x-6 gap-y-6 sm:flex-row">
                  <a
                    href="#"
                    className="text-md rounded-md bg-teal-500 px-3.5 py-2.5 font-semibold uppercase text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 sm:text-lg"
                  >
                    Get a free estimate
                  </a>
                  <a
                    href="#"
                    className="text-md flex font-semibold uppercase leading-6 text-white hover:text-teal-400"
                  >
                    <span className="mr-2">Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            {/* <!-- <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true"></div> --> */}
            <Image
              className="md:rounded-lg"
              src={HeroJunk}
              alt="Full service junk removal in Denver, Aurora and Centennial"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
