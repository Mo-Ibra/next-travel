import { Footer, Navbar, Breadcrumb } from '../components';
import DownloadApp from '../sections/DownloadApp/DownloadApp';
import PackagesSimple from '../sections/Packages/PackagesSimple/PackagesSimple';

import Topbar from '../sections/Topbar/Topbar';             // make all export from one file..

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="All Packages Page" />
            <PackagesSimple />
            <DownloadApp />
            <Footer />
        </>
    )
}

export default index;