"use client";
import React from "react";
import LaunchCountdown from "./Countdown/LaunchCountdown";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import Gap from "./Misc/Gap";
import SocialRow from "./Misc/SocialRow";
import { motion } from "framer-motion";
import Image from "next/image";
import { flashSaleLink } from "../lib/constants";

function HomeHeader() {
  const extLink = "";
  const intLink = "/tickets";

  function getNextJulySeventh() {
    const chicagoTimezoneOffset = -5 * 60; // Chicago timezone offset from UTC in minutes (UTC-5)
    const currentDate = new Date();

    // Set the date to July 7th of the current year at noon
    const nextJulySeventh = new Date(currentDate.getFullYear(), 6, 7, 12, 0, 0); // Month is 0-based, so 6 represents July

    // If July 7th of the current year has already passed, set it for next year
    if (currentDate > nextJulySeventh) {
      nextJulySeventh.setFullYear(currentDate.getFullYear() + 1);
    }

    // Adjust for Chicago timezone
    nextJulySeventh.setMinutes(
      nextJulySeventh.getMinutes() + chicagoTimezoneOffset
    );

    return nextJulySeventh;
  }

  // Test the function
  const nextJulySeventh = getNextJulySeventh();
  console.log(nextJulySeventh.toString());

  return (
    <div className="bg-gradient-to-t from-green-500 to-blue-600 relative">
      <motion.section
        className="bg-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          zIndex: 0,
        }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 tracking-wide relative">
          <Link
            href={flashSaleLink}
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  bg-blue-700 text-white  hover:bg-blue-900 hover:scale-105 duration-300 ease-in-out relative z-20"
            role="alert"
          >
            <span className="text-xs bg-primary-600 text-white px-4 py-1.5 mr-3">
              <AiFillStar className="w-4 h-4 text-yellow-400" />
            </span>{" "}
            <span className=" font-owners">
             Tickets On Sale Now!
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Image
            className="max-w-xs p-12 mx-auto scale-150  duration-150 ease-in-out relative z-10"
            src="/images/STL-4EST-LOGO.png"
            alt="Logo"
            width={1000}
            height={1000}
          />
          <h1 className="font-extrabold leading-none text-6xl lg:text-8xl text-white font-[bubblegum-pop-highlight] tracking-wide">
            7.7.24
          </h1>
          <div className="mb-2 -mt-2">
            <SocialRow />
          </div>
          <div className="p-2"/>

            <Link href={flashSaleLink} className="bg-red-600 w-fit p-3 relative z-20 font-owners mx-auto text-white hover:scale-110 ease-in-out duration-200">
              GET YOUR TICKETS!
            </Link>
            <br/>
            <div className="p-4"/>
          {/* <LaunchCountdown targetDate={getNextJulySeventh()} /> */}
      
          <Gap />
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <h1 className="font-extrabold leading-none text-3xl lg:text-5xl text-white font-[bubblegum-pop-highlight] tracking-wide"></h1>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default HomeHeader;
