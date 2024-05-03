import React from 'react'
import PhotoSlide from '../ui/PhotoSlide'
import HomeHeader from '../ui/HomeHeader'
import VendorVolunteer from '../ui/VendorVolunteer'
import FlashSale from '../ui/FlashSale'
import LineUp from '../ui/LineUp'

function page() {
    return (
        <div className='mt-16 max-w-screen'>
            <HomeHeader />
            <iframe className="hidden" width="560" height="315" src="https://www.youtube.com/embed/Xt8iLx6qw_w?si=pBJE-RAdqkV-ZDdN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>
            <div className='hidden'>
            <LineUp />
            <PhotoSlide /></div>
            <VendorVolunteer />
        </div>
    )
}

export default page