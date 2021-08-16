import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import Slider from './Slider'


const Layout = ({ children, title = 'Terazzo.pl' }) => {
    return (
        <div className="app">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <div id="fh5co-main">
            <div class="fh5co-overlay-mobile"></div>
            <Slider/>
            {children}
            </div>
            <Footer />

        </div>
    )
}

export default Layout