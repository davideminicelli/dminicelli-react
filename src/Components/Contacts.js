import React from "react";
import ContactPiece from "./ContactPiece";
import "../Styles/Contacts.scss";

const Contacts = () => {

    const contactsObject = [
        {
        "name": "Phone",
        "text": "+44 7535 867 090",
        "link": "tel:+447535867090"
        },
        {
        "name": "Email",
        "text": "davide.minicelli@gmail.com",
        "link": "mailto:davide.minicelli@gmail.com"
        },
        {
        "name": "Linkedin",
        "text": "Davide Minicelli - Linkedin",
        "link": "https://www.linkedin.com/in/davide-minicelli-304612163/"
        }
    ];

    const contactsList = contactsObject.map( singleObject => {
        return (
            <ContactPiece name={singleObject.name} text={singleObject.text} targetLink={singleObject.link} />
        )
    })

    return (
        <section id="contacts-section">
            <h1>Contacts</h1>
                {contactsList}
        </section>
    )
}

export default Contacts