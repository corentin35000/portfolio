import React from "react";
import '../CSS/Router.css';
import FormsEmail from '../Components/Home/FormsEmail';
import Carousel from '../Components/Home/Carousel';
import Cards from '../Components/Home/Cards';
import ReseauxSociaux from '../Components/Home/ReseauxSociaux';
import Competences from '../Components/Home/Competences';
import '../CSS/Router.css';
import '../CSS/Home.css';
import CV from '../PDF/CV.pdf';

export default function Home() {

    return (
        <div className="main">
            <Cards />

            <ReseauxSociaux />

            <div className="contain2">
                <div className="contain_sous01">
                    Recherche une alternance à partir de Septembre 2021.
                </div>

                <div className="contain_sous2">
                    <button style={{ marginTop: '10px' }}>
                        <a href={CV} target="_blank">
                            CV
                        </a>
                    </button>
                </div>
            </div>

            <Competences />

            <Carousel />

            <FormsEmail />
        </div>
    );

}