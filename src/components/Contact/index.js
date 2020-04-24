import React from 'react';
import section from "../../containers/Section";

import "./index.scss";

const Contact = () => {
    return (
        <div className="contact-wrapper">
            Booking / Presse : contact@pushka.live
        </div>
    );
};

export default section(Contact, { id:"contact", title: "CONTACT", color: "#16181b" });
