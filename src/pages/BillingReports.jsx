import React from "react";
import "./BillingReports.css";

const BillingReports = () => {
  return (
    <div className="billing-reports">
      <h2 className="reports-title">Billing & Reports</h2>
      <div className="reports-card">
        <h3>Order History</h3>
        <table className="reports-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Order ID</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>03/20/2025</td>
              <td>#12345</td>
              <td>$15.00</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingReports;