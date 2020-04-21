import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import "./index.scss";

const NavLinks = () => {
    return (
        <>
            <li><Link smooth to="#dates">Dates</Link></li>
            <li><Link smooth to="#news">News</Link></li>
            <li><Link smooth to="#photos">Photos</Link></li>
        </>
    )
}

const Nav = () => {
    const [className, setClassName] = useState('');
    const toggleSideMenu = () => setClassName(className === 'open' ? '' : 'open');

    const BurgerMenu = () => (
        <div id="burger-menu" className={className} onClick={toggleSideMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );

    return (
        <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-nav-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 0">
            <nav className="uk-nav-container uk-navbar">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active">
                            <a href="#"><img src="./logo_blanc_transparence.png" /></a>
                        </li>
                    </ul>
                </div>

                <div className="nav-menu uk-navbar-center">
                    <ul className="uk-navbar-nav uk-visible@s">
                        <NavLinks />
                    </ul>
                    <a href="#" className="uk-navbar-toggle uk-hidden@s" uk-navbar-toggle-icon uk-toggle="target: #sidenav">
                        <BurgerMenu />
                    </a>
                </div>
            </nav>

            <div id="sidenav" uk-offcanvas="overlay: true; mode: push; flip: true" className="uk-offcanvas" onClick={toggleSideMenu} uk-toggle="target: #sidenav">
                <div className="uk-offcanvas-bar">
                    <ul className="uk-nav">
                        <NavLinks />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;

/*
<nav className="uk-container uk-navbar">
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active">
                <a href="#">UIKit<strong>Nav</strong></a>
            </li>
        </ul>
    </div>

    <div className="uk-navbar-right">
        <ul className="uk-navbar-nav uk-visible@s">
            <li><a className="uk-text-large" href="#">about</a></li>
            <li><a className="uk-text-large" href="#">blog</a></li>
        </ul>
        <a href="#" className="uk-navbar-toggle uk-hidden@s" uk-navbar-toggle-icon
           uk-toggle="target: #sidenav">MENU</a>
    </div>
</nav>

<div id="sidenav" uk-offcanvas="overlay: true; mode: push; flip: true"
     className="uk-offcanvas">
    <div className="uk-offcanvas-bar">
        <ul className="uk-nav">
            <li><a className="uk-text-large" href="#">about</a></li>
            <li><a className="uk-text-large" href="#">blog</a></li>
        </ul>
    </div>
</div>*/

/*
<div className="uk-position-top"
     uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 300">

    <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
        <a href="" className="uk-navbar-item uk-logo"><img src="logo.jpg"/></a>
        <div className="uk-container uk-container-expand">
            <div uk-navbar>

                <ul className="uk-navbar-nav">
                    <li>
                        <Link to="/bio">News</Link>
                    </li>
                    <li>
                        <Link to="/tour">Tour</Link>
                    </li>
                    <li>
                        <Link to="/bio">Bio</Link>
                    </li>
                    <li>
                        <Link to="/videos">Videos</Link>
                    </li>
                    <li>
                        <Link to="/images">Images</Link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

    <div id="sidenav" uk-offcanvas="overlay: true; mode: push; flip: true"
         className="uk-offcanvas">
        <div className="uk-offcanvas-bar">
            <ul className="uk-nav">
                <li><a className="uk-text-large" href="#">about</a></li>
                <li><a className="uk-text-large" href="#">blog</a></li>
            </ul>
        </div>
    </div>
</div>*/
