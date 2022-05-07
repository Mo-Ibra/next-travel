import { Footer, Navbar, Loading, Topbar } from "../components";

import { Login } from '../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Login />
            <Footer />
            <Loading />
        </>
    )
}

export default index