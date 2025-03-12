const express = require("express");
const router = express.Router();
const { getNavigationLinks } = require("../controllers/navigationController");

// Define the route for getting navigation links based on role
router.get("/navigation/:role", getNavigationLinks);

module.exports = router;
