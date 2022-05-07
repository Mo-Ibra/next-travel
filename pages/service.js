import { Footer, Navbar, Breadcrumb, Topbar, Loading, ContactIcons } from "../components"

import { DownloadApp, Service } from '../sections';

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
            <Loading />
        </>
    )
}

export default index