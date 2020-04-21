import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from 'react-images';

import GALLERIES_QUERY from "../../queries/galleries";
import Query from "../Query";
import section from "../../containers/Section";

import "./index.scss";

const Galleries = () => {
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [photoArray, setPhotoArray] = useState([]);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const buildPhotoArray = (photos) => {
        if (photoArray.length === 0) {
            setPhotoArray(photos.map((photo) => {
                const result = { src: photo.url, width: 1, height: 1 };
                const img = new Image();

                img.src = photo.url;
                img.onload = function() {
                    result.width = this.width;
                    result.height = this.height;
                }

                return result;
            }));
        }
    }

    return (
        <div className="news-wrapper">
            <Query query={GALLERIES_QUERY}>
                {({ data: { galleries }}) => {
                    return galleries.map(({ titre, photos }, index) => {
                        buildPhotoArray(photos);

                        return (
                            <div key={`galleries-${index}`} className="gallerie-item">
                                <h3>{titre}</h3>
                                <Gallery photos={photoArray} onClick={openLightbox} />
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
                    })
                }}
            </Query>
        </div>
    );
};

export default section(Galleries, { id:"photos", title: "PHOTOS", color: "#242526" });
