const data = {
  title: "How we work",
  subtitle: "The quick and easy way to get rid of your unwanted junk!",
  description: `We prioritize your convenience by working around your
  schedule, ensuring a seamless junk removal experience. The
  Bros handles all the heavy lifting, making your unwanted items
  vanish with just a point of your finger. Moreover, we are
  committed to responsible disposal practices, donating or
  recycling your junk whenever possible.`,
  cta: "Book a free estimate",
  items: [
    "Book an appointment easily online or dial 303-856-5791 for scheduling.",
    "We'll give you a call in advance before your scheduled appointment window to let you know what time we’ll arrive.",
    "Simply point out what items you want removed and we will provide a free, no-obligation estimate.",
    "We load your unwanted items into our truck and sweep up the area.",
    "Collect payment once we’re done, you can pay with cash, card, or e-transfer.",
  ],
};

export default function HowWeWork() {
  return (
    <section className="pb-20 sm:pb-32" id="how-we-work">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 rounded-3xl bg-gray-900 px-6 py-16 ring-1 ring-white/10 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <div className="grid w-full grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-4">
              <div>
                <h2 className="text-base font-semibold leading-7 text-teal-400">
                  {data.title}
                </h2>
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {data.subtitle}{" "}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {data.description}
                </p>
              </div>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-1"
              >
                {data.items.map((item, index) => (
                  <li className="flex gap-x-3" key={index}>
                    <svg
                      className="h-7 w-5 flex-none text-teal-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
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
    </section>
  );
}
