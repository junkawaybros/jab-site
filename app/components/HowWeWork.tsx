import React from "react";

export default function HowWeWork() {
  return (
    <section className="pb-20 sm:pb-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-gray-900 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <div className="w-full flex-auto">
              <h2 className="text-base font-semibold leading-7 text-teal-400">
                How we work
              </h2>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The easiest way to rid your space of unwanted junk!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                At our company, we prioritize your convenience by working around
                your schedule, ensuring a seamless junk removal experience. Our
                skilled team handles all the heavy lifting, making your unwanted
                items vanish with just a point of your finger. Moreover, we are
                committed to responsible disposal practices, donating or
                recycling your junk whenever possible.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-1"
              >
                <li className="flex gap-x-3">
                  <svg
                    className="h-7 w-5 flex-none text-teal-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Book your appointment easily online or give us a call at
                  1-800-468-5865 to schedule.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-7 w-5 flex-none text-teal-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Our dedicated truck team will give you a call 15-30 minutes
                  before arriving within your appointment window to confirm the
                  expected arrival time.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-7 w-5 flex-none text-teal-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Our team will assess the items you need removed and provide an
                  all-inclusive, upfront price for the service.
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-7 w-5 flex-none text-teal-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Once you approve, ll efficiently remove your items, clean the
                  area, and collect payment upon completion.
                </li>
              </ul>
              <div className="mt-10 flex">
                <a
                  href="#"
                  className="text-xl font-semibold leading-6 text-teal-400 transition duration-300 ease-in-out hover:text-teal-300"
                >
                  Book a free estimate <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
