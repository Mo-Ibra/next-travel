import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons, Loading } from "../components"
import { DownloadApp, Testimonials } from '../sections';

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
            <Loading />
        </>
    )
}

export default index