import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import "./index.scss";

import "./index.scss";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div>
                <a href="https://www.facebook.com/Pushka44/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} size="2x" color="#FFFFFF"/>
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/pushka44officiel/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#FFFFFF"/>
                </a>
            </div>
            <div>
                <a href="https://www.youtube.com/channel/UCsj1kFEbxZQTRqoTg5-HOHw" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} size="2x" color="#FFFFFF"/>
                </a>
            </div>
        </div>
    );
};

export default Footer;
