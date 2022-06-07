import React, { useState } from "react";
import "./index.scss";

import {handleTextLink, parseYoutube} from '../../utils/linkParser';
import section from "../../containers/Section";
import SkeletonImage from "../SkeletonImage";
import LazyLoadImage from "../LazyLoadImage/LazyLoadImage";

const NewsItem = ({index, image, lienYoutube, titre, description}) => {
    return (
        <div key={`news-${index}`} className="news-item">
            <div className="media">
                {image &&
                    <LazyLoadImage
                        url={image}
                        alt={`news image ${index}`}
                        placeholder={<SkeletonImage />} />
                }
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
    const newsArray = [...newsItems].reverse();

    return (
        <>
            {newsArray.length > 0 ? (
                <>
                    <div className="news-wrapper">
                        {newsArray.slice(0, displayAll ? newsArray.length : MAX_ITEMS).map((item, index) => (
                            <NewsItem index={index} {...item} key={`news-${index}`} />
                        ))}
                    </div>
                    {newsArray.length > MAX_ITEMS && (
                        <span className="display-all" role="button" onClick={() => setDisplayAll(!displayAll)}>
                            { displayAll ? "Afficher moins" : "Afficher tout" }
                        </span>
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
      <>
        <p className="main-news">Comme tous les groupes de musique ce que nous aimons c’est exporter nos productions, partager nos créations. Nous dégageons notre énergie en live ! Cette période de restriction nous met donc dans une situation d’emmagasinement d’énergie explosive à revendre ; nous sommes boostés comme jamais !
          Mais pour cela nous avons besoin de salles ou de festivals nous permettant de jouer ! Alors si notre musique vous plaît n’hésitez donc pas à nous contacter, vous ne le regretterez très probablement pas !</p>
        <NewsList newsItems={news.reverse()}/>
      </>
    );
};

export default section(NewsWrapper, {id: "news", title: "NEWS", color: "#212529"});
