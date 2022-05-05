import { Footer, Navbar } from "../components";

import Login from '../sections/Auth/Login/Login';

function index() {
    return (
        <>
            <Navbar />
            <Login />
            <Footer />
        </>
    )
}

export default index