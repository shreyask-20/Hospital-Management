const mongoose = require("mongoose");
const AppointmentSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model(
  "Appointment",
  AppointmentSchema,
  "appointments"
);
