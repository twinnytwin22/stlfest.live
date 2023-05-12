'use client'
import "style/global.css"



export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function Providers({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/xvl5aez.css" />
            </head>
            <body>{children}</body>
        </html>
    )
}
