import { Footer, Navbar, Breadcrumb, Topbar } from "../components"
import ContactIcons from "../sections/ContactIcons/ContactIcons"
import DownloadApp from "../sections/DownloadApp/DownloadApp"
import Topbar from "../sections/Topbar/Topbar"

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Tours" />
            <Tours />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index