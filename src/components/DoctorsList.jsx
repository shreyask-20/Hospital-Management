import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorsList.css";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  const deleteDoctor = (id) => {
    fetch(`http://localhost:5000/api/doctors/${id}`, { method: "DELETE" })
      .then(() => setDoctors(doctors.filter((doctor) => doctor._id !== id)))
      .catch((error) => console.error("Error deleting doctor:", error));
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="doctors-list">
      <h1>Doctors List</h1>

      {/* Search Bar and Add Doctor Button */}
      <div className="search-add-container">
        <input
          type="text"
          placeholder="Search doctors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="add-doctor-btn" onClick={() => navigate("/add-doctor")}>
          Add Doctor
        </button>
      </div>

      {/* Doctors Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Department</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doctor) => (
              <tr key={doctor._id}>
                <td>{doctor.name}</td>
                <td>{doctor.department}</td>
                <td>{doctor.date}</td>
                <td>{doctor.time}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn" onClick={() => deleteDoctor(doctor._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorsList;