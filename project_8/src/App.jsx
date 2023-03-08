import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [places, setPlaces] = useState([]);
  const getPlaces = () => {
    const url = "http://localhost:5000/api";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlaces(data.results))
      .catch((error) => console.error(error));
  };
  return (
    <div className="App">
      {places.map(
        (place, key) =>
          place && (
            <div key={key}>
              <img src={place.icon} />
              <p>{place.name}</p>
              <p>Address: {place.formatted_address}</p>
            </div>
          )
      )}
      <button onClick={getPlaces}>Download cafes</button>
    </div>
  );
}

export default App;
