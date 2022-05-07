import { Footer, Navbar, Breadcrumb, Topbar, Loading, ContactIcons } from "../components"

import { DownloadApp, Price} from '../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Price" />
            <Price />
            <DownloadApp />
            <Footer />
            <ContactIcons />
            <Loading />
        </>
    )
}

export default index