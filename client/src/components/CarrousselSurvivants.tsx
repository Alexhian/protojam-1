import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./CarousselSurvivants.css";

interface User {
  picture?: {
    large: string;
  };
  name?: {
    first: string;
    last: string;
  };
}

function CarrousselSurvivants() {
  const people = useLoaderData() as User[];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // if (!people || !Array.isArray(people) || people.length === 0) {
  //   return <div>Chargement...</div>;
  // }

  const photos = people
    .map((user) => user.picture?.large)
    .filter((photo) => photo !== undefined);

  const firstName = people
    .map((user) => user.name?.first)
    .filter((name) => name !== undefined);

  const lastName = people
    .map((user) => user.name?.last)
    .filter((name) => name !== undefined);

  // if (photos.length === 0) {
  //   return <div>Aucune photo disponible.</div>;
  // }

  const imageSuivante = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const imagePrecedente = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length,
    );
  };

  return (
    <>
      <div className="carrousel-container">
        <h2>CAROUSSEL DES SURVIVANTS </h2>
        <div className="carrousel">
          <div className="carroussel2">
            <button
              type="button"
              className="bouton-precedent"
              onClick={imagePrecedente}
            >
              {"<"}
            </button>
            <div className="image-container">
              <h3>{firstName[currentIndex]}</h3>
              <h3>{lastName[currentIndex]}</h3>
              <img
                src={photos[currentIndex]}
                alt={`Survivant ${currentIndex + 1}`}
              />
            </div>
            <button
              type="button"
              className="bouton-suivant"
              onClick={imageSuivante}
            >
              {">"}
            </button>
          </div>
          <button className="carroussel-button" type="button">
            ENVOYER UN MESSAGE
          </button>
        </div>
      </div>
    </>
  );
}

export default CarrousselSurvivants;
