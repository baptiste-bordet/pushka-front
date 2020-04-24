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

// [Mon lien](https://youtu.be/ybTQJjYwO-Y)
// => <a href="https://youtu.be/ybTQJjYwO-Y">Mon lien</a>
const handleTextLink = (text) => {
    const regex = RegExp('\\[.*?\\]\\(.*?\\)','g');

    return text.replace(regex, (elem) => {
        const link = elem.split('(')[1].split(')')[0];
        const display = elem.split('[')[1].split(']')[0];

        return `<a target="_blank" rel="noopener noreferrer" href="${link}">${display}</a>`;
    });
}

export {
    parseYoutube,
    handleTextLink
}
