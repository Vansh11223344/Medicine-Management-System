import React from "react";
import "./PharmacistDashboard.css";

const PharmacistDashboard = () => {
  return (
    <div className="pharmacist-dashboard">
      <h2 className="dashboard-title">Pharmacist Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Inventory Alerts</h3>
          <p>5 medicines low in stock</p>
          <p>2 medicines nearing expiration</p>
        </div>
        <div className="dashboard-card">
          <h3>Pending Orders</h3>
          <p>3 orders awaiting fulfillment</p>
        </div>
      </div>
    </div>
  );
};

export default PharmacistDashboard;