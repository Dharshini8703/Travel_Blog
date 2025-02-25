import React, { useState } from "react";
import { places } from "../data/placeData";
import ExploreIcon from "@mui/icons-material/Explore";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Destination = () => {
  return (
    <div className="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "50px",
        maxWidth: "100%",
        marginTop: "80px",

      }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
        Explore Tamil Nadu
      </h2>

      <div 
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "90vw",
        }}
      >
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

const PlaceCard = ({ place }) => {
  const [showMore, setShowMore] = useState(false);
  const shortDescription = place.description.slice(0, 60) + "..."; 

  return (
    <div 
      style={{
        width: "350px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        padding: "10px",
        textAlign: "center",
        transition: "transform 0.3s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {place.images.length > 0 && (
        <img 
          src={place.images[0]} 
          alt={place.name} 
          style={{
            width: "100%", 
            height: "130px",
            borderRadius: "5px",
            objectFit: "cover",
          }}
        />
      )}

      <h3 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "5px", display: "flex", alignItems: "center", justifyContent: "start", gap: "5px" }}>
        <ExploreIcon style={{ fontSize: "16px", color: "#555" }} />
        {place.name}
      </h3>
      <p style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "5px", display: "flex", alignItems: "center", justifyContent: "start", gap: "5px" }}>
        <LocationOnIcon style={{ fontSize: "16px", color: "#555" }} />
        {place.location}
      </p>
      <p style={{ fontSize: "12px", color: "#555", marginBottom: "5px" }}>
        {showMore ? place.description : shortDescription}
      </p>
      <button 
        onClick={() => setShowMore(!showMore)}
        style={{ 
          fontSize: "12px", 
          color: "#555", 
          cursor: "pointer", 
          border: "none", 
          background: "none",
          fontWeight: "bold",
          textDecoration: "underline"
        }}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Destination;
