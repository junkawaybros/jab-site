"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const data = {
  srTitle:
    "JunkAway Bros - Full Service Junk removal in Denver, Aurora and Centennial",
  title: "JunkAway Bros",
  navLinks: [
    {
      id: 1,
      href: "#",
      text: "How we work?",
    },
    {
      id: 2,
      href: "#",
      text: "What we take?",
    },
    {
      id: 3,
      href: "#",
      text: "Services",
    },
    {
      id: 4,
      href: "#",
      text: "Pricing",
    },
    {
      id: 5,
      href: "#",
      text: "Contact",
    },
    {
      id: 6,
      href: "#",
      text: "FAQ",
    },
  ],
  cta: "Book Now",
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-900">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex border-teal-200 lg:flex-1">
            <a href="#" className="-m-1.5">
              <span className="sr-only">{data.srTitle}</span>
              {/* <p className="text-2xl font-extrabold text-teal-400">
                {data.title}
              </p> */}
              <Image
                className="h-20 w-20 lg:h-28 lg:w-28"
                src="/junk-away-logo.svg"
                alt="JunkAway Bros Logo"
                width={75}
                height={24}
                priority
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <a
              href="#"
              className="ml-auto mr-4 rounded-md bg-teal-500 px-3 py-2  text-sm font-semibold uppercase text-white shadow-sm transition duration-300 ease-in-out hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              {data.cta}
            </a>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {data.navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-semibold leading-6 text-white hover:text-teal-400"
              >
                {link.text}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="rounded-md bg-teal-500 px-3.5 py-2.5 text-lg font-semibold uppercase text-white shadow-sm transition duration-300 ease-in-out hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              {data.cta}
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5">
                <span className="sr-only">{data.srTitle}</span>
                <Image
                  className="h-20 w-20 lg:h-28 lg:w-28"
                  src="/junk-away-logo.svg"
                  alt="JunkAway Bros Logo"
                  width={75}
                  height={24}
                  priority
                />
              </a>

              <a
                href="#"
                className="ml-auto mr-4 rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold uppercase text-white shadow-sm transition duration-300 ease-in-out hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                {data.cta}
              </a>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {data.navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 hover:text-teal-400"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
