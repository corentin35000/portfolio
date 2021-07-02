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

                        </li>

                        <li>

                        </li>

                        <li>

                        </li>

                        <li>

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