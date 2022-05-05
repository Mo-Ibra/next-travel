import { Footer, Navbar, Breadcrumb } from '../components';
import DownloadApp from '../sections/DownloadApp/DownloadApp';
import PackagesGrid from '../sections/Packages/PackagesGrid/PackagesGrid';

import Topbar from '../sections/Topbar/Topbar';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="All Packages Page" />
            <PackagesGrid />
            <DownloadApp />
            <Footer />
        </>
    )
}

export default index;