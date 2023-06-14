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
            <LineUp />
            <PhotoSlide />
            <VendorVolunteer />
        </div>
    )
}

export default page