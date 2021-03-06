import React from "react";
import MenuLink from "./MenuLink";
import MenuVoices from "./MenuVoices";
import "../Styles/MainMenu.scss"

const MainMenu = (props) => {

    return (
    <nav className="main-menu-container">
        <ul > 
            <MenuLink  pullScript={props.pullScript} href="/" buttonStyle="button-accent" text="Davide Minicelli" ident="dave-button"/>        
            <MenuVoices pullScript={props.pullScript} />
            <button type="button" onClick={props.pullScript} className="button-main" id="mobile-menu-caller">Menu</button>
        </ul>
    </nav>
    )
}

export default MainMenu