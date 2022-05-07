import { Footer, Navbar, Breadcrumb, Topbar, Loading, ContactIcons } from '../components';

import { DownloadApp, PackagesSimple } from '../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="All Packages Page" />
            <PackagesSimple />
            <DownloadApp />
            <Footer />
            <Loading />
            <ContactIcons />
        </>
    )
}

export default index;