import { Footer, Loading, Navbar, Topbar } from "../components";
import { ForgetPassword } from '../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <ForgetPassword />
            <Footer />
            <Loading />
        </>
    )
}

export default index