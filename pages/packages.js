import { Footer, Navbar, Breadcrumb, Topbar, Loading, ContactIcons } from '../components';

import { DownloadApp, PackagesWithFilter } from '../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="All Packages Page" />
            <PackagesWithFilter />
            <DownloadApp />
            <Footer />
            <Loading />
            <ContactIcons />
        </>
    )
}

export default index;