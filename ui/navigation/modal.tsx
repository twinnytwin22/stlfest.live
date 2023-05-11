"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import ContactForm from "../ContactPageForm";

const Modal = ({ handleClose }: { handleClose: () => void }) => {


  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center mx-8">
      <div className="bg-blue-950">
        <ContactForm style={{ zIndex: 10000 }} />{" "}
        {!window && <button
          className="bg-blue-500 text-white px-4 py-2 text-sm w-24 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          onClick={handleClose}
        >
          Close
        </button>}</div>
      <div
        className="fixed inset-0  opacity-50"
        onClick={handleClose}
      ></div>
    </div>
  );
};

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('open')
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    console.log('close')
    setIsOpen(false);
  };

  return (
    <div className="">

      <p onClick={handleOpenModal} className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0">Contact</p>
      <AnimatePresence>
        {isOpen && <Modal handleClose={handleCloseModal} />}
      </AnimatePresence>
    </div>
  );
};

export default ContactButton;
