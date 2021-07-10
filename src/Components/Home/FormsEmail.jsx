import React from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import '../../CSS/FormsEmail.css';

const FormsEmail = () => {
    return (
        <MDBContainer>
            <MDBRow id="mecontacter">
                <div className="containerGlobal">
                    <form>
                        <p className="h4 text-center mb-4">ME CONTACTER</p>
                        <label htmlFor="defaultFormContactNameEx" className="grey-text">
                            Votre nom
                        </label>
                        <input type="text" id="defaultFormContactNameEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                            Votre email
                        </label>
                        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                            Sujet
                        </label>
                        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                            Votre message
                        </label>
                        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                        <div className="text-center mt-4">
                            <MDBBtn color="warning" outline type="submit">
                                Envoyer
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                        </div>
                    </form>
                </div>
            </MDBRow>
        </MDBContainer>
    );
};

export default FormsEmail;