import React from 'react';

import VIDEOS_QUERY from "../../queries/videos";
import Query from "../Query";
import section from "../../containers/Section";
import {parseYoutube} from "../../utils/linkParser";

import "./index.scss";


const Videos = () => {
    return (
        <div className="videos-wrapper">
            <Query query={VIDEOS_QUERY}>
                {({data: {videos}}) => {
                    return videos && videos.length > 0 ? videos.map(({titre, lien_youtube}, index) => (
                        <div className="video-wrapper">
                            {lien_youtube &&
                            <iframe id="ytplayer" title="ytplayer" type="text/html" src={parseYoutube(lien_youtube)}
                                    frameBorder="0"
                                    allowFullScreen="allowfullscreen"/>}
                            <div className="video-titre">{titre}</div>
                        </div>
                    )) : (
                        <div className="video-empty">A venir...</div>
                    )
                }}
            </Query>
        </div>
    );
};

export default section(Videos, {id: "videos", title: "VIDEOS", color: "#212529"});
