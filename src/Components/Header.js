import React from "react";
import "../Styles/Header.scss";
import MenuLink from "./MenuLink";

const Header = (props) => {

    return (
        <header>
            {/* <div id="header-wrapper"> */}
                <h1>Hi, I'm <strong>Davide Minicelli</strong></h1>
                {/* <br /> */}
                <p id="header-subtitle">and I'm a front-end web developer.</p>
                <div id="div-header-links">
                <MenuLink buttonStyle="button-accent header-button" href="/portfolio" text="My work" />
                <MenuLink buttonStyle="button-accent header-button" href="/skills" text="My Skills" />
                </div>
                {/* <a href="#portfolio-section">see my Github repos</a> */}
            {/* </div> */}
        </header>
    )
}

export default Header