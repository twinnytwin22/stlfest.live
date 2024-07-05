"use client";
import Link from "next/link";
import React from "react";
import ContactButton from "./navigation/modal";
import { venderAppLink, volunteerAppLink } from "../lib/constants";
import Image from "next/image";
import { useSiteStore } from "../app/store";

function VendorVolunteer() {
  const {focusedImage, setFocusedImage} = useSiteStore()
console.log(focusedImage)
  return (
    <div className="bg-slate-300 relative min-h-[500px] flex items-center pb-52 md:pb-0 ">
      <img
        className="absolute left-0 bottom-0 max-w-sm md:max-w-xl -z-5"
        src="images/bigtopImage.png"
        alt="Big Top Image"
      />

      <div className="max-w-screen-xl mx-auto w-full min-h-[300px] relative ">
      <h3 className="font-[bubblegum-pop-highlight] text-center text-4xl uppercase mt-8">
              This Years Line-Ups</h3>
        <div className="mx-auto w-full p-4 md:p-8 flex flex-wrap gap-4">
          <div className="mx-auto">
            <Image src='/images/blockparty-lineup-2024.JPG' alt="line up" width={500} height={500} className="mx-auto rounded-lg" />
            <div onClick={() => { 
              setFocusedImage('/images/blockparty-map.jpeg')}} 
              className='text-white  bg-red-600 p-2.5 font-owners w-fit px-6 mx-auto hover:scale-105 mt-2  duration-150 ease-in-out'>
              VIEW MAP
            </div>
          </div>

          <div className="mx-auto">

            <Image src='/images/main-lineup-2024.JPG' alt="line up" width={500} height={500} className="mx-auto rounded-lg" />
            <div onClick={() => { 
              setFocusedImage('/images/main-map.jpeg')}} 
              className='text-white  bg-red-600 p-2.5 font-owners w-fit px-6 mx-auto hover:scale-105 mt-2  duration-150 ease-in-out'>
              VIEW MAP
            </div>
          </div></div>
          <hr className="border-zinc-400 border opacity-25 my-8"/>
          <div className="max-w-5xl mx-auto py-4">
              <h3 className="font-[bubblegum-pop-highlight] text-center pb-4 text-4xl uppercase">
              STL FEST 2023 Recap</h3>
          <iframe  className="aspect-video w-full mx-auto max-w-5xl rounded-lg" src="https://www.youtube.com/embed/Xt8iLx6qw_w?si=Gk712RWq0LALFwp6" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen ></iframe>
</div>
<hr className="border-zinc-400 border opacity-25 my-8"/>

        {<div className="bg-gray-100 border border-gray-200 p-8 md:p-4 max-w-sm lg:max-w-5xl w-full space-y-3 mx-auto my-16 ">
          <h3 className="font-[bubblegum-pop-highlight] text-center text-3xl uppercase">
            Vote For The People's Choice!{" "}
          </h3>
          <p className="text-center text-gray-700">
            Who would you like to see perform at the 2024 STLF3ST Block Party?
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfTWjTGVA4tzLHjsVH7NS324qnLUYkiJ4WiB6J5YzOgIQmwUw/viewform">
            <div className='text-white  bg-red-600 p-2.5 font-owners w-fit px-6 mx-auto hover:scale-105 mt-2  duration-150 ease-in-out'>
              VOTE NOW
            </div>
          </Link>
        </div>}


        <div className="max-w-6xl w-full hidden flex-col lg:flex-row mx-auto justify-around p-8 items-center space-y-8 lg:space-y-0 duration-150 ease-in-out">

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
              Now Accepting <br />Vendors
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
