import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logoNavbar from '../../Images/logo_navbar.jpg';

const FooterPage = () => {

    return (
        <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4 containGlobal">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6 testtt">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                            Corentin RCZ
                        </h5>
                        <p>
                            Développeur web à Rennes. <br />
                            Création ou refonte de site internet, intégration, etc. <br />
                            Développement de jeux vidéos.
                        </p>
                    </MDBCol>

                    <MDBCol md="2">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                            LIENS UTILES
                        </h5>
                        <ul className="list-unstyled lol">
                            <li>
                                <a href="#!">À propos</a>
                            </li>
                            <li>
                                <a href="#!">Portfolio</a>
                            </li>
                            <li>
                                <a href="#!">Compétences</a>
                            </li>
                            <li>
                                <a href="#!">Me contacter</a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol md="2">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                            ME CONTACTER
                        </h5>
                        <ul className="list-unstyled lil ">
                            <li>
                                Rennes - Epitech
                            </li>
                            <li>
                                corentindevelopper@hotmail.com
                            </li>
                            <li>
                                +33 6 71 83 34 58
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className="footer-copyright text-center py-3 test3">
                <MDBContainer fluid>
                    © Copyright 2021, Corentin RCZ.
                    Tous droits réservés.
                </MDBContainer>
            </div>
        </MDBFooter>
    );

}

export default FooterPage;