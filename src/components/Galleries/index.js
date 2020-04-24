import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

import GALLERIES_QUERY from "../../queries/galleries";
import Query from "../Query";
import section from "../../containers/Section";

import "./index.scss";

const Galleries = () => {
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

    return (
        <div className="galleries-wrapper">
            <Query query={GALLERIES_QUERY}>
                {({ data: { galleries }}) => {
                    return galleries.length > 0 ? galleries.map(({ titre, photos }, index) => {

                        return (
                            <div key={`galleries-${index}`} className="gallerie-item">
                                <h3>{titre}</h3>
                                <div className="preview-wrapper">
                                    {photos.map((photo, index) => (
                                        <img src={photo.url} alt={`gallerie ${index}`} onClick={() => openLightbox(index)} />
                                    ))}
                                </div>
                                <ModalGateway>
                                    {viewerIsOpen ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                currentIndex={currentImage}
                                                views={photos.map(photo => ({
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
                    )
                }}
            </Query>
        </div>
    );
};

export default section(Galleries, { id:"photos", title: "PHOTOS", color: "#16181b" });
