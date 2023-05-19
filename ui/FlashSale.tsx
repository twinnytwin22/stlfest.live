import React from "react";
import Iframe from "react-iframe";

function FlashSale() {
    return (
        <Iframe
            scrolling="no"
            width="100%"
            height="900"
            className="mx-auto bg-white p-4 touch-auto max-w-screen-2xl justify-center w-full min-h-screen"
            url="https://www.ticketfalcon.com/embed-tickets/1627153/1/"
        ></Iframe >
    );
}

export default FlashSale;
