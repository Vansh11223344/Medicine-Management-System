import React, { useState } from "react";
import MedicineCard from "../components/MedicineCard";
import Notification from "../components/Notification";
import "./PatientDashboard.css";

const PatientDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const medicines = [
    {
      name: "Paracetamol",
      category: "Pain Relief",
      stock: 0,
      usage: "Take 1 tablet every 6 hours",
      sideEffects: "Nausea, rash",
      manufacturer: "PharmaCo",
      image: "/images/para.webp", // Replace with actual image URL
    },
    {
      name: "Ibuprofen",
      category: "Anti-Inflammatory",
      stock: 5,
      usage: "Take 1 tablet every 8 hours",
      sideEffects: "Dizziness, stomach pain",
      manufacturer: "HealthMed",
      image: "/images/para.webp",
    },
    {
      name: "Amoxicillin",
      category: "Antibiotic",
      stock: 10,
      usage: "Take 1 capsule every 12 hours",
      sideEffects: "Diarrhea, headache",
      manufacturer: "BioPharm",
      image: "/images/para.webp",
    },
  ];

  // Filter medicines based on search
  const filteredMedicines = medicines.filter(
    (med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="patient-dashboard">
      <h2 className="dashboard-title">Patient Dashboard</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Search medicines..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Stock Notifications */}
      {medicines.some((med) => med.stock === 0) && (
        <Notification
          type="error"
          message="Some medicines are out of stock. Click here to set a restock notification."
          onClose={() => console.log("Notification closed")}
        />
      )}

      {/* Medicine List */}
      <div className="medicine-grid">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((med, index) => <MedicineCard key={index} {...med} />)
        ) : (
          <p className="no-medicine">No medicines found.</p>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
