import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';

const ReseauxSociaux = () => {
    return (
        <div className="contain0">
            <div className="contain_sous0">
                Rejoignez-moi sur les réseaux sociaux !
            </div>

            <div className="contain_sous1">
                <MDBContainer>
                    <MDBBtn href="https://github.com/corentin35000?tab=repositories" target="_blank" size="lg" tag="a" floating social="git">
                        <MDBIcon style={{ backgroundColor: 'black' }} fab icon="github" />
                    </MDBBtn>
                    <MDBBtn href="https://fr.linkedin.com/in/corentin-recanzone-a086a91bb" target="_blank" size="lg" tag="a" floating social="li">
                        <MDBIcon style={{ backgroundColor: '#0082ca' }} fab icon="linkedin-in" />
                    </MDBBtn>
                </MDBContainer>
            </div>
        </div>
    );
}

export default ReseauxSociaux;