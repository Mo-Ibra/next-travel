import { Footer, Navbar, Breadcrumb, Topbar } from "../components"
import ContactIcons from "../sections/ContactIcons/ContactIcons"
import DownloadApp from "../sections/DownloadApp/DownloadApp"
import Service from "../sections/Service/Service"

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Contact" />
            <Service />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index