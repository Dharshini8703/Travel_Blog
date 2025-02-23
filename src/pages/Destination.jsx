import React from "react";
import { places } from "../data/placeData";

const Destination = () => {
  return (
    <div className="hero" 
    style={{display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        top: 900,}}>
      <h2>Explore Tamil Nadu</h2>
      {places.map((place) => (
        <div key={place.id} style={{ marginBottom: "20px", textAlign: "center", color: '#000' }}>
          <h3>{place.name}</h3>
          <p>{place.description}</p>
          <p><strong>Location:</strong> {place.location}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", color: '#000' }}>
            {place.images.map((image, index) => (
              <img key={index} src={image} alt={place.name} width="300px" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destination;
