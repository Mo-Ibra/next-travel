import { Footer, Navbar, Loading, Topbar } from "../components";

import { Login } from '../sections';

import Head from 'next/head';

function index() {
    return (
        <div>
            <Head>
                <title>Login Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Login />
            <Footer />
            <Loading />
        </div>
    )
}

export default index