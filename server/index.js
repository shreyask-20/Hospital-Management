const express = require("express");
const cors = require("cors");
const navigationRoutes = require("./routes/navigationRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", navigationRoutes);
mongoose
  .connect(
    "mongodb+srv://chchandu554:admin@cluster0.e7udf.mongodb.net/hospitalDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// Routes
app.use("/api/hospital", require("./routes/hospitalRoutes"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
