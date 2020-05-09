import React, { useState } from "react";
import "./index.scss";

import {handleTextLink, parseYoutube} from '../../utils/linkParser';
import section from "../../containers/Section";

const NewsItem = ({index, image, lienYoutube, titre, description}) => {
    return (
        <div key={`news-${index}`} className="news-item">
            <div className="media">
                {image && <img src={image} alt={`news-pic-${index}`}/>}
                {lienYoutube &&
                <iframe id="ytplayer" title="ytplayer" type="text/html" src={parseYoutube(lienYoutube)} frameBorder="0"
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
    const [displayAll, setDisplayAll] = useState(false);
    const newsArray = newsItems.reverse();

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

const NewsWrapper = ({ news }) => {
    return (
        <NewsList newsItems={news.reverse()}/>
    );
};

export default section(NewsWrapper, {id: "news", title: "NEWS", color: "#212529"});
