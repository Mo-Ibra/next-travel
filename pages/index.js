import { Footer, Header, Navbar, Topbar } from "../components";

import Cities from "../sections/Cities/Cities";
import Hotels from "../sections/Hotels/Hotels";
import Tours from "../sections/Tours/Tours";
import Branding from "../sections/Branding/Branding";
import Discount from "../sections/Discount/Discount";
import Price from "../sections/Price/Price";
import News from "../sections/Blog/News/News";
import DownloadApp from "../sections/DownloadApp/DownloadApp";

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
    </>
  )
}

export default Home