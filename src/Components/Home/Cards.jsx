import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../../CSS/Cards.css';
import photoProfil from '../../Images/photo_profil.jpg';

export default function Cards() {
    return (
        <div data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="1500" className="containerGlobal" id="apropos">
            <MDBCard className="container11">
                <MDBRow className='g-0 container22'>
                    <MDBCol md='4'>
                        <MDBCardImage style={{ maxWidth: '160px' }} src={ photoProfil } alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardTitle>RECANZONE Corentin</MDBCardTitle>
                            <MDBCardText>
                                Bonjour, je m'appelle Corentin et j'habite à Rennes. <br />
                                Passionnée de programmation depuis l'âge de 12 ans. <br />
                                J'ai décidé de reprendre les études pour vivre de ma passion.<br />
                                Je suis actuellement en formation à la Web @cadémie à Epitech Rennes.<br />
                                Curieux d'apprendre et motiver. <br /> <br />

                                Création ou refonte de site internet, intégration, etc. <br />
                                Développement de jeux vidéos.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </div>
    );
}