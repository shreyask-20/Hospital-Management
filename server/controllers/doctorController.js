const Doctor = require("../models/doctor");

// Get all doctors
const fetchDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Error fetching doctors", error: err });
  }
};

// Add a new doctor
const addDoctor = async (req, res) => {
  const { name, department, date, time } = req.body;

  const newDoctor = new Doctor({
    name,
    department,
    date,
    time,
  });

  try {
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    res.status(500).json({ message: "Error adding doctor", error: err });
  }
};

// Delete a doctor
const deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json({ message: "Doctor deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting doctor", error: err });
  }
};

module.exports = { fetchDoctors, addDoctor, deleteDoctor };