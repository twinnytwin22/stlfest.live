'use client'
import React from 'react'
import LaunchCountdown from './Countdown/LaunchCountdown'
import { TARGET_DATE } from './Countdown/targetDate'
import { AiFillInstagram, AiFillStar } from 'react-icons/ai'
import Link from 'next/link'
import Gap from './Misc/Gap'
import SocialRow from './Misc/SocialRow'
import SignUp from './Misc/SignUp'
import { motion } from 'framer-motion'

function HomeHeader() {

    const extLink = ''
    const intLink = '/tickets'

    return (
        <div className='bg-gradient-to-t from-green-500 to-blue-600 relative'>
            <motion.section
                className="bg-scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    zIndex: 0
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 tracking-wide relative">
                    <Link href={extLink} className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  bg-blue-700 text-white  hover:bg-blue-900 hover:scale-105 duration-300 ease-in-out" role="alert">
                        <span className="text-xs bg-primary-600 text-white px-4 py-1.5 mr-3"><AiFillStar className='w-4 h-4 text-yellow-400' /></span> <span className="text-xl font-medium font-['owners2']">Thank you for attending!</span>
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </Link>
                    <img className='max-w-xs p-12 mx-auto hover:scale-110 duration-150 ease-in-out relative z-10' src="/images/logo_trans.png" alt="Logo" />
                    <h1 className="font-extrabold leading-none text-6xl lg:text-8xl text-white font-[bubblegum-pop-highlight] tracking-wide">7.2.23</h1>
                    <div className='mb-2 -mt-2'><SocialRow /></div>
                    <Link className='relative hidden z-20' href='https://docs.google.com/forms/d/e/1FAIpQLSf6PVuLMC0F86awl4fMiysN2hrqNcMJQuJjtXjNhWbnI3Ligw/viewform'>
                        <div className='bg-red-600 w-fit p-3 relative z-20 font-[owners2] mx-auto text-white hover:scale-110 ease-in-out duration-200'>
                            VOTE THE PEOPLE'S CHOICE!
                        </div>
                    </Link>
                    <Gap />
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <h1 className="font-extrabold leading-none text-3xl lg:text-5xl text-white font-[bubblegum-pop-highlight] tracking-wide">See you next year!</h1>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default HomeHeader;
