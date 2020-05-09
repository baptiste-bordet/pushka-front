import React, { useEffect, useState } from "react";
import "./index.scss";
import CONCERTS_QUERY from "../../queries/concerts";
import Query from "../Query";

import section from "../../containers/Section";

import "./index.scss";
import data from "../../data/data.yaml";

const MONTHS = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre'
]

const Dates = ({ dates }) => {
    return (
        <div className="date-wrapper">
            {dates.length > 0 ? dates.map(({ date, nom, lieu, lien }, index) => {
                    return (
                        <div key={`date-${index}`} className="date">
                            <div className="date-date">
                                <div className="day">{date.split('/')[0]}</div>
                                <div className="date-rest">
                                    <div className="month">{MONTHS[parseInt(date.split('/')[1]) - 1]}</div>
                                    <div className="year">{date.split('/')[2]}</div>
                                </div>
                            </div>
                            {nom && <div className="nom">{nom}</div>}
                            {lieu && <div>{lieu}</div>}
                            {lien && <div>{lien}</div>}
                        </div>
                    )
                }) : (
                    <div className="date-empty">A venir...</div>
                )
            }
        </div>
    );
};

export default section(Dates, { id:"dates", title: "DATES", color: "#16181b" });
