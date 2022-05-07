import { Footer, Navbar, Loading } from "../components";

import { Login } from '../sections';

function index() {
    return (
        <>
            <Navbar />
            <Login />
            <Footer />
            <Loading />
        </>
    )
}

export default index