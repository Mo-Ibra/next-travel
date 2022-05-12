import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons, Loading } from "../components"

import { DownloadApp, Faq } from '../sections';

import Head from "next/head";

function index() {
    return (
        <div>
            <Head>
                <title>Service Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Contact" />
            <Faq />
            <DownloadApp />
            <Footer />
            <ContactIcons />
            <Loading />
        </div>
    )
}

export default index