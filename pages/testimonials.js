import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons, Loading } from "../components"
import { DownloadApp, Testimonials } from '../sections';

import Head from "next/head";

function index() {
    return (
        <>
            <Head>
                <title>Service Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Contact" />
            <Testimonials />
            <DownloadApp />
            <Footer />
            <ContactIcons />
            <Loading />
        </>
    )
}

export default index