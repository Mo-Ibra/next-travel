import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons, Loading } from "../components"

import { DownloadApp, Branding } from '../sections';

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
            <Loading />
        </>
    )
}

export default index