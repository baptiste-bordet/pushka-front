import React from "react";
import "./index.scss";
import NEWS_QUERY from "../../queries/news";
import Query from "../Query";

import "./index.scss";

const News = () => {
    return (
        <div className="news-wrapper">
            <Query query={NEWS_QUERY}>
                {({ data: { newsItems }}) => {
                    return newsItems.map(({ titre, description, lien_youtube, image }, index) => {
                        return (
                            <div key={`news-${index}`} className="news-item">
                                {image && <img src={`${process.env.REACT_APP_BACKEND_URL}${image.url}`} alt={`news-pic-${index}`} />}
                                {lien_youtube && <p>{lien_youtube}</p>}
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
    );
};

export default News;
