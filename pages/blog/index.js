import { Footer, Navbar, Topbar, Breadcrumb } from "../../components"
import ContactIcons from "../../sections/ContactIcons/ContactIcons"
import DownloadApp from "../../sections/DownloadApp/DownloadApp"
import Post from '../../sections/Blog/Post/Post'

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Posts" />
            <Post />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index