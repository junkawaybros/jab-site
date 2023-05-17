"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingTabs() {
  let [categories] = useState({
    "Minimum Load": [
      "Removing a single piece of furniture (e.g., a couch, a mattress, a desk)",
      "Disposing of a single large appliance (e.g., a refrigerator, a washing machine, a stove)",
    ],
    "1/4 Load": [
      "Removing several pieces of furniture (e.g., a dining set, a few chairs)",
      "Disposing of multiple appliances (e.g., a dishwasher and a dryer)",
      "Clearing out a small amount of yard waste",
      "Cleaning out a small closet or a few boxes worth of household junk",
    ],
    "1/2 Load": [
      "Emptying a medium-sized garage or basement",
      "Clearing out a couple of rooms worth of furniture and appliances",
      "Removing remodeling debris from a small renovation project",
      "Clearing out a significant amount of yard waste",
    ],
    "Full Load": [
      "Cleaning out an entire home or large estate",
      "Removing debris from a major construction or renovation project",
      "Clearing out a large office or commercial space",
      "Disposing of large amounts of yard waste or landscaping debris",
    ],
  });

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-900 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-500",
                  "ring-teal-100 ring-opacity-60 ring-offset-2 ring-offset-teal-400 focus:outline-none",
                  selected
                    ? "bg-white shadow"
                    : "text-white hover:bg-white/[0.12] hover:text-teal-500"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((items, index) => (
            <Tab.Panel
              key={index}
              className={classNames("rounded-xl bg-gray-900 p-3")}
            >
              <ul>
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="relative list-disc rounded-md p-3 hover:bg-gray-900"
                  >
                    <h3 className="text-sm font-medium leading-5">{item}</h3>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
