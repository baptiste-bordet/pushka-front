import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import BANNER_QUERY from "../../queries/banner";
import Query from "../Query";

const Header = () => {
    return (
        <Query query={BANNER_QUERY} id={null}>
            {({ data: { banner } }) => {
                return (
                    <div className="header">
                        {/*<img src={`${process.env.REACT_APP_BACKEND_URL}${banner.image.url}`} alt="banner-pic" />*/}

                        <div className="video-wrapper">
                            <video autoPlay id="my-video" className="video fullscreen-bg__video"  muted loop>
                                <source src="pushka-cover-2.mp4" type="video/mp4" />
                            </video>
                            <div className="video-overlay"></div>
                        </div>
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
                    </div>
                </div>
                );
            }}
        </Query>
    );
};

export default Header;
