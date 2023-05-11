import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

function SocialRow() {
    return (
        <div className="flex justify-center items-center space-x-1">
            <Link href="#" data-tooltip-target="tooltip-facebook" className="inline-flex justify-center p-2 text-white  cursor-pointer   hover:text-gray-900 hover:bg-gray-100 ">
                <AiFillFacebook className='w-5 h-5' />
                <span className="sr-only">Facebook</span>
            </Link>
            <div id="tooltip-facebook" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900  shadow-sm opacity-0 transition-opacity duration-300 tooltip ">
                Like us on Facebook
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <Link href="#" data-tooltip-target="tooltip-twitter" className="inline-flex justify-center p-2 text-white  cursor-pointer   hover:text-gray-900 hover:bg-gray-100 ">
                <AiOutlineTwitter className='w-5 h-5' />
                <span className="sr-only">Twitter</span>
            </Link>
            <div id="tooltip-twitter" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900  shadow-sm opacity-0 transition-opacity duration-300 tooltip ">
                Follow us on Twitter
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <a href="#" data-tooltip-target="tooltip-github" className="inline-flex justify-center p-2 text-white  cursor-pointer   hover:text-gray-900 hover:bg-gray-100 ">
                <AiFillInstagram className='w-5 h-5' />
                <span className="sr-only">Github</span>
            </a>


        </div>
    )
}

export default SocialRow