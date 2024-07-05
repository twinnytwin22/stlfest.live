'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteStore } from '../app/store';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';


const VendorCarousel = () => {
  const { showVendors, setShowVendors, vendors } = useSiteStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vendors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vendors.length) % vendors.length);
  };

  if (!showVendors || vendors.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[998] flex items-center justify-center">
      <div className="relative z-[999]">
        <AnimatePresence initial={false}>
          <motion.div
            key={vendors[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={vendors[currentIndex]}
              alt={`Vendor ${currentIndex + 1}`}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-4">
          <button onClick={handlePrev} className="text-white bg-blue-600 p-2.5 font-owners w-fit px-6 mx-2 hover:scale-105 duration-150 ease-in-out">
            <FaChevronLeft/>
          </button>
          <button onClick={() => setShowVendors(false)} className="text-white bg-red-600 p-2.5 font-owners w-fit px-6 mx-2 hover:scale-105 duration-150 ease-in-out">
            Close
          </button>
          <button onClick={handleNext} className="text-white bg-blue-600 p-2.5 font-owners w-fit px-6 mx-2 hover:scale-105 duration-150 ease-in-out">
            <FaChevronRight/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorCarousel;
