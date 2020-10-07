import React from "react";
import MenuLink from "./MenuLink";

const MenuVoices = (props) => {
    
    const sitePages = [
        {
        name: "Home",
        href: "/"
        },
        {
        name: "Portfolio",
        href: "/portfolio"
        },
        {
        name: "Skills",
        href: "/skills"
        },
        {
        name: "About Me",
        href: "/about"
        },
        {
        name: "Contacts",
        href: "/contacts"
        }];


    const PopulatedMenu = sitePages.map( singlePage => {
    return <MenuLink pullScript={props.pullScript} buttonStyle="button-main" href={singlePage.href} text={singlePage.name} />
    });

    return (
        PopulatedMenu
    );
}

export default MenuVoices