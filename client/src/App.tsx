import "./App.css";
import Mapp from "./components/APIMap";
import CarrousselSurvivants from "./components/CarrousselSurvivants";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sos from "./components/Sos";
import Formulaire from "./components/formulaire";

function App() {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <body className="container_components">
        <CarrousselSurvivants />
        <Sos />
        <Formulaire />
        <Mapp />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
