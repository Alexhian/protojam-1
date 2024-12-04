import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { useState } from "react";
import "./APIMap.css";
import L from "leaflet";

function Mapp() {
  const initialPosition = [51.505, -0.09];

  const [markerPosition, setMarkerPosition] = useState(initialPosition);

  const handleMarkerDrag = (event: L.DragEndEvent) => {
    const newPosition = event.target.getLatLng();
    setMarkerPosition([newPosition.lat, newPosition.lng]);
  };

  const sendLocation = () => {
    // console.log("La position du marqueur est :", markerPosition);
  };

  return (
    <section className="internet-map">
      <div className="maps">
        <MapContainer
          center={initialPosition}
          zoom={18}
          style={{ width: "100%", height: "500px" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker
            position={markerPosition}
            draggable={true}
            eventHandlers={{
              dragend: handleMarkerDrag,
            }}
          >
            <Popup>
              Report !<br />
              Missing person was last seen here!
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <button className="button" type="button" onClick={sendLocation}>
        Envoyer la localisation
      </button>
    </section>
  );
}

export default Mapp;
