import { Footer, Navbar, Topbar, Breadcrumb } from "../components"
import ContactIcons from "../sections/ContactIcons/ContactIcons"
import DownloadApp from "../sections/DownloadApp/DownloadApp"
import Hotels from "../sections/Hotels/Hotels"

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Hotels" />
            <Hotels />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index