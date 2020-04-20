const parseYoutube = (link) => {
    let code;

    // https://youtu.be/ybTQJjYwO-Y
    if (link.includes('youtu.be')) {
        const splitLink = link.split('/');
        code = link.split('/')[splitLink.length - 1];
    }

    // https://www.youtube.com/watch?v=ybTQJjYwO-Y&feature=youtu.be&rel=0
    if (link.includes('watch?')) {
        const splitLink = link.split('=');

        if (splitLink && splitLink.length > 0) {
            code = splitLink.split('&')[0];
        }
    }

    // => https://www.youtube.com/embed/ybTQJjYwO-Y
    return !code ? link : `https://www.youtube.com/embed/${code}`
}


export {
    parseYoutube
}
