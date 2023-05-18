import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/delivery-truck.svg",
    alt: "Delivery Truck",
    title: "Quick and Easy",
    description: "We'll remove your junk quickly so you can focus on your day.",
  },
  {
    id: 2,
    img: "/budget.svg",
    alt: "Budget",
    title: "Transparent Pricing",
    description:
      "Our pricing is straightforward with no hidden fees or surprises. You'll always know the final price before we start.",
  },
  {
    id: 3,
    img: "/calendar.svg",
    alt: "Calendar",
    title: "Same Day Junk Removal",
    description:
      "Need it done now? No problem! We offer same-day services to help you get rid of your junk as soon as possible.",
  },
  {
    id: 4,
    img: "/broom.svg",
    alt: "Broom",
    title: "Complimentary Clean-up",
    description:
      "Every job comes with a free clean-up so you don't have to worry about the mess after we're done.",
  },
];

export default function Benefits() {
  return (
    <section aria-labelledby="perks-heading" className="bg-white" id="benefits">
      <h2 id="perks-heading" className="sr-only">
        Why work with us?
      </h2>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:pb-32 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {data.map((item) => (
            <div
              key={item.id}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <Image
                    className="-my-1 mx-auto h-14 w-auto"
                    src={item.img}
                    alt={item.alt}
                    width={96}
                    height={96}
                  />
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-900">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
