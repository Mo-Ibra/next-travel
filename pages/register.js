import { Footer, Navbar } from "../components";

import Register from '../sections/Auth/Register/Register';

function register() {
    return (
        <>
            <Navbar />
            <Register />
            <Footer />
        </>
    )
}

export default register