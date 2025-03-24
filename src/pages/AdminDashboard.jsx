import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p>150</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Orders</h3>
          <p>75</p>
        </div>
        <div className="dashboard-card">
          <h3>Revenue</h3>
          <p>$12,500</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;