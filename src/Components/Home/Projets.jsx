import React from "react";
import tileMapEditor from '../../Videos/tileMapEditor.mkv';
import tileMapEditor2 from '../../Videos/tileMapEditor.mp4';
import '../../CSS/Projets.css';

export default function Projets() {

    return (
        <div data-aos="fade-up"
             data-aos-duration="3000" style={{ textAlign: 'center', marginTop: '80px' }} id="portfolio">
            <div className="titre3">MES PROJETS :</div> <br />

            <h5 style={{ fontWeight: 'bold' }}>
                Développement d'un moteur de jeu vidéo en Lua/LÖVE2D en pur code. <br />
                (Encore en cours de développement)
            </h5>
            <video className="containerGlobal5" controls poster="" width="600">
                <source src={ tileMapEditor2 } />
                <source src={ tileMapEditor } />
            </video>
            <p style={{ marginTop: '20px' }}>
                Développement en pur code en Lua, j'utilise simplement la GameLoop de LÖVE2D. <br />
                Ainsi qu'une fonction draw pour afficher une image, tout le reste est de l'algorithmie.
            </p>
        </div>
    );

}