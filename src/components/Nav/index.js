import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Nav = () => {
    return (
        <div>
            <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                <div className="uk-navbar-center">
                    <a href="" className="uk-navbar-item uk-logo"><img src="logo.jpg"/></a>
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to="/bio">Bio</Link>
                        </li>
                        <li>
                            <Link to="/tour">Tour</Link>
                        </li>
                        <li>
                            <Link to="/videos">Videos</Link>
                        </li>
                        <li>
                            <Link to="/images">Images</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
