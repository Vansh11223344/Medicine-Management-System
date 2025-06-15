import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register ()  {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure the backend API is running and accessible
      const response = await axios.post("http://localhost:5000/api/clients", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role, // match DB constraints
        is_active: true
      });

      console.log("User registered:", response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error registering user:", error.response?.data || error.message);
      alert("Registration failed!");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option>Patient</option>
            <option>Pharmacist</option>
            <option>Admin</option>
          </select>
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
};

export default Register;
