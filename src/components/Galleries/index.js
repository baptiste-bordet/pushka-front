import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

import section from "../../containers/Section";

import "./index.scss";

const Galleries = ({ galleries }) => {
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const getLinks = (lien, nb) => {
        return [...Array(nb)].map((_, index) => ({ url: `${lien}${index + 1}.jpg` }));
    }

    return (
        <div className="galleries-wrapper">
            {galleries.length > 0 ? galleries.map(({ titre, lien, nb }, index) => {
                return (
                    <div key={`galleries-${index}`} className="gallerie-item">
                        <h3>{titre}</h3>
                        <div className="preview-wrapper">
                            {getLinks(lien, nb).map((photo, index) => (
                                <img src={photo.url} alt={`gallerie ${index}`} onClick={() => openLightbox(index)} />
                            ))}
                        </div>
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={getLinks(lien, nb).map(photo => ({
                                            ...photo,
                                            src: photo.url,
                                            srcset: photo.srcSet,
                                            caption: ''
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                )
            }) : (
                <div className="date-empty">A venir...</div>
            )}
        </div>
    );
};

export default section(Galleries, { id:"photos", title: "PHOTOS", color: "#16181b" });
