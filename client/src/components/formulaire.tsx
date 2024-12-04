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
        <h1>SIGNALEMENTS</h1>
        <div>
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
        <div>
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
        <div>
          <label htmlFor="zoneDisparition">Zone de disparition :</label>
          <textarea
            id="zoneDisparition"
            name="zoneDisparition"
            value={info.zoneDisparition}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="details">Détails :</label>
          <textarea
            id="details"
            name="details"
            value={info.details}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="envoi-button">
        <img
          src="../public/enveloppe.png"
          alt="enveloppe"
          className="enveloppe"
        />
      </button>
    </form>
  );
};

export default Formulaire;
