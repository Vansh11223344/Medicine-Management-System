import React, { useState } from "react";
import "./InventoryManagement.css";

const InventoryManagement = () => {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", stock: 50, expiration: "12/2025" },
    { id: 2, name: "Ibuprofen", stock: 30, expiration: "06/2026" },
  ]);

  const [newMedicine, setNewMedicine] = useState({
    name: "",
    stock: "",
    expiration: "",
  });

  const [editingMedicine, setEditingMedicine] = useState(null);

  // Handle form input
  const handleChange = (e) => {
    setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  };

  // Add new medicine
  const addMedicine = () => {
    if (newMedicine.name && newMedicine.stock && newMedicine.expiration) {
      setMedicines([...medicines, { id: Date.now(), ...newMedicine }]);
      setNewMedicine({ name: "", stock: "", expiration: "" });
    }
  };

  // Remove medicine
  const removeMedicine = (id) => {
    setMedicines(medicines.filter((med) => med.id !== id));
  };

  // Start editing a medicine
  const startEditing = (medicine) => {
    setEditingMedicine(medicine);
  };

  // Save edited medicine
  const saveEdit = () => {
    setMedicines(
      medicines.map((med) =>
        med.id === editingMedicine.id ? editingMedicine : med
      )
    );
    setEditingMedicine(null);
  };

  return (
    <div className="inventory-management">
      <h2 className="inventory-title">Inventory Management</h2>

      {/* Add New Medicine Section */}
      <div className="add-medicine-form">
        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          value={newMedicine.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newMedicine.stock}
          onChange={handleChange}
        />
        <input
          type="text"
          name="expiration"
          placeholder="Expiration Date (MM/YYYY)"
          value={newMedicine.expiration}
          onChange={handleChange}
        />
        <button className="add-button" onClick={addMedicine}>
          ➕ Add Medicine
        </button>
      </div>

      {/* Inventory Table */}
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Expiration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td>
                {editingMedicine?.id === medicine.id ? (
                  <input
                    type="text"
                    value={editingMedicine.name}
                    onChange={(e) =>
                      setEditingMedicine({
                        ...editingMedicine,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  medicine.name
                )}
              </td>
              <td>
                {editingMedicine?.id === medicine.id ? (
                  <input
                    type="number"
                    value={editingMedicine.stock}
                    onChange={(e) =>
                      setEditingMedicine({
                        ...editingMedicine,
                        stock: e.target.value,
                      })
                    }
                  />
                ) : (
                  medicine.stock
                )}
              </td>
              <td>
                {editingMedicine?.id === medicine.id ? (
                  <input
                    type="text"
                    value={editingMedicine.expiration}
                    onChange={(e) =>
                      setEditingMedicine({
                        ...editingMedicine,
                        expiration: e.target.value,
                      })
                    }
                  />
                ) : (
                  medicine.expiration
                )}
              </td>
              <td>
                {editingMedicine?.id === medicine.id ? (
                  <button className="save-button" onClick={saveEdit}>
                    💾 Save
                  </button>
                ) : (
                  <>
                    <button
                      className="edit-button"
                      onClick={() => startEditing(medicine)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="remove-button"
                      onClick={() => removeMedicine(medicine.id)}
                    >
                      ❌ Remove
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;
