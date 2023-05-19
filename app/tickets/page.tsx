import Link from 'next/link'
import React from 'react'
import FlashSale from '../../ui/FlashSale'

function page() {
    return (
        <div className='w-screen justify-center content-center items-center mx-auto p-16 bg-white h-full min-h-screen overflow-hidden will-change-auto'>
            <FlashSale />
            <div className='mx-auto'>
                <Link href="https://www.ticketfalcon.com/e/stlfestflashsale/">
                    <div className='bg-blue-600 p-2.5 max-w-sm flex w-full mx-auto justify-center md:hover:scale-105 hover:bg-blue-800'>
                        <h2 className=' text-lg text-center font-[owners2] text-white'>Having trouble? Checkout straight from Ticket Falcon</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default page