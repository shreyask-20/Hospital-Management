const mongoose = require("mongoose");
const DoctorSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model("Doctor", DoctorSchema, "doctors");
