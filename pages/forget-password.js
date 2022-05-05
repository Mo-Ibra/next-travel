import { Footer, Navbar } from "../components";

import ForgetPass from '../sections/Auth/ForgetPass/ForgetPass';

function index() {
    return (
        <>
            <Navbar />
            <ForgetPass />
            <Footer />
        </>
    )
}

export default index