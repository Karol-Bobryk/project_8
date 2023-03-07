import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const getPlaces = () => {
    const searchQuery = "cafes";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiKey = "AIzaSyAhdjzesX4A_FSVow1BGPfym7aoisYlNdU";
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${apiKey}`;
    fetch(proxyUrl + url, {
      headers: { "x-cors-api-key": "temp_7a2060f8fe0ad6be89681e995a37890f" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <div className="App">
      <button onClick={getPlaces}>AAAAAAAAAAA</button>
    </div>
  );
}

export default App;
