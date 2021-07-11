import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import '../../CSS/FormsEmail.css';

const FormsEmail = () => {

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");

    const submitForms = (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append('nom', nom);
        formData.append('email', email);
        formData.append('sujet', sujet);
        formData.append('message', message);

        let init = { method: 'POST', body: formData }

        window.fetch('http://localhost/portfolio/API/index.php', init)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <MDBContainer data-aos="flip-left" className="containerGlobal3">
            <MDBRow id="mecontacter">
                <div className="containerGlobal">
                    <form onSubmit={submitForms}>
                        <p className="h4 text-center mb-4">ME CONTACTER</p>
                        <label htmlFor="defaultFormContactNameEx" className="grey-text">
                            Votre nom
                        </label>
                        <input onChange={e => setNom(e.target.value)} type="text" id="defaultFormContactNameEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                            Votre email
                        </label>
                        <input onChange={e => setEmail(e.target.value)} type="email" id="defaultFormContactEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                            Sujet
                        </label>
                        <input onChange={e => setSujet(e.target.value)} type="text" id="defaultFormContactSubjectEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                            Votre message
                        </label>
                        <textarea onChange={e => setMessage(e.target.value)} type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
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