"use client";
import Link from "next/link";
import React from "react";
import ContactButton from "./navigation/modal";
import { venderAppLink, volunteerAppLink } from "../lib/constants";

function VendorVolunteer() {
  return (
    <div className="bg-slate-300 relative min-h-[500px] flex items-center pb-52 md:pb-0 ">
      <img
        className="absolute left-0 bottom-0 max-w-sm md:max-w-xl -z-5"
        src="images/bigtopImage.png"
        alt="Big Top Image"
      />

      <div className="max-w-screen-xl mx-auto w-full min-h-[300px] relative ">
     {<div className="bg-gray-100 border border-gray-200 p-8 md:p-4 max-w-sm lg:max-w-5xl w-full space-y-3 mx-auto mt-16 ">
            <h1 className="font-[bubblegum-pop-highlight] text-center text-3xl uppercase">
              Vote For The People's Choice!{" "}
            </h1>
            <p className="text-center text-gray-700">
              Who would you like to see perform at the 2024 STLF3ST Block Party?
            </p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfTWjTGVA4tzLHjsVH7NS324qnLUYkiJ4WiB6J5YzOgIQmwUw/viewform">
              <div className='text-white  bg-red-600 p-2.5 font-owners w-fit px-6 mx-auto hover:scale-105 mt-2  duration-150 ease-in-out'>
                VOTING IS NOW CLOSED
              </div>
            </Link>
          </div>}


        <div className= "max-w-6xl w-full flex flex-col lg:flex-row mx-auto justify-around p-8 items-center space-y-8 lg:space-y-0 duration-150 ease-in-out">
      
          <div className="bg-gray-100 border border-gray-200 p-8 max-w-sm lg:max-w-md w-full space-y-3">
            <h1 className="font-[bubblegum-pop-highlight] text-center text-3xl uppercase">
              Now Accepting Volunteers
            </h1>
            <p className="text-center text-gray-700">
              We're looking for more hands to help out before and during the
              festival, apply to volunteer.
            </p>
            <Link href={volunteerAppLink}>
              <div className='text-white bg-red-600 p-2.5 font-owners w-fit px-6 mx-auto hover:scale-105 mt-2 duration-150 ease-in-out'>
                Apply
              </div>
            </Link>
          </div>
          <div className="bg-gray-100 border border-gray-200 p-8 max-w-sm lg:max-w-md w-full space-y-3">
            <h1 className="font-[bubblegum-pop-highlight] text-center text-3xl uppercase">
              Now Accepting <br/>Vendors
            </h1>
            <p className="text-center text-gray-700">
              Do you have a brand or business you want to attract a new audience? Apply now to become a vendor!.
            </p>
            <Link href={venderAppLink}>
              <div className='text-white bg-red-600 p-2.5 font-owners w-fit px-6 mx-auto hover:scale-105 mt-2 duration-150 ease-in-out'>
                Apply
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorVolunteer;
