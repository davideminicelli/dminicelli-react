import React, {Component} from "react";
import MainMenu from "./Components/MainMenu";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Contacts from "./Components/Contacts";
import About from "./Components/About";
import Skills from "./Components/Skills";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./Styles/main.scss";



class App extends Component  {

    
    pullMenu = (title) => {
        let menu = document.querySelector(".main-menu-container");
        menu.classList.toggle("pulled-down");
    }

    render() {

        return (
            <div id="body-div">
                <Router>
                   <MainMenu pullScript={this.pullMenu} />
                        <Switch>
                                <Route path="" exact component={Header} />
                                <Route path="/portfolio" component={Portfolio} />
                                <Route path="/contacts" component={Contacts} />
                                <Route path="/about" component={About} />
                                <Route path="/skills" component={Skills} />
                        </Switch>
                </Router>
            </div>
        )
    }
}

export default App;