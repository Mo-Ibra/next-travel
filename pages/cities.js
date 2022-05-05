import { Footer, Navbar, Topbar, Breadcrumb } from "../components"
import ContactIcons from "../sections/ContactIcons/ContactIcons"
import DownloadApp from "../sections/DownloadApp/DownloadApp"
import Cities from "../sections/Cities/Cities"

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Cities" />
            <Cities />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index