import { Footer, Navbar, Topbar, Breadcrumb } from "../components"
import ContactIcons from "../sections/ContactIcons/ContactIcons"
import DownloadApp from "../sections/DownloadApp/DownloadApp"
import ContactInfo from "../sections/Contact/ContactInfo/ContactInfo"
import ContactForm from "../sections/Contact/ContactForm/ContactForm"

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Contact" />
            <ContactInfo />
            <ContactForm />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index