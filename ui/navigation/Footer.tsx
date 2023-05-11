import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import SocialRow from '../Misc/SocialRow'

function Footer() {
    return (
        <div><footer className="bg-blue-700  shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8">
            <p className="mb-4 text-sm text-center text-white  sm:mb-0">
                &copy; 2021-2023 <Link href="http://stlfest.live" className="hover:underline" target="_blank">stlfest.live</Link> | Design by Twinny Twin & TheCrib.Network
            </p>
            <SocialRow />
        </footer></div>
    )
}

export default Footer