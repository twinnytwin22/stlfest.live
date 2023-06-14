"use client";
import React from "react";
import { blockParty, bigTop } from "../lib/lineup";
import Slider from "react-slick";

function LineUp() {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
    };

    const placeholderImages = [
        "/images/stlfest1.jpg",
        "/images/stlfest2.jpg",
        "/images/stlfest3.jpg",
        "/images/stlfest4.jpg",
        "/images/stlfest5.jpg",

        // Add more placeholder image paths as needed
    ];

    return (
        <div className="text-center text-white relative overflow-hidden w-full font-[bubblegum-pop-highlight] bg-cover uppercase">
            <div className="absolute inset-0 object-cover">
                <Slider {...sliderSettings} className="w-full min-h-screen scale-125 lg:scale-110 justify-center">
                    {placeholderImages.map((image, index) => (
                        <div key={index} className="slider-slide object-cover min-h-screen bg-repeat">
                            <div className="bg-blue-700 opacity-[15%] inset-0 absolute w-full h-full min-h-screen overflow-clip" />
                            <img
                                src={image}
                                alt="Placeholder"
                                className="w-full h-full object-cover min-h-screen min-w-screen contrast-125 "
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="min-w-screen px-1 md:px-2.5">
                <div className="max-w-5xl p-8 mx-auto relative md:p-4 lg:p-16">
                    <div className="mx-auto  p-2.5">
                        <h3 className="text-lg">Presented by</h3>
                        {blockParty.vipCarRow.presentedBy}
                    </div>
                    <h1 className="text-center text-white text-3xl lg:text-5xl">
                        {blockParty.eventName}
                    </h1>
                    <div className="tracking-widest text-sm lg:text-base">
                        <h2>{blockParty.description}</h2>
                        <h3>{blockParty.accessibility}</h3>
                    </div>
                    <h3 className="text-lg lg:text-xl">With Hosts</h3>
                    <div className="flex mx-auto justify-center space-x-2 text-xl lg:text-3xl flex-wrap">
                        {blockParty.hostedBy.map((host, index) => (
                            <p
                                className="md:hover:scale-110 ease-in-out duration-300"
                                key={index}
                            >
                                {host}
                                {index !== blockParty.hostedBy.length - 1 && " |"}
                            </p>
                        ))}
                    </div>
                    <h3 className="text-lg lg:text-xl">With DJs</h3>
                    <div className="flex mx-auto justify-center space-x-2 text-xl lg:text-3xl flex-wrap">
                        {blockParty.soundsBy.map((dj, index) => (
                            <p
                                className="hover:scale-110 ease-in-out duration-300"
                                key={index}
                            >
                                {dj}
                                {index !== blockParty.soundsBy.length - 1 && " |"}
                            </p>
                        ))}
                    </div>
                    <h3 className="text-lg lg:text-xl">Performing</h3>
                    <div className="flex mx-auto justify-center space-x-2 text-xl lg:text-3xl flex-wrap">
                        {blockParty.performances.map((artist, index) => (
                            <p
                                className="hover:scale-110 ease-in-out duration-300"
                                key={index}
                            >
                                {artist}
                                {index !== blockParty.performances.length - 1 && " |"}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="max-w-5xl mx-auto relative">
                    <h1 className="text-center text-white text-3xl lg:text-5xl">
                        {bigTop.eventName}
                    </h1>
                    <div className="tracking-widest">
                        <h2 className="text-2xl lg:text-4xl">{bigTop.description}</h2>
                        <h3>{bigTop.accessibility}</h3>
                    </div>
                    <h3 className="text-lg lg:text-xl">With Hosts</h3>
                    <div className="flex mx-auto justify-center space-x-2 text-xl lg:text-3xl flex-wrap">
                        {bigTop.hostedBy.map((host, index) => (
                            <p
                                className="hover:scale-110 ease-in-out duration-300"
                                key={index}
                            >
                                {host}
                                {index !== bigTop.hostedBy.length - 1 && " |"}
                            </p>
                        ))}
                    </div>

                    <h3 className="text-lg lg:text-xl">
                        Performing
                    </h3>
                    <div className="flex mx-auto justify-center space-x-2 text-xl lg:text-3xl flex-wrap">
                        {bigTop.performances.map((artist, index) => (
                            <p
                                className="hover:scale-110 ease-in-out duration-300"
                                key={index}
                            >
                                {artist}
                                {index !== bigTop.performances.length - 1 && " |"}
                            </p>
                        ))}
                    </div>
                    <h3 className="text-lg lg:text-xl">STL DJs Verses</h3>
                    <div className="flex mx-auto justify-center space-x-2 text-xl lg:text-3xl flex-wrap mb-10">
                        {bigTop.soundsBy.map((dj, index) => (
                            <p
                                className="hover:scale-110 ease-in-out duration-300"
                                key={index}
                            >
                                {dj}
                                {index !== bigTop.soundsBy.length - 1 && " |"}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LineUp;
