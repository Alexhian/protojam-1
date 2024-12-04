import SearchBar from "./SearchBar";
import"./Navbar.css";

function Navbar() {
  return (
    <section className="Navbar">
      <h2 className="h2">
        Face à des situations d’urgence et de chaos, la communication et l’accès
        à l’information sont essentiels pour la survie et la reconstruction.
        Vous pouvez ici retrouver des survivants et personnes disparues, appeler les secours, vous repérer et signaler des personnes disparues.
      </h2>
      <h2>TROUVER UN SURVIVANT</h2>
      <SearchBar />
    </section>
  );
}

export default Navbar;
