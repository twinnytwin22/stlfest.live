import React from 'react'

function HeroBanner() {
    return (
        <div className=' min-h bg-blue-900'>
            <div
                className=" w-full h-full bg-center bg-cover bg-fixed rounded-lg"
                style={{
                    backgroundImage: `url(/coverBanner.jpg)`,
                    backgroundPosition: "center",
                }}
            ></div>
            <img className='max-w-sm mx-auto p-16' src="/images/logo_trans.png" />
        </div>
    )
}

export default HeroBanner