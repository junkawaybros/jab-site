const data = {
  title: "What we take",
  subtitle: "SAME DAY OR NEXT DAY PICK UP",
  description: `The Bros can pickup just about any item, excluding hazardous items of course - from old mattresses and scrap metal to yard waste and construction debris. No need to worry about heavy lifting - let us handle it for you. Got appliances, furniture, or electronics you need to get rid of? We've got you covered. Say goodbye to clutter and hello to a clean space with The Bros. Book now to get your free estimate.`,
  items: [
    { id: 1, name: "Appliances (including Refrigerators & Freezers)" },
    { id: 2, name: "BBQ & Grills" },
    { id: 3, name: "Bicycles" },
    { id: 4, name: "Carpets & Rugs" },
    { id: 5, name: "Electronics Disposal" },
    { id: 6, name: "Exercise Equipment" },
    { id: 7, name: "Furniture" },
    { id: 8, name: "General Rubbish & Household Trash" },
    { id: 9, name: "Glass" },
    { id: 10, name: "Hot Tubs" },
    { id: 11, name: "General Junk" },
    { id: 12, name: "Mattresses & Box Springs" },
    { id: 13, name: "Paint Disposal" },
    { id: 14, name: "Pianos" },
    { id: 15, name: "Playsets & Trampolines" },
    { id: 16, name: "Pool Tables" },
    { id: 17, name: "Scrap Metals" },
    { id: 18, name: "Storage Sheds" },
    { id: 19, name: "Tires & Rubber" },
    { id: 21, name: "Yard Waste" },
  ],
};

export default function Items() {
  return (
    <section className="bg-white pb-20 sm:pb-32" id="what-we-take">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-teal-500">
              {data.title}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.subtitle}
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {data.description}
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {data.items.map((item) => (
              <div className="relative pl-9" key={item.id}>
                <dt className="group font-semibold text-gray-900">
                  <svg
                    className="absolute left-0 top-1 h-5 w-5 text-teal-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
