import React from "react";
import {Link} from "react-router-dom";
import "../Styles/MenuLink.scss";

const MenuLink = (props) =>  {

const text= props.text;
    
return (

<Link onClick={props.pullScript} to={props.href}>
    <li className={props.buttonStyle}>{text}</li>
</Link>
)
}


export default MenuLink;