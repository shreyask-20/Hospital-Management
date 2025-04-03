const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Import mongoose
require("dotenv").config(); // Import dotenv to load environment variables

const navigationRoutes = require("./routes/navigationRoutes");
const doctorRoutes = require("./routes/doctorRoutes");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api", navigationRoutes);
app.use("/api/doctors", doctorRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});