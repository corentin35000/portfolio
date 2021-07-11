import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import FooterPage from './Components/BaliseSemantique/FooterPage';
import './CSS/Router.css';
import logoNavbar from './Images/logo_navbar.jpg';
import MenuMobile from './Components/Home/MenuMobile';

export default function App() {

    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="container1">
                    <img src={ logoNavbar } width="50" height="62" alt="My Logo"/>
                </div>

                <div className="container2">
                    <ul>
                        <li>
                            <a href="#apropos">À propos</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#competences">Compétences</a>
                        </li>
                        <li>
                            <a href="#mecontacter">Me contacter</a>
                        </li>
                    </ul>
                </div>

                <div className="container3">
                    <MenuMobile />
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

            <FooterPage />
        </BrowserRouter>
    );

}