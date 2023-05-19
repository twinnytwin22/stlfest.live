import React from 'react'
import PhotoSlide from '../ui/PhotoSlide'
import HomeHeader from '../ui/HomeHeader'
import VendorVolunteer from '../ui/VendorVolunteer'
import FlashSale from '../ui/FlashSale'

function page() {
    return (
        <div className='mt-16'>
            <HomeHeader />
            <FlashSale/>
            <PhotoSlide />
            <VendorVolunteer />
        </div>
    )
}

export default page