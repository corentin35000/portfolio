import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left test1">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                            Corentin RCZ
                        </h5>
                        <p>
                            Développeur web à Rennes. <br />
                            Création ou refonte de site internet, intégration, etc.
                            Développement de jeux vidéos.
                        </p>
                    </MDBCol>

                    <MDBCol md="2">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                            LIENS UTILES
                        </h5>
                        <ul className="list-unstyled">
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
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Rennes - Epitech</a>
                            </li>
                            <li>
                                <a href="#!">corentindevelopper@hotmail.com</a>
                            </li>
                            <li>
                                <a href="#!">+33 6 71 83 34 58</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className="footer-copyright text-center py-3 test3">
                <MDBContainer fluid>
                    © Copyright 2021, Corentin RCZ. Tous droits réservés.
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;