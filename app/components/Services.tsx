import CustomDisclosure from "./CustomDisclosure";

const data = {
  title: " Professional High-Volume Junk and Clutter Cleanouts",
  subtitle: "Big Mess? No Stress. Big Cleanups Made Easy",
  description: `Junk removal pros for any job, big or small! We clean out homes, offices, 
  and storage units with speed and efficiency. Our team handles everything from single-item pickups 
  to large cleanouts, even the toughest jobs like hoarding or construction debris. Trust The Bros for a clutter-free space!`,
  items: [
    {
      id: 1,
      name: "Attic & Crawlspace Cleanouts",
      description:
        "Attics and crawlspaces often become the default storage areas in a home. From old furniture and clothing to unused appliances and holiday decorations, we help you clear out these often-neglected spaces, enhancing your storage capacity and improving your home's safety.",
    },
    {
      id: 2,
      name: "Basement Cleanouts",
      description:
        "Basements can quickly become cluttered with unused items and old junk. Our team will help you sort, remove, and dispose of these items responsibly, transforming your basement into a usable and organized space.",
    },
    {
      id: 3,
      name: "Garage Cleanouts",
      description:
        "Over time, garages can become overrun with tools, sports equipment, old furniture, and more. We assist you in clearing out unwanted items, freeing up space for your vehicle or creating a more functional area for your hobbies or storage.",
    },
    {
      id: 4,
      name: "Home Cleanouts",
      description:
        "Get your home cleaned out quickly with our all-inclusive services for moving, downsizing, or decluttering. We'll remove old furniture, appliances, clothing, and more from every room in the house.",
    },
    {
      id: 5,
      name: "Apartment Cleanouts",
      description:
        "We offer cleanout services for renters/apartment managers: old furniture, unwanted appliances removed for fresh start/new tenants. Every room is cleared and ready for its next chapter.",
    },
    {
      id: 6,
      name: "Storage Unit Cleanouts",
      description:
        "Clear out your storage unit with ease! Our storage unit clear-out services make it easy to get rid of unwanted items and organize the space. We provide fast, efficient service that will have your storage unit looking clean and organized in no time.",
    },
    {
      id: 7,
      name: "Estate Cleanouts",
      description:
        "We manage estate cleanouts by sorting furniture, electronics, & possessions after a loved one passes or moves to care. Proper disposal & donation are our priority.",
    },
    {
      id: 8,
      name: "Bereavement Cleanouts",
      description:
        "We'll handle bereavement cleanouts with empathy and patience. Our pros ensure the process is smooth and stress-free so you have space to grieve.",
    },
    {
      id: 9,
      name: "Commercial/Office Cleanouts",
      description:
        "Revamping, relocating or closing? We've got you covered. Our cleanout service takes care of the office mess, obsolete tech and surplus inventory for a spotless commercial space ready for a new lease on life.",
    },
    {
      id: 10,
      name: "Office furniture Removal",
      description:
        "Clear your workspace with ease! Our Furniture Removal service dismantles, moves and disposes of your old furniture while causing minimal disruption to your business. We'll recycle or donate your items responsibly. Book us after hours or on weekends for an organized, efficient office.",
    },
    {
      id: 11,
      name: "Foreclosure Cleanouts",
      description:
        "For those in need of a prompt, efficient approach to address the consequences of foreclosure, our team provides cleanouts and recycling services for real estate agents, banks, and property owners. Make it easy on yourself to ready the property for sale or rent by taking advantage of our Foreclosure Cleanouts services and save time in the process!",
    },
    {
      id: 12,
      name: "Hoarding Cleanouts",
      description:
        "We offer non-judgmental assistance in carefully planning, sorting, and disposing of excess belongings. We also donate/recycle usable items & dispose of waste responsibly. We help improve lives by reclaiming living spaces.",
    },
    {
      id: 13,
      name: "Construction Debris & Waste Removal",
      description:
        "Our construction waste removal service handles disposal during building, renovation, or demolition projects. We recycle wood, drywall, metal, concrete, glass, and insulation. We ensure efficiency, safety, and eco-friendliness to keep projects on schedule and clutter-free.",
    },
  ],
};

export default function Services() {
  return (
    <section className="bg-gray-900 py-20 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-400">
            {data.title}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {data.subtitle}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {data.description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-8 lg:hidden lg:max-w-none lg:grid-cols-3">
            {data.items.map((item) => (
              <CustomDisclosure
                key={item.id}
                name={item.name}
                description={item.description}
              />
            ))}
          </dl>
          <dl className="hidden max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:grid lg:max-w-none lg:grid-cols-3">
            {data.items.map((item) => (
              <div className="flex flex-col" key={item.id}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
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
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{item.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
