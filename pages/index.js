import { Footer, Header, Navbar, Topbar, ContactIcons } from "../components";

import { Cities, Hotels, Tours, Branding, Discount, Price, News, DownloadApp } from "../sections";

import Head from 'next/head';

function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Topbar />
      <Navbar />
      <Header />
      <Tours />
      <Cities />
      <Hotels />
      <Branding />
      <Discount />
      <Price />
      <News />
      <DownloadApp />
      <Footer />
      <ContactIcons />
    </div>
  )
}

export default Home

// Write docs
// make about page 1
// make about page 2
// Change logo
// Change images
// Change words