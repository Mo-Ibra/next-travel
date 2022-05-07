import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons, Loading } from "../components"

import { DownloadApp, Tours } from '../sections';

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
            <Loading />
        </>
    )
}

export default index