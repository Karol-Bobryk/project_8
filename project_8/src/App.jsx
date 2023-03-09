import { useState } from "react";
import CafeCard from "./components/CafeCard";
import "./App.css";

function App() {
  const [places, setPlaces] = useState([]);
  const getPlaces = () => {
    const url = "http://localhost:5000/api";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data.results);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="App">
      <div>
        {places.map(
          (place) => place && <CafeCard key={place.place_id} {...place} />
        )}
        <button onClick={getPlaces}>Download cafes</button>
      </div>
    </div>
  );
}

export default App;
