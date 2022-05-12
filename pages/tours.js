import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons, Loading } from "../components"

import { DownloadApp, Tours } from '../sections';

import Head from "next/head";

function index() {
    return (
        <div>
            <Head>
                <title>Tours Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Tours" />
            <Tours />
            <DownloadApp />
            <Footer />
            <ContactIcons />
            <Loading />
        </div>
    )
}

export default index