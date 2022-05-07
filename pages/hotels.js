import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons, Loading } from "../components";

import { DownloadApp, Hotels } from '../sections';

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
            <Loading />
        </>
    )
}

export default index;