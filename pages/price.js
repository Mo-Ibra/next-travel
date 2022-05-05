import { Footer, Navbar, Breadcrumb, Topbar } from "../components"
import ContactIcons from "../sections/ContactIcons/ContactIcons"
import DownloadApp from "../sections/DownloadApp/DownloadApp"
import Price from "../sections/Price/Price"

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Price" />
            <Price />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index