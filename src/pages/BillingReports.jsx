import React from "react";
import { FiDownload, FiPrinter, FiFilter, FiSearch, FiFileText } from "react-icons/fi";
import "./BillingReports.css";

const BillingReports = () => {
  // Sample data - in a real app this would come from API/state
  const orders = [
    { id: 12345, date: "03/20/2025", total: 15.00, status: "Completed", items: 3 },
    { id: 12344, date: "03/18/2025", total: 28.50, status: "Completed", items: 5 },
    { id: 12343, date: "03/15/2025", total: 42.75, status: "Refunded", items: 2 },
    { id: 12342, date: "03/10/2025", total: 19.99, status: "Completed", items: 4 },
    { id: 12341, date: "03/05/2025", total: 63.20, status: "Processing", items: 6 }
  ];

  const downloadBill = (orderId) => {
    console.log(`Downloading bill for order #${orderId}`);
    // In a real app, this would trigger a download
  };

  const printBill = (orderId) => {
    console.log(`Printing bill for order #${orderId}`);
    // In a real app, this would open print dialog
  };

  return (
    <div className="billing-reports">
      <header className="reports-header">
        <div className="header-content">
          <h1 className="reports-title">
            <FiFileText className="title-icon" />
            Billing & Reports
          </h1>
          <p className="reports-subtitle">View and manage your order history</p>
        </div>
        <div className="header-actions">
          <button className="export-btn">
            <FiDownload className="btn-icon" />
            Export All
          </button>
        </div>
      </header>

      <div className="reports-controls">
        <div className="search-filter">
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search orders..."
              className="search-input"
            />
          </div>
          <button className="filter-btn">
            <FiFilter className="btn-icon" />
            Filters
          </button>
        </div>
        <div className="date-range">
          <select className="date-select">
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Custom range</option>
          </select>
        </div>
      </div>

      <div className="reports-card">
        <div className="card-header">
          <h2 className="card-title">Order History</h2>
          <span className="total-orders">{orders.length} orders</span>
        </div>

        <div className="table-container">
          <table className="reports-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Order ID</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.date}</td>
                  <td>#{order.id}</td>
                  <td>{order.items} items</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="action-btn download"
                        onClick={() => downloadBill(order.id)}
                      >
                        <FiDownload />
                      </button>
                      <button 
                        className="action-btn print"
                        onClick={() => printBill(order.id)}
                      >
                        <FiPrinter />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <div className="showing-entries">
            Showing 1 to {orders.length} of {orders.length} entries
          </div>
          <div className="pagination">
            <button className="page-btn disabled">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingReports;