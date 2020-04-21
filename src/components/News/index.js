import React from "react";
import "./index.scss";
import NEWS_QUERY from "../../queries/news";
import Query from "../Query";

import { parseYoutube } from '../../utils/linkParser';

import "./index.scss";

const News = () => {
    return (
        <div id="news" className="section-wrapper">
            <h2 className="section-title">NEWS</h2>
            <div className="news-wrapper">
                <Query query={NEWS_QUERY}>
                    {({ data: { newsItems }}) => {
                        return newsItems.map(({ titre, description, lien_youtube, image }, index) => {
                            return (
                                <div key={`news-${index}`} className="news-item">
                                    {image && <img src={image.url} alt={`news-pic-${index}`} />}
                                    {lien_youtube && <iframe id="ytplayer" type="text/html" src={parseYoutube(lien_youtube)} frameBorder="0" allowfullscreen="allowfullscreen"/>}
                                    <div className="news-text">
                                        <h2>{titre}</h2>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }}
                </Query>
            </div>
        </div>
    );
};

export default News;
