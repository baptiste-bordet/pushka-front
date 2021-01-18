import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

import "./index.scss";

const NavLinks = () => {
    return (
        <>
            <li><Link smooth to="#dates">Dates</Link></li>
            <li><Link smooth to="#news">News</Link></li>
            <li><Link smooth to="#audio">Audio</Link></li>
            <li><Link smooth to="#photos">Photos</Link></li>
            <li><Link smooth to="#videos">Vidéos</Link></li>
            <li><Link smooth to="#bio">Bio</Link></li>
            <li><Link smooth to="#contact">Contact</Link></li>
        </>
    )
}

const Nav = () => {
    // const [className, setClassName] = useState('');
    // const toggleSideMenu = () => setClassName(className === 'open' ? '' : 'open');

    const BurgerMenu = () => (
        <div id="burger-menu" uk-toggle={"target: #burger-menu; cls: open"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );

    return (
        <div
            uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-nav-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 0"
        >
            <nav className="uk-nav-container uk-navbar">
                <div className="nav-menu uk-navbar-center">
                    <ul className="uk-navbar-nav uk-visible@s">
                        <NavLinks/>
                    </ul>
                    <a href="#" className="uk-navbar-toggle uk-hidden@s" uk-toggle={"target: #sidenav"}>
                        <BurgerMenu/>
                    </a>
                </div>
            </nav>

            <div id="sidenav" uk-offcanvas="overlay: true; mode: push; flip: true" className="uk-offcanvas"
                 uk-toggle={"target: #sidenav"}>
                <div className="uk-offcanvas-bar">
                    <ul className="uk-nav">
                        <NavLinks/>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
