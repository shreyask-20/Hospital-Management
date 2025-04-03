import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDoctor.css";

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({ name: "", department: "", date: "", time: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/doctors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doctor),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Doctor added successfully!");
        navigate("/doctors"); // Redirect back to the Doctors List page
      })
      .catch((error) => console.error("Error adding doctor:", error));
  };

  return (
    <div className="add-doctor-page">
      <h1>Add New Doctor</h1>
      <form className="add-doctor-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={doctor.name}
          onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={doctor.department}
          onChange={(e) => setDoctor({ ...doctor, department: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={doctor.date}
          onChange={(e) => setDoctor({ ...doctor, date: e.target.value })}
          required
        />
        <input
          type="time"
          placeholder="Time"
          value={doctor.time}
          onChange={(e) => setDoctor({ ...doctor, time: e.target.value })}
          required
        />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;