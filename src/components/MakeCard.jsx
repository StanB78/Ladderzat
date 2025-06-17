// src/MakeCard.js
import React from 'react';
import '../MakeCard.css';

function MakeCard() {
    return (
        <div className="make-card-page">
            <h2>Maak een nieuwe kaart</h2>
            <p>Welkom bij het maken van een nieuwe kaart. Voeg hier je content toe!</p>

            {/* Hier zou je een formulier kunnen toevoegen */}

            <form action="">
                <div className="form-group">
                    <label htmlFor="cardTitel">Titel van het spel:</label>
                    <input type="text" id="cardTitle" name="cardTitel" required />
                </div>

                <div className="form-group">
                    <label htmlFor="cardbeschrijving">Inhoud van het spel:</label>
                    <textarea id="cardbeschrijving" name="cardbeschrijving" required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="cardBenodigdheden">Wat heb je nodig om dit spel te spelen?</label>
                    <ul>
                        <li><label><input type="checkbox"/> Kaarten</label></li>
                        <li><label><input type="checkbox"/> Dobbelstenen</label></li>
                        <li><label><input type="checkbox"/> Pen</label></li>
                        <li><label><input type="checkbox"/> Papier</label></li>
                    </ul>
                </div> 

                <div className="form-group">
                    <label htmlFor="cardSpelers"></label>
                    <ul>
                        <li><label><input type="radio" name="woord" value="1-2"/> 1-2 spelers</label></li>
                        <li><label><input type="radio" name="woord" value="3-4"/> 3-4 spelers</label></li>
                        <li><label><input type="radio" name="woord" value="5-6"/> 5-6 spelers</label></li>
                        <li><label><input type="radio" name="woord" value="7"/> 7 of meer spelers</label></li>
                    </ul>
                </div>   

                <button type="submit" className="submit-button">Spel plaatsen</button>
            </form>
        </div>
    );
}

export default MakeCard;
