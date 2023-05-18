"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Link } from "react-scroll";

const data = {
  srTitle:
    "JunkAway Bros - Full Service Junk removal in Denver, Aurora and Centennial",
  title: "JunkAway Bros",
  navLinks: [
    {
      id: 1,
      href: "#",
      text: "How we work?",
      to: "how-we-work",
    },
    {
      id: 2,
      href: "#",
      text: "What we take?",
      to: "what-we-take",
    },
    {
      id: 3,
      href: "#",
      text: "Services",
      to: "services",
    },
    {
      id: 4,
      href: "#",
      text: "Pricing",
      to: "pricing",
    },
    {
      id: 5,
      href: "#",
      text: "Contact",
      to: "contact",
    },
    {
      id: 6,
      href: "#",
      text: "FAQ",
      to: "faq",
    },
  ],
  cta: "Book Now",
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-10 bg-gray-900">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex border-teal-200 lg:flex-1">
            <Link
              className="-m-1.5 cursor-pointer"
              to="hero"
              activeClass="active-desktop"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-150}
              duration={700}
              delay={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              <span className="sr-only">{data.srTitle}</span>

              <Image
                className="h-14 w-14 lg:h-20 lg:w-20"
                src="/junk-away-logo.svg"
                alt="JunkAway Bros Logo"
                width={75}
                height={24}
                priority
                onClick={() => setMobileMenuOpen(false)}
              />
            </Link>
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
              <Link
                className="cursor-pointer text-sm font-semibold leading-6 text-white hover:text-teal-400"
                key={link.id}
                to={link.to}
                activeClass="active-desktop"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-150}
                duration={700}
                delay={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-md rounded-md bg-teal-500 px-3.5 py-2.5 font-semibold uppercase text-white shadow-sm transition duration-300 ease-in-out hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
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
              <Link
                className="-m-1.5 cursor-pointer"
                to="hero"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={700}
                offset={-200}
                delay={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
              >
                <span className="sr-only">{data.srTitle}</span>

                <Image
                  className="h-14 w-14 lg:h-28 lg:w-28"
                  src="/junk-away-logo.svg"
                  alt="JunkAway Bros Logo"
                  width={75}
                  height={24}
                  priority
                  onClick={() => setMobileMenuOpen(false)}
                />
              </Link>

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
                    <Link
                      className="cursor-pointer-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 hover:text-teal-400"
                      key={link.id}
                      to={link.to}
                      activeClass="active-mobile"
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={-110}
                      duration={700}
                      delay={500}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
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
