import React from "react";
import Card from "./Card";
import"../Styles/Portfolio.scss";


const Portfolio = () => {



    let works =[
        {"workID": "card-work-bite",
        "name": "Bite Italian",
        "description": `Bite Italian is a prototype for a language learning website, created to promote
            a new way of teaching italian, based on a cultural rather than classic grammatical approach. The
            website is still being reviewed by the client, so it still only exist as a prototype on this website.`,
        "tech": ["HTML", "CSS", "Javascript ES6"],
        "image": "/images/bite-italian.jpg",
        "URL":"https://davideminicelli.github.io/BiteItalian/"
        },
        
        {"workID": "card-work-rosi",
        "name": "Rosi Immobiliare",
        "description": `Rosi Immobiliare is a young estate agent website in southern Italy which has already established
        itself as a big name in the region of Calabria.`,
        "tech": ["Wordpress", "CSS"],
        "image": "/images/rosi-immobiliare.jpg",
        "URL":"https://rosiimmobiliare.it/"
        },

        {"workID": "card-work-navigator",
        "name": "MTG Navigator",
        "description": `Personal Project - This Website is made with the intention of sorting and digitalizing a Magic the
        Gathering card collection.

        It's made in React, and it uses the MTG API to get card names, colors, mana cost, etc.
        
        a new function will be added soon that will allow the user to login and store those cards in a Database`,
        "tech": ["React", "HTML", "CSS", "Javascript ES6"],
        "image": "/images/navigator.jpg",
        "URL":"https://davideminicelli.github.io/magic/"
        },
    ];


    
    const allWorks = works.map (
        singleWork => {
            return <Card address={singleWork.URL} image={singleWork.image} key={`workKey${singleWork.workID}`} name={singleWork.name} description={singleWork.description} tech={singleWork.tech} ident={singleWork.workID} />
        }
    )

    return (
        <section id="portfolio-section">
            <h1>Portfolio</h1>     
            <main id="works-container">
                {allWorks}
            </main>
        </section>
    )
}


export default Portfolio