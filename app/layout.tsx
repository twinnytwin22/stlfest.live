import Head from "next/head"
import Providers from "../lib/providers"
import HeroBanner from "../ui/hero/HeroBanner"
import Footer from "../ui/navigation/Footer"
import NavBar from "../ui/navigation/NavBar"
export const metadata = {
  title: 'STL FEST 2023',
  description: 'STL FEST 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xvl5aez.css" />
      </head>
      <Providers>
        <body>
          <NavBar />{children}
          <Footer />
        </body></Providers>
    </html>
  )
}
