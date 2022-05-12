import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons, Loading } from "../components"

import { DownloadApp, Branding } from '../sections';

import Head from "next/head";

function index() {
    return (
        <div>
            <Head>
                <title>Branding Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Branding" />
            <Branding />
            <DownloadApp />
            <Footer />
            <ContactIcons />
            <Loading />
        </div>
    )
}

export default index