import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons, Loading } from "../components"

import { DownloadApp, Cities } from '../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Cities" />
            <Cities />
            <DownloadApp />
            <Footer />
            <ContactIcons />
            <Loading />
        </>
    )
}

export default index