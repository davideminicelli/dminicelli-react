import React from "react";
import "../Styles/Header.scss";
import MenuLink from "./MenuLink";

const Header = (props) => {

    return ( 
        <header>
                <main>
                    <h1>Hi, I'm <strong>Davide Minicelli</strong></h1>
                    <p id="header-subtitle">and I'm a front-end web developer.</p>
                    <div id="div-header-links">
                    <MenuLink buttonStyle="button-accent header-button" href="/portfolio" text="My work" />
                    <MenuLink buttonStyle="button-accent header-button" href="/skills" text="My Skills" />
                    </div>
                </main>
        </header>
    )
}

export default Header