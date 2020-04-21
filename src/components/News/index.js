import React from "react";
import "./index.scss";
import NEWS_QUERY from "../../queries/news";
import Query from "../Query";

import { parseYoutube, handleTextLink } from '../../utils/linkParser';

import "./index.scss";
import section from "../../containers/Section";

const News = () => {
    return (
        <div className="news-wrapper">
            <Query query={NEWS_QUERY}>
                {({ data: { newsItems }}) => {
                    return newsItems.map(({ titre, description, lien_youtube, image }, index) => {
                        return (
                            <div key={`news-${index}`} className="news-item">
                                {image && <img src={image.url} alt={`news-pic-${index}`} />}
                                {lien_youtube && <iframe id="ytplayer" title="ytplayer" type="text/html" src={parseYoutube(lien_youtube)} frameBorder="0" allowfullscreen="allowfullscreen"/>}
                                <div className="news-text">
                                    <h2>{titre}</h2>
                                    <div className="news-description" dangerouslySetInnerHTML={{__html: handleTextLink(description)}} />
                                </div>
                            </div>
                        )
                    })
                }}
            </Query>
        </div>
    );
};

export default section(News, { id:"news", title: "NEWS", color: "#212529" });
