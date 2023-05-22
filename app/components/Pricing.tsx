import PricingTabs from "./PricingTabs";

const data = {
  title: "Pricing",
  subtitle: "How much does it cost?",
  cta: "Book a free estimate",
};

export default function Pricing2() {
  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl px-6 sm:text-center lg:px-8">
          <h2
            className="text-base font-semibold leading-7 text-teal-400"
            id="pricing"
          >
            {data.title}
          </h2>

          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.subtitle}
          </p>
        </div>
        <div className="pt-20">
          <div className="relative isolate">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto flex max-w-2xl flex-col gap-16 rounded-3xl bg-gray-900 px-6 py-16 ring-1 ring-white/10 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                <div className="grid w-full grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-4">
                  <PricingTabs />
                  <div className="pt-4 lg:pt-0">
                    <div>
                      <p className="text-lg leading-8 text-gray-300">
                        At JunkAway Bros, our pricing is transparent and
                        comprehensive, taking into account four key factors:
                      </p>
                      <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 px-4 text-base leading-7 text-gray-300 sm:grid-cols-1">
                        <li>
                          <span className="font-bold text-white">Volume:</span>{" "}
                          The amount of space your junk items take in our truck.
                        </li>
                        <li>
                          <span className="font-bold text-white">Labor:</span>{" "}
                          The effort and time our team spends on your project.
                        </li>
                        <li>
                          <span className="font-bold text-white">Weight:</span>{" "}
                          The total weight of your junk items. Heavier items may
                          require more effort to handle and more resources to
                          dispose of, which we consider in our pricing.
                        </li>
                        <li>
                          <span className="font-bold text-white">
                            Additional Fees:
                          </span>{" "}
                          In some cases, there may be additional landfill
                          disposal fees or disassembly fees for certain items.
                        </li>
                      </ul>

                      <p className="pt-4 text-gray-300">
                        {`These factors guarantee transparent pricing for the services we provide, with no hidden costs. 
                        To provide an exact price we'll have to see your items in person. Book your free, no-obligation estimate today!`}
                      </p>
                    </div>

                    <div className="mt-10 flex">
                      <a
                        href="tel:3038565791"
                        className="text-md rounded-md bg-teal-500 px-3.5 py-2.5 font-semibold uppercase text-white shadow-sm transition duration-300 ease-in-out hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 lg:text-lg"
                      >
                        {data.cta}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
