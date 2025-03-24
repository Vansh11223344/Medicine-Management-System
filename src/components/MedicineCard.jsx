import React from "react";
import "./MedicineCard.css";

const MedicineCard = ({ name, category, stock, usage, sideEffects, manufacturer, image }) => {
  return (
    <div className="medicine-card">
      <div className="medicine-info">
        <h3 className="medicine-name">{name}</h3>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Stock:</strong> {stock > 0 ? stock : "Out of Stock"}</p>
        <p><strong>Usage:</strong> {usage}</p>
        <p><strong>Side Effects:</strong> {sideEffects}</p>
        <p><strong>Manufacturer:</strong> {manufacturer}</p>
      </div>
      <div className="medicine-image-container">
        <img src={image} alt={name} className="medicine-image" />
      </div>
    </div>
  );
};

export default MedicineCard;
