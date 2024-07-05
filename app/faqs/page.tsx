"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { attendeeFAQs, podFAQs, vendorFAQs } from "../../lib/faqsLib";
import {motion} from 'framer-motion'
function page() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activePodIndex, setActivePodIndex] = useState(-1);

  const [activeVendorIndex, setActiveVendorIndex] = useState(-1);


  return (
    <div className="bg-gradient-to-t to-blue-700 from-fuchsia-300 relative">
    <motion.section
      className="bg-scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        zIndex: 0,
      }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
    <div id="faq" className="py-20 p-4 select-none max-w-5xl mx-auto">
      <h2 className="mb-4 text-4xl tracking-tight font-medium font-bubblegum-pop-highlight text-white">
        FAQs.
      </h2>
      <h3 className="text-white text-lg font-bold">
        Attendees</h3>
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
      <h3 className="text-white text-lg font-bold">
            PODs</h3>
      {podFAQs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full flex items-center justify-between p-2.5 bg-blue-600   text-white rounded hover:bg-blue-700 focus:outline-none "
            onClick={() => setActivePodIndex(index === activePodIndex ? -1 : index)}
          >
            <span className="text-left font-work-sans text-sm">
              {faq.question}
            </span>
            <FaChevronDown />
          </button>
          {index === activePodIndex && (
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
      <h3 className="text-white text-lg font-bold">
            Vendors</h3>
      {vendorFAQs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full flex items-center justify-between p-2.5 bg-blue-600   text-white rounded hover:bg-blue-700 focus:outline-none "
            onClick={() => setActiveVendorIndex(index === activeVendorIndex ? -1 : index)}
          >
            <span className="text-left font-work-sans text-sm">
              {faq.question}
            </span>
            <FaChevronDown />
          </button>
          {index === activeVendorIndex && (
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
    </div>
    </motion.section>
    </div>
  );
}

export default page;
