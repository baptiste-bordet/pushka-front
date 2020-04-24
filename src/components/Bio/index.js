import React from "react";
import Query from "../Query";

import BIO_QUERY from "../../queries/bio";
import section from "../../containers/Section";

import "./index.scss";

const Bio = () => {
    return (
        <div className="bio-wrapper">
            <Query query={BIO_QUERY} id={null}>
                {({ data: { bio } }) => {
                    return (
                        <>
                            <div>{bio.description}</div>
                            {/*<img src={`${process.env.REACT_APP_BACKEND_URL}${bio.image.url}`} alt="bio-pic" />*/}
                            <div className="bio-members">
                                <div>Chant – Aurélien DEJEAN</div>
                                <div>Accordéon – Jérémie POTTIER</div>
                                <div>Batterie – Mathieu ALLAIN</div>
                                <div>Basse – Joffrey DESCHODT</div>
                                <div>Clavier – Christophe MAILLARD</div>
                                <div>Trompette – Charly JACQUET</div>
                            </div>
                        </>
                    );
                }}
            </Query>
        </div>
    );
};

export default section(Bio, {id: "bio", title: "BIO"});

