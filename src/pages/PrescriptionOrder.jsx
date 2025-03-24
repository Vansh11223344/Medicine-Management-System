import React from "react";
import "./PrescriptionOrder.css";

const PrescriptionOrder = () => {
  return (
    <div className="prescription-order">
      <h2 className="order-title">Prescription & Order</h2>
      <div className="order-card">
        <h3>Current Order</h3>
        <ul className="order-list">
          <li>
            <span>Paracetamol (2 tablets)</span>
            <span>$5.00</span>
          </li>
        </ul>
        <button className="order-button">Place Order</button>
      </div>
    </div>
  );
};

export default PrescriptionOrder;