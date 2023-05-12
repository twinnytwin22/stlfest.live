'use client'
import Link from 'next/link'
import React from 'react'
import ContactButton from './navigation/modal'

function VendorVolunteer() {
    return (
        <div className='bg-slate-300'>
            <div className='max-w-screen-xl mx-auto w-full min-h-[300px] relative '>
                <div className='w-full flex flex-col lg:flex-row mx-auto justify-around p-12 items-center space-y-8 lg:space-y-0 duration-150 ease-in-out'>
                    <div className='bg-gray-100 border border-gray-200 p-8 max-w-sm lg:max-w-md w-full space-y-3'>
                        <h1 className='font-[bubblegum-pop-highlight] text-center text-3xl'>Now Accepting Vendors</h1>
                        <p className='text-center text-gray-700'>Have a food truck, brand, or business and want to get in on the action, apply to become a vendor.</p>
                        <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdrQEdHdEnTF9ymWJ18CfZpeXI0krQsAEGF7OyzWWV2xgEiDQ/viewform'>
                            <div className='text-white  bg-red-600 p-2.5 font-["owners2"] w-fit px-6 mx-auto hover:scale-105 mt-2  duration-150 ease-in-out'>
                                Apply
                            </div>
                        </Link>
                    </div>
                    <div className='bg-gray-100 border border-gray-200 p-8 max-w-sm lg:max-w-md w-full space-y-3'>
                        <h1 className='font-[bubblegum-pop-highlight] text-center text-3xl'>Now Accepting Volunteers</h1>
                        <p className='text-center text-gray-700'>We're looking for more hands to help out before and during the festival, apply to volunteer.</p>
                        <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdrQEdHdEnTF9ymWJ18CfZpeXI0krQsAEGF7OyzWWV2xgEiDQ/viewform'>
                            <div className='text-white bg-red-600 p-2.5 font-["owners2"] w-fit px-6 mx-auto hover:scale-105 mt-2 duration-150 ease-in-out'>
                                Apply
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorVolunteer