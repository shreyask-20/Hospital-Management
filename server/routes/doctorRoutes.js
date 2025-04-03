const express = require("express");
const router = express.Router();
const { fetchDoctors, addDoctor, deleteDoctor } = require("../controllers/doctorController");

router.get("/", fetchDoctors); // Get all doctors
router.post("/", addDoctor); // Add a new doctor
router.delete("/:id", deleteDoctor); // Delete a doctor by ID

module.exports = router;