import React from "react";
import "../Styles/Skillset.scss";


const Skillset = (props) => {

    const list = props.skillList.map(
    singleSkill => {return <li>{singleSkill}</li>}
    )

    return (
    <div className="skill-card">
    	<h2>{props.setName}</h2>
    	    <ul>
                {list}
    	    </ul>
    </div>
    )
}


export default Skillset