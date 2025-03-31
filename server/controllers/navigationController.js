const { getNavigationLinksByRole } = require("../models/role");

const getNavigationLinks = (req, res) => {
  const { role } = req.params;
  const links = getNavigationLinksByRole(role);

  if (links.length === 0) {
    return res
      .status(403)
      .json({ message: "Role not authorized or invalid role" });
  }

  res.json(links);
};

module.exports = { getNavigationLinks };
