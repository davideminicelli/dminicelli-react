import React from "react";
import "../Styles/ContactPiece.scss";

const ContactPiece = (props) => {
    return (
        <div className="contact-piece">
            <h2>{props.name}</h2>
            <address>
                <a href={props.targetLink}>{props.text}</a>
            </address>
        </div>
    )
};

export default ContactPiece