const express = require("express");
const cors = require("cors");
const navigationRoutes = require("./routes/navigationRoutes");

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", navigationRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});