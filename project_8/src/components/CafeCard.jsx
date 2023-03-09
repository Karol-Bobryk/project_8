import React from "react";
import "./../App.css";

const CafeCard = ({ icon, name, formatted_address, geometry }) => {
  return (
    <div className="Card">
      <img src={icon} />
      <p>{name}</p>
      <p>Address: {formatted_address}</p>
      <a
        href={`https://maps.google.com/?q=${geometry.location.lat},
        ${geometry.location.lng}`}
        className="map_Button"
      >
        Show me on the map
      </a>
    </div>
  );
};
export default CafeCard;
