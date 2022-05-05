import { Footer, Navbar, Breadcrumb, Topbar } from "../../../components"
import ContactIcons from "../../../sections/ContactIcons/ContactIcons"
import DownloadApp from "../../../sections/DownloadApp/DownloadApp"
import Single from '../../../sections/Blog/Single/Single';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Post Name" />
            <Single />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index