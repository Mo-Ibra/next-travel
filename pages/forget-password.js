import { Footer, Loading, Navbar } from "../components";
import { ForgetPass } from '../sections';

function index() {
    return (
        <>
            <Navbar />
            <ForgetPass />
            <Footer />
            <Loading />
        </>
    )
}

export default index