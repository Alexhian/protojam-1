import "./App.css";
// import Mapp from "./components/APIMap";
import CarrousselSurvivants from "./components/CarrousselSurvivants";
import Header from "./components/Header";
// import Maps from "./components/Maps";
import Navbar from "./components/Navbar";
import Sos from "./components/Sos";
import Formulaire from "./components/formulaire";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container_components">
        <CarrousselSurvivants />
        <Sos />
        <Formulaire />
      </div>
    </>
  );
}

export default App;
