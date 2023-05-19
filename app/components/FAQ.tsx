"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const data = {
  title: "FAQ",
  subtitle: "Frequently asked questions",
  faqs: [
    {
      question: "Does JunkAway Bros offer services in my area?",
      answer:
        "We serve Denver, Aurora, Centennial, and Parker. If you don't see your area, please give us a call.",
    },
    {
      question: "What are the working hours for JunkAway Bros?",
      answer:
        "Our operating hours are generally from 8 AM to 6 PM, Monday through Sunday. If you would like to schedule an appointment, please give us a call.",
    },
    // {
    //   question:
    //     "Can I trust that JunkAway Bros is a fully licensed and insured company?",
    //   answer:
    //     "Absolutely, we pride ourselves on being a fully licensed and insured junk removal company. This ensures that both our staff and customers are protected during the removal process.",
    // },
    {
      question: "What types of items can I have JunkAway Bros remove?",
      answer:
        "At JunkAway Bros, we can handle a wide range of items, from old furniture and appliances to yard waste and construction debris. If you have specific items in mind, feel free to ask us directly for confirmation.",
    },
    {
      question:
        "Are there any items that I can't have JunkAway Bros take away?",
      answer:
        "We aim to help with a wide variety of junk, but for safety and environmental reasons, there are certain items we typically can't remove. These include hazardous materials like chemicals, paint, asbestos, and certain types of batteries.",
    },
    {
      question: "Is JunkAway Bros able to remove large and bulky items?",
      answer:
        "Yes, we're equipped and trained to handle large and bulky items. Whether it's a worn-out couch or a heavy appliance, our team at JunkAway Bros is ready to assist.",
    },
    {
      question: "Do you offer free services at JunkAway Bros?",
      answer:
        "While we strive to provide excellent service, we do not offer free services at JunkAway Bros. We're a full service junk removal company and we charge for our services, which includes picking up items, loading them in our trucks, and sweeping the area when we are finished. No surprises - one upfront price.",
    },
    {
      question: "Please tell me more about your no-obligation onsite estimate.",
      answer:
        "Absolutely! We offer a free onsite estimate where our team will come to your location, evaluate the amount and type of junk you have, and give you an all inclusive price for the job. If you are satisfied with the price, we will start the job. If you decline, we’ll be on our way.",
    },
    {
      question:
        "How do you determine the cost of junk removal services at JunkAway Bros?",
      answer:
        "At JunkAway Bros, we primarily base our pricing on the volume of junk to be removed, measured in cubic yards. However, certain types of waste may incur additional charges due to disposal regulations.",
    },
    {
      question:
        "Can I get a precise quote from JunkAway Bros before your team arrives at my location?",
      answer:
        "No, prices cannot be given over the phone as we require an in-person assessment to determine how much space your items will take up in the truck. For estimated prices, give us a call to book a free no-obligation onsite estimate.",
    },
    {
      question: "What payment methods can I use with JunkAway Bros?",
      answer:
        "We accept all major credit cards, as well as cash and checks for our services at JunkAway Bros. We take payment once the job is done. Payment is processed only after the job is complete.",
    },
    {
      question: "Should I tip the team at JunkAway Bros?",
      answer:
        "While tipping is not required, it's always appreciated if you feel our team has provided outstanding service. Our primary goal is your satisfaction.",
    },
    {
      question:
        "When can I expect the JunkAway Bros team to arrive for my appointment?",
      answer:
        "Once you've scheduled an appointment with us at JunkAway Bros, we'll provide a 2-hour arrival window. To ensure you're not kept waiting, our team will also call you 15-30 minutes before we arrive.",
    },
    {
      question:
        "How do I go about canceling or rescheduling my appointment with JunkAway Bros?",
      answer:
        "If you need to cancel or reschedule your appointment with JunkAway Bros, just give us a call or send us an email. We appreciate as much notice as possible so we can adjust our schedule accordingly.",
    },
    {
      question:
        "Is it necessary for me to be onsite for JunkAway Bros to remove my junk?",
      answer:
        "It's not always necessary for you to be onsite. If you can provide us with access to the items and we've received clear instructions, we can handle the job. However, if there are decisions to be made about specific items, it might be beneficial for you to be present.",
    },
    {
      question: "What does JunkAway Bros do with the junk after removal?",
      answer:
        "We strive to be environmentally responsible by donating and recycling items as much as possible to reduce landfill waste.",
    },
    // More questions...
  ],
};

export default function FAQ() {
  return (
    <section className="bg-gray-900" id="faq">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl ">
          <h2 className="text-base font-semibold leading-7 text-teal-400">
            {data.title}
          </h2>
          <p className="text-2xl font-bold leading-10 tracking-tight text-white">
            {data.subtitle}
          </p>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {data.faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white transition duration-300 ease-in-out hover:text-teal-400">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
