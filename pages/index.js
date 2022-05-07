import { Footer, Header, Navbar, Topbar, Loading, ContactIcons } from "../components";

import { Cities, Hotels, Tours, Branding, Discount, Price, News, DownloadApp } from "../sections";

function Home() {
  return (
    <>
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
    </>
  )
}

export default Home