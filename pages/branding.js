import { Footer, Navbar, Topbar, Breadcrumb } from "../components"
import ContactIcons from "../sections/ContactIcons/ContactIcons"
import DownloadApp from "../sections/DownloadApp/DownloadApp"
import Branding from "../sections/Branding/Branding"

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Branding" />
            <Branding />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index