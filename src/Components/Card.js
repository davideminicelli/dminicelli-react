import React from 'react';



const Card = (props) => {
    


    return (
        <div className="single-work-card">
                    <h2 className="title">{props.name}</h2>
                    <img className="work-image" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
                    <p>{props.description}</p>
                    <p className="tech-paragraph">Technologies used: {props.tech.join(", ")}</p>
                    <a className= "work-out-link" href={props.address} rel="noopener noreferrer" target="_blank">Visit {props.name}</a>
        </div>
    )
}



export default Card