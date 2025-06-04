import React from "react";
import { FiPackage, FiPlusCircle, FiCheckCircle, FiChevronRight } from "react-icons/fi";
import "./PrescriptionOrder.css";

const PrescriptionOrder = () => {
  // Sample data - in a real app this would come from API/state
  const currentOrder = [
    { id: 1, name: "Paracetamol 500mg", quantity: "2 tablets", price: 5.00 },
    { id: 2, name: "Ibuprofen 200mg", quantity: "1 tablet", price: 3.50 },
    { id: 3, name: "Vitamin C", quantity: "30 capsules", price: 8.00 }
  ];

  const prescriptions = [
    { id: 1, doctor: "Dr. Smith", date: "15 Oct 2023", status: "Active" },
    { id: 2, doctor: "Dr. Johnson", date: "5 Sep 2023", status: "Expired" }
  ];

  const calculateTotal = () => {
    return currentOrder.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="prescription-order">
      <header className="order-header">
        <h1 className="order-title">
          <FiPackage className="title-icon" />
          Prescription & Order
        </h1>
        <button className="new-prescription-btn">
          <FiPlusCircle className="btn-icon" />
          New Prescription
        </button>
      </header>

      <div className="order-container">
        <div className="order-card">
          <div className="card-header">
            <h2 className="card-title">Current Order</h2>
            <span className="items-count">{currentOrder.length} items</span>
          </div>
          
          <ul className="order-list">
            {currentOrder.map(item => (
              <li key={item.id} className="order-item">
                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-quantity">{item.quantity}</span>
                </div>
                <span className="item-price">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="order-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>$2.99</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${(calculateTotal() + 2.99).toFixed(2)}</span>
            </div>
          </div>

          <button className="order-button">
            <FiCheckCircle className="btn-icon" />
            Place Order
            <FiChevronRight className="arrow-icon" />
          </button>
        </div>

        <div className="prescription-card">
          <div className="card-header">
            <h2 className="card-title">Your Prescriptions</h2>
          </div>
          
          <ul className="prescription-list">
            {prescriptions.map(prescription => (
              <li key={prescription.id} className="prescription-item">
                <div className="prescription-info">
                  <h3 className="prescription-doctor">{prescription.doctor}</h3>
                  <span className="prescription-date">{prescription.date}</span>
                </div>
                <div className="prescription-status">
                  <span className={`status-badge ${prescription.status.toLowerCase()}`}>
                    {prescription.status}
                  </span>
                  <FiChevronRight className="arrow-icon" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionOrder;