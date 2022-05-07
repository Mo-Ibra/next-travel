import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons, Loading } from "../components"

import { DownloadApp, Faq } from '../sections';

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
            <Loading />
        </>
    )
}

export default index