import React from "react";
import "./index.scss";

const section = (Children, { id, title, color, direction}) => (props) => {
    const className = direction ? `section-wrapper ${direction}` : 'section-wrapper';

    return (
        <div id={id} className={className} style={{backgroundColor: color}}>
            <h2 className="section-title">{title}</h2>
            <Children {...props} />
        </div>
    );
};

export default section;
