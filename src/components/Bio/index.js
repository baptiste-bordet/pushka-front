import React from "react";
import Query from "../Query";

import BIO_QUERY from "../../queries/bio";

const Bio = () => {
    return (
        <div>
            <Query query={BIO_QUERY} id={null}>
                {({ data: { bio } }) => {
                    return (
                        <>
                            <p>{bio.description}</p>
                            {/*<img src={`${process.env.REACT_APP_BACKEND_URL}${bio.image.url}`} alt="bio-pic" />*/}
                        </>
                    );
                }}
            </Query>
        </div>
    );
};

export default Bio;
