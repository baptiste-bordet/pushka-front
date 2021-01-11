import React, { useRef, useEffect, useState } from 'react';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const _loaded = {};

const SkeletonItem = () => {
    return (
        <div>Skeleton</div>
    )
}

const LazyLoadImage = ({ className, url, alt, placeholder = null, forcePreloadImage = false, onClick }) => {
    const elementRef = useRef(null);
    const [inView] = useIntersectionObserver(elementRef);
    const [loaded, setLoaded] = useState(_loaded[url]);

    useEffect(() => {
        if (inView) {
            if (_loaded[url]) {
                setLoaded(true);

                return;
            }

            const img = new Image();
            img.src = url;
            img.onload = () => {
                _loaded[url] = true;
                setLoaded(true);
            };
        }
    }, [inView, url]);

    return (
        <div ref={elementRef} className={className ? `${className}-wrapper` : null}>
            {!loaded ? (
                placeholder ? (
                    placeholder
                ) : (
                    <SkeletonItem className={className} />
                )
            ) : (
                <img src={url} className={className} alt={alt} onClick={onClick} />
            )}
            <noscript>
                <img src={url} className={className} alt={alt} />
            </noscript>
        </div>
    );
};

export default LazyLoadImage;
