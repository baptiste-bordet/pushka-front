import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import BANNER_QUERY from "../../queries/banner";
import Query from "../Query";

import Nav from '../Nav'

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

                        <Nav />

                    </div>
                );
            }}
        </Query>
    );
};

export default Header;
