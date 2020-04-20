import React from "react";
import Query from "../Query";

import BIO_QUERY from "../../queries/bio";

const Bio = () => {
    return (
        <div className="section-wrapper">
            <h2 className="section-title">BIO</h2>
            <Query query={BIO_QUERY} id={null}>
                {({ data: { bio } }) => {
                    return (
                        <>
                            <div>{bio.description}</div>
                            {/*<img src={`${process.env.REACT_APP_BACKEND_URL}${bio.image.url}`} alt="bio-pic" />*/}
                        </>
                    );
                }}
            </Query>
        </div>
    );
};

export default Bio;
