const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctors");
const Appointment = require("../models/Appointment");
const PatientStats = require("../models/PatientStats");

// ✅ Get total number of doctors
router.get("/total-doctors", async (req, res) => {
  try {
    const totalDoctors = await Doctor.countDocuments();
    res.json({ totalDoctors });
  } catch (error) {
    res.status(500).json({ error: "Error fetching total doctors" });
  }
});

// ✅ Get today's total appointments
router.get("/daily-appointments", async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0]; // Get "YYYY-MM-DD"
    const totalAppointments = await Appointment.countDocuments({ date: today });
    const Patients = await PatientStats.countDocuments();
    res.json({ totalAppointments, Patients });
  } catch (error) {
    res.status(500).json({ error: "Error fetching daily appointments" });
  }
});

router.get("/top-doctors", async (req, res) => {
  try {
    const doctors = await Doctor.find().select("name specialization").limit(5); // No image field
    res.json(doctors);
  } catch (error) {
    console.error("Error fetching top doctors:", error);
    res.status(500).json({ error: "Error fetching top doctors" });
  }
});

// ✅ Get patient statistics 
router.get("/patient-statistics", async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const formatDate = (date) => date.toISOString().split("T")[0];

    const last7Days = [...Array(7)]
      .map((_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        return formatDate(date);
      })
      .reverse();

    const last4Weeks = [...Array(4)]
      .map((_, i) => {
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay() - i * 7 + 1);
        return formatDate(startOfWeek);
      })
      .reverse();

   
    const totalPatientsBefore7Days = await PatientStats.countDocuments({
      dateAdmitted: { $lt: last7Days[0] },
    });

    let cumulativeTotal = totalPatientsBefore7Days;

   
    const dailyData = await Promise.all(
      last7Days.map(async (date) => {
        const dailyCount = await Appointment.countDocuments({ date });

        
        cumulativeTotal += dailyCount;

        return {
          date,
          newAppointments: dailyCount,
          totalPatients: cumulativeTotal,
        };
      })
    );

    const totalPatientsBefore4Weeks = await PatientStats.countDocuments({
      dateAdmitted: { $lt: last4Weeks[0] },
    });

    let cumulativeWeeklyTotal = totalPatientsBefore4Weeks;

    const weeklyData = await Promise.all(
      last4Weeks.map(async (weekStart, index) => {
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);
        const formattedWeekEnd = formatDate(weekEnd);

        const weeklyCount = await Appointment.countDocuments({
          date: { $gte: weekStart, $lte: formattedWeekEnd },
        });

        cumulativeWeeklyTotal += weeklyCount;

        return {
          week: `Week ${index + 1}`,
          newAppointments: weeklyCount,
          totalPatients: cumulativeWeeklyTotal,
        };
      })
    );

    res.json({
      dailyData,
      weeklyData,
    });
  } catch (error) {
    console.error("Error fetching patient statistics:", error);
    res.status(500).json({ error: "Error fetching patient statistics" });
  }
});

module.exports = router;
