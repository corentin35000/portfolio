import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import FooterPage from './Components/BaliseSemantique/FooterPage';
import './CSS/Router.css';
import logoNavbar from './Images/logo_navbar.jpg';

export default function App() {

    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="container1">
                    <img src={ logoNavbar } alt="My Logo"/>
                </div>

                <div className="container2">
                    <ul>
                        <li>
                            <a href="#">À propos</a>
                        </li>

                        <li>
                            <a href="#">PortFolio</a>
                        </li>

                        <li>
                            <a href="#">Compétences</a>
                        </li>

                        <li>
                            <a href="#">Me contacter</a>
                        </li>
                    </ul>
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