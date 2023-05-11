import React from 'react'
import LaunchCountdown from './Countdown/LaunchCountdown'
import { TARGET_DATE } from './Countdown/targetDate'
import { AiFillInstagram, AiFillStar } from 'react-icons/ai'
import Link from 'next/link'
import Gap from './Misc/Gap'

function HomeHeader() {
    return (
        <div><section className="bg-blue-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <Link href="https://www.instagram.com/stl_fest/" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100  dark:bg-blue-950 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span className="text-xs bg-primary-600 text-white px-4 py-1.5 mr-3"><AiFillStar className='w-4 h-4' /></span> <span className="text-sm font-medium font-[owners]">TICKETS ON SALE 5/14</span>
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </Link>
                <img className='max-w-xs p-12 mx-auto' src="/images/logo_trans.png"></img>
                <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-6xl lg:text-8xl dark:text-white font-[bubblegum-pop-highlight] tracking-wide">7.2.23</h1>
                <div className='flex-col md:flex-row flex mx-auto items-center content-center max-w-md w-full'>
                    <input type="text" className='mx-auto p-2.5 w-full' placeholder='your email' />
                    <button className='p-2.5 bg-red-600 text-white font-[owners] px-4 whitespace-nowrap hover:scale-105 w-full md:w-auto'>Sign up for updates</button>
                </div>
                <Gap />
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <LaunchCountdown targetDate={TARGET_DATE} />
                </div>

            </div>
        </section></div>
    )
}

export default HomeHeader