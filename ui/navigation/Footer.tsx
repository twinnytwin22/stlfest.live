import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import SocialRow from '../Misc/SocialRow'

function Footer() {
    return (
        <div><footer className="bg-gradient-to-b from-blue-700 to-blue-600  shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 font-[owners2] ">
            <p className="mb-4 text-sm text-center md:text-left text-gray-100  sm:mb-0 md:whitespace-nowrap">
                &copy; 2021-2023 <Link href="http://stlfest.live" className="hover:underline " >stlfest.live</Link> <Link className='hover:text-white hover:underline' href='http://cribnetwork.io'>| Design by Twinny Twin & Crib, LLC</Link>
            </p>
            <SocialRow />
        </footer></div>
    )
}

export default Footer