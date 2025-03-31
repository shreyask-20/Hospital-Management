const mongoose = require("mongoose");
const PatientStatsSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model(
  "PatientStats",
  PatientStatsSchema,
  "patients"
);
