import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons, Loading } from "../components"

import { DownloadApp, ContactInfo, ContactForm } from '../sections';

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
            <Loading />
        </>
    )
}

export default index