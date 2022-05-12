import { Footer, Header, Navbar, Topbar, Loading, ContactIcons } from "../components";

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
      <Loading />
      <ContactIcons />
    </div>
  )
}

export default Home