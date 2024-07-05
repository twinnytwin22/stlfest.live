"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { attendeeFAQs } from "../../lib/faqsLib";
import { motion } from 'framer-motion'
import Image from "next/image";
function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="bg-gradient-to-t to-blue-700 via-blue-900 from-fuchsia-300 relative">
      <motion.section
        className="bg-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          zIndex: 0,
        }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="w-full md:flex gap-4 items-start py-16 p-4 select-none max-w-5xl mx-auto justify-between">
          <div id="faq" className="md:w-2/3">
            <h2 className="mb-4 text-4xl tracking-tight font-medium font-bubblegum-pop-highlight text-white">
              FAQs.
            </h2>
            {attendeeFAQs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full flex items-center justify-between p-2.5 bg-blue-600   text-white rounded hover:bg-blue-700 focus:outline-none "
                  onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                >
                  <span className="text-left font-work-sans text-sm">
                    {faq.question}
                  </span>
                  <FaChevronDown />
                </button>
                {index === activeIndex && (
                  <div className="p-4 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-white rounded-b mx-2 font-work-sans text-sm">
                    <p>{faq.answer}</p>
                    {/* {faq?.href && (
                <Link className="underline cursor-pointer" href={faq.href}>
                  {faq.linkText}
                </Link>
              )} */}
                  </div>
                )}
              </div>
            ))}
            <p className="text-center text-white font-bold">      Looking for Vendor and POD FAQs?
            </p>
            <Link href="/faqs" className="mt-4">
              <div className='text-white  bg-red-600 p-2.5 font-owners w-fit px-6 mx-auto hover:scale-105 duration-150 ease-in-out mt-4'>
                View All FAQs
              </div>
            </Link>

          </div>
          <div className="aspect-square md:w-1/3 relative">
            <Image
              src={'/images/sponsors-2024.JPG'}
              alt="Sponsors 2024"
              fill
              className="rounded-lg p-8 mt-4 md:p-0 aspect-square"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default FAQ;
