import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons'
import "./index.scss";

import "./index.scss";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="media-wrapper">
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
                <div>
                    <a href="https://open.spotify.com/artist/1qZ8JvrCPmt7huk9dg6Ukn" target="_blank">
                        <FontAwesomeIcon icon={faSpotify} size="2x" color="#FFFFFF"/>
                    </a>
                </div>
                <div className="deezer">
                    <a href="https://www.deezer.com/fr/artist/13476487" target="_blank">
                        <img src="./deezer-icon.png" alt="logo deezer"/>
                    </a>
                </div>
            </div>
            <div className="copyright">© Pushka - 2020</div>
        </div>
    );
};

export default Footer;
