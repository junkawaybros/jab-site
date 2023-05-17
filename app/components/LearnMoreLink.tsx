"use client";
import { Link } from "react-scroll";

export default function LearnMoreLink() {
  return (
    <Link
      className="sm:text-md flex cursor-pointer text-xs font-semibold uppercase leading-6 text-teal-500 transition duration-300 ease-in-out hover:text-teal-400 lg:text-lg"
      to="how-we-work"
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
      <span className="mr-2">Learn more</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
        />
      </svg>
    </Link>
  );
}
