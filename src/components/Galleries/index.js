import React, { useEffect, useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from 'react-images';

import GALLERIES_QUERY from "../../queries/galleries";
import Query from "../Query";
import section from "../../containers/Section";

import "./index.scss";

const Preview = ({ photos, openLightbox }) => {
    const [photoArray, setPhotoArray] = useState([]);

    useEffect(() => {
        const promises = photos.map(async (photo) => {
            const result = { src: photo.url, width: 1, height: 1 };
            const size = await getSize(photo.url);

            result.width = size.width;
            result.height = size.height;

            return result;
        });

        Promise.all(promises).then((values) => {
            setPhotoArray(values);
        })
    }, []);

    const getSize = (src) => {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve({ width: img.width, height: img.height });
            img.onerror = reject;
            img.src = src;
        })
    }

    return (
        <Gallery photos={photoArray} onClick={openLightbox} />
    )
}

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

    return (
        <div className="news-wrapper">
            <Query query={GALLERIES_QUERY}>
                {({ data: { galleries }}) => {
                    return galleries.map(({ titre, photos }, index) => {

                        return (
                            <div key={`galleries-${index}`} className="gallerie-item">
                                <h3>{titre}</h3>
                                <Preview photos={photos} openLightbox={openLightbox} />
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

export default section(Galleries, { id:"photos", title: "PHOTOS" });
