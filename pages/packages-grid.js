import { Footer, Navbar, Breadcrumb, Topbar, Loading, ContactIcons } from '../components';
import { DownloadApp, PackagesGrid } from '../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="All Packages Page" />
            <PackagesGrid />
            <DownloadApp />
            <Footer />
            <Loading />
            <ContactIcons />
        </>
    )
}

export default index;