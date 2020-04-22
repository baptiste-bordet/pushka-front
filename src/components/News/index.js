import React, {useEffect, useState} from "react";
import "./index.scss";
import NEWS_QUERY from "../../queries/news";
import Query from "../Query";

import {handleTextLink, parseYoutube} from '../../utils/linkParser';
import section from "../../containers/Section";

const NewsItem = ({index, image, lien_youtube, titre, description}) => {
    return (
        <div key={`news-${index}`} className="news-item">
            <div className="media">
                {image && <img src={image.url} alt={`news-pic-${index}`}/>}
                {lien_youtube &&
                <iframe id="ytplayer" title="ytplayer" type="text/html" src={parseYoutube(lien_youtube)} frameBorder="0"
                        allowFullScreen="allowfullscreen"/>}
            </div>
            <div className="news-text">
                <h2>{titre}</h2>
                <div className="news-description" dangerouslySetInnerHTML={{__html: handleTextLink(description)}}/>
            </div>
        </div>
    )
}

const NewsList = ({ newsItems }) => {
    const MAX_ITEMS = 4;
    const [newsArray, setNewsArray] = useState([]);
    const [displayAll, setDisplayAll] = useState(false);

    useEffect(() => {
        setNewsArray(newsItems.reverse());
    }, []);

    return (
        <>
            {newsArray.length > 0 ? (
                <>
                    <div className="news-wrapper">
                        {newsArray.slice(0, displayAll ? newsArray.length : MAX_ITEMS).map((item, index) => (
                            <NewsItem index={index} {...item} />
                        ))}
                    </div>
                    {newsArray.length > MAX_ITEMS && (
                        <div className="display-all" onClick={() => setDisplayAll(!displayAll)}>
                            { displayAll ? "Afficher moins" : "Afficher tout" }
                        </div>
                    )}
                </>
            ) : (
                <div className="date-empty">A venir...</div>
            )}
        </>
    );
};

const NewsWrapper = () => {
    return (
        <Query query={NEWS_QUERY}>
            {({data: { newsItems }}) => <NewsList newsItems={newsItems}/>}
        </Query>
    );
};

export default section(NewsWrapper, {id: "news", title: "NEWS", color: "#212529"});
