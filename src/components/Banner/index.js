import React from "react";
import Query from "../Query";
import "./index.scss";

import BANNER_QUERY from "../../queries/banner";

const Banner = () => {
    return (
        <div className="banner">
            <Query query={BANNER_QUERY} id={null}>
                {({ data: { banner } }) => {
                    return (
                        <>
                            <img src={`${process.env.REACT_APP_BACKEND_URL}${banner.image.url}`} alt="banner-pic" />
                        </>
                    );
                }}
            </Query>
        </div>
    );
};

export default Banner;
