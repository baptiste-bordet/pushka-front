import React from 'react';

import section from "../../containers/Section";
import {parseYoutube} from "../../utils/linkParser";

import "./index.scss";


const Videos = ({ videos }) => {
    return (
        <div className="videos-wrapper">
            {videos && videos.length > 0 ? videos.map(({titre, lien}, index) => (
                <div className="video-wrapper" key={`video-${index}`}>
                    {lien &&
                    <iframe id="ytplayer" title="ytplayer" type="text/html" src={parseYoutube(lien)}
                            frameBorder="0"
                            allowFullScreen="allowfullscreen"/>}
                    <div className="video-titre">{titre}</div>
                </div>
            )) : (
                <div className="video-empty">A venir...</div>
            )}
        </div>
    );
};

export default section(Videos, {id: "videos", title: "VIDEOS", color: "#212529"});
