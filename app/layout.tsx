import Providers from "../lib/providers"
import Footer from "../ui/navigation/Footer"
import NavBar from "../ui/navigation/NavBar"
export const metadata = {
  title: 'STL FEST 2024',
  description: 'STL FEST 2024',
  openGraph: {
    title: "STLFEST.live",
    description:
      "STL FEST 2024",
    url: "https:/stlfest.live",
    siteName: "STL FEST",
    images: [
      {
        url: "https://i.imgur.com/WnYTNy6.jpeg",
        width: 800,
        height: 800,
      },
      {
        url: "https://i.imgur.com/WnYTNy6.jpeg",
        width: 1800,
        height: 1800,
        alt: "STLFEST",
      },
    ],
    locale: "en-US",
    type: "website",

  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Providers>
        <body >
          <div >
            <NavBar />{children}
            <Footer /></div>
        </body></Providers>
    </html>
  )
}
