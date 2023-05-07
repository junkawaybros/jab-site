import React from "react";

export default function Benefits() {
  return (
    <section aria-labelledby="perks-heading" className="bg-white">
      <h2 id="perks-heading" className="sr-only">
        Why work with us?
      </h2>

      <div className="mx-auto max-w-7xl px-4 py-8 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
            <div className="md:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="-my-1 mx-auto h-24 w-auto"
                  src="https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-950">
                Free returns
              </h3>
              <p className="mt-3 text-sm text-gray-900">
                Not what you expected? Place it back in the parcel and attach
                the pre-paid postage stamp.
              </p>
            </div>
          </div>
          <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
            <div className="md:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="-my-1 mx-auto h-24 w-auto"
                  src="https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-950">
                Same day/next day
              </h3>
              <p className="mt-3 text-sm text-gray-900">
                We offer a delivery service that has never been done before.
                Checkout today and receive your products within hours.
              </p>
            </div>
          </div>
          <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
            <div className="md:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="-my-1 mx-auto h-24 w-auto"
                  src="https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-950">
                All year discount
              </h3>
              <p className="mt-3 text-sm text-gray-900">
                Looking for a deal? You can use the code &quot;ALLYEAR&quot; at
                checkout and get money off all year round.
              </p>
            </div>
          </div>
          <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
            <div className="md:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="-my-1 mx-auto h-24 w-auto"
                  src="https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-950">
                For the planet
              </h3>
              <p className="mt-3 text-sm text-gray-900">
                We’ve pledged 1% of sales to the preservation and restoration of
                the natural environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
