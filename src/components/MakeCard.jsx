// src/MakeCard.js
import React from 'react';
import '../MakeCard.css';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

function MakeCard() {
    const [titel, setTitel] = useState("");
    const [beschrijving, setBeschrijving] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Titel:", titel);
    console.log("Beschrijving:", beschrijving);
    setLoading(true);
    try {
        await addDoc(collection(db, "posts"), {
        titel: titel,
        beschrijving: beschrijving,
        createdAt: new Date(),
    });
    alert("Post succesvol geplaatst!");
    setTitel("");
    setBeschrijving("");
    } catch (error) {
        console.error("Error adding post:", error);
        alert("Er ging iets mis, probeer opnieuw.");
    } finally {
        setLoading(false);
    }
    };

    return (
        <div className="make-card-page">
            <h2>Maak een nieuwe kaart</h2>
            <p>Welkom bij het maken van een nieuwe kaart. Voeg hier je content toe!</p>

            <form action="">
                <div className="form-group">
                    <label id="titel">Titel van het spel:
                    <input type="text" value={titel} name="titel" onChange={(e) => setTitel(e.target.value)} required />
                    </label>
                </div>  

                <div className="form-group">
                    <label id="beschrijving">Inhoud van het spel:
                    <textarea value={beschrijving} name="beschrijving"  onChange={(e) => setBeschrijving(e.target.value)} required></textarea>
                    </label>
                </div>
                <button type="submit" disabled={loading} className="submit-button" onClick={handleSubmit}>{loading ? "Plaatsen..." : "Plaats post"}</button>
            </form>
        </div>
    );
}

export default MakeCard;
