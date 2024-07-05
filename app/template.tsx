"use client";

import React from "react";
import Image from "next/image";
import { useSiteStore } from "./store";
function Template({ children }: { children: React.ReactNode }) {
  const { focusedImage, setFocusedImage } = useSiteStore();
  // useHandleOutsideClick(focusedImage, setFocusedImage, 'FI')
  return (
    <div className="relative" id="FI">
      {focusedImage && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-70 z-[998]"></div>
          <div className="fixed inset-0 flex items-center justify-center z-[999]">
            <div>
              <Image
                src={focusedImage}
                alt="line up"
                width={500}
                height={500}
                className="rounded-lg p-4 md:p-0"
              />
              <div
                onClick={() => {
                  setFocusedImage(null);
                }}
                className="text-white  bg-red-600 p-2.5 font-owners w-fit px-6 mx-auto hover:scale-105 mt-2  duration-150 ease-in-out"
              >
                Close
              </div>
            </div>
          </div>
        </>
      )}
      {children}
    </div>
  );
}

export default Template;
