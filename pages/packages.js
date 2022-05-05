import { Footer, Navbar, Breadcrumb, Topbar } from '../components';
import DownloadApp from '../sections/DownloadApp/DownloadApp';
import PackagesWithFilter from '../sections/Packages/PackagesWithFilter/PackagesWithFilter';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="All Packages Page" />
            <PackagesWithFilter />
            <DownloadApp />
            <Footer />
        </>
    )
}

export default index;