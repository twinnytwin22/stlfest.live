'use client'
import React from 'react'
import Slider from 'react-slick'

function PhotoSlide() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div>
            <Slider {...settings}>

            </Slider>
        </div>
    )
}

export default PhotoSlide