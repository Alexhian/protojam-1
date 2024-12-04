import type React from "react";
import { useState } from "react";
import "./formulaire.css";

// on initialise la const pour chaque champ du formulaire
const Formulaire = () => {
  const [info, setInfo] = useState({
    nom: "",
    prenom: "",
    zoneDisparition: "",
    details: "",
  });

  // on met à jour l'état pour les changements
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // soumission formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="bloc-formulaire">
        <h2>SIGNALEMENTS</h2>
        <div className="champs">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={info.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="champs">
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={info.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="champs">
          <label htmlFor="zoneDisparition">Zone de disparition :</label>
          <textarea
            id="zoneDisparition"
            name="zoneDisparition"
            value={info.zoneDisparition}
            onChange={handleChange}
            required
          />
        </div>
        <div className="champs">
          <label htmlFor="details">Détails :</label>
          <textarea
            id="details"
            name="details"
            value={info.details}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="envoi-button">
          Envoyer
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg viewBox="-0.5 -0.5 16 16" fill="#000000" xmlns="http://www.w3.org/2000/svg" id="Arrow-Right-Circle-Line--Streamline-Remix" height="16" width="16"><desc>Arrow Right Circle Line Streamline Icon: https://streamlinehq.com</desc><path d="M7.5 6.875V5l2.5 2.5 -2.5 2.5v-1.875H5v-1.25h2.5Zm0 -5.625c3.4499999999999997 0 6.25 2.8000000000000003 6.25 6.25s-2.8000000000000003 6.25 -6.25 6.25S1.25 10.95 1.25 7.5 4.050000000000001 1.25 7.5 1.25Zm0 11.25c2.7625 0 5 -2.2375 5 -5s-2.2375 -5 -5 -5 -5 2.2375 -5 5 2.2375 5 5 5Z" strokeWidth="1"></path></svg>
      </button>
      </div>
      
    </form>
  );
};

export default Formulaire;
