'use client'
import React from 'react'

function Gap(size: any) {
    console.log(size.size, 'size')
    return (
        <div className={`my-16 w-screen `}></div>
    )
}

export default Gap