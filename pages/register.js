import { Footer, Loading, Navbar, Topbar } from "../components";

import { Register } from '../sections';

function register() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Register />
            <Footer />
            <Loading />
        </>
    )
}

export default register