import { Footer, Navbar, Topbar, Breadcrumb } from "../components"
import ContactIcons from "../sections/ContactIcons/ContactIcons"
import DownloadApp from "../sections/DownloadApp/DownloadApp"
import Faq from "../sections/Faq/Faq"

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Contact" />
            <Faq />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index