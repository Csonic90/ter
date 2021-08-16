import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {



    return (
        <div id="fh5co-header">
            <div class="container">
                <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
                <div id="fh5co-logo">
                    <a href="/">Z.P.U.HA. TERAZZO<span>.</span>
                        <p class="janusz">Janusz</p></a>
                </div>
                <nav id="fh5co-main-nav">
                    <ul>
                        <li><a href="#" data-nav-section="home">Domowa</a></li>
                        <li><a href="#" data-nav-section="about">O Nas</a></li>
                        <li><a href="#" data-nav-section="oferta">Oferta</a></li>
                        <li><a href="#" data-nav-section="stones">Rodzaje granitów</a></li>
                        <li><a href="#" data-nav-section="gallery">Galeria</a></li>
                        <li><a href="#" data-nav-section="contact">Kontakt</a></li>
                    </ul>

                    <p class="pull-right menu-contact">Tel.666 666 666 / 666 555 444 e-mail: email@małpa.pl</p>
                </nav>
            </div>
        </div>
    )
}

export default Header
