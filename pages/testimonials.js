import { Footer, Navbar, Breadcrumb, Topbar } from "../components"
import ContactIcons from "../sections/ContactIcons/ContactIcons"
import DownloadApp from "../sections/DownloadApp/DownloadApp"
import Testimonials from "../sections/Testimonials/Testimonials"

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Contact" />
            <Testimonials />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index